import * as vscode from "vscode";
import {
  Command,
  ClientCapabilities,
  Executable,
  FeatureState,
  LanguageClient,
  LanguageClientOptions,
  ServerCapabilities,
  ServerOptions,
  StaticFeature,
  TransportKind,
} from "vscode-languageclient/node";

class ApplyEditPreserveSelection implements StaticFeature {
  constructor(private client: LanguageClient) { }

  fillClientCapabilities(capabilities: ClientCapabilities): void {
    if (!capabilities.experimental) {
      capabilities.experimental = {};
    }
    capabilities.experimental.dataFlexApplyEditPreserveSelection = true;
  }

  getState(): FeatureState {
    return { kind: 'static' };
  }

  initialize(capabilities: ServerCapabilities): void {
    this.client.onRequest("dataFlex/applyEditPreserveSelection", async (payload) => {
      const { textDocument, edits } = payload;
      const editor = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === textDocument.uri);
      if (!editor) return false;

      if (textDocument.version != null && editor.document.version !== textDocument.version) {
        return false;
      }

      const savedSelections = editor.selections;
      const success = await editor.edit(editBuilder => {
        for (const edit of edits) {
          const range = new vscode.Range(
            edit.range.start.line, edit.range.start.character,
            edit.range.end.line, edit.range.end.character
          );
          editBuilder.replace(range, edit.newText);
        }
      });
      editor.selections = savedSelections;

      return success;
    });
  }

  clear(): void {
  }
}

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  const path = vscode.Uri.joinPath(
    context.extensionUri,
    "server",
    "dataflex-lsp",
  );

  const executable: Executable = {
    command: path.fsPath,
    transport: TransportKind.stdio,
  };
  const serverOptions: ServerOptions = executable;

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "dataflex" }],
  };

  let client = new LanguageClient(
    "DataFlex Language Server",
    serverOptions,
    clientOptions,
  );

  client.registerFeature(new ApplyEditPreserveSelection(client));
  client.start();
}

// This method is called when your extension is deactivated
export function deactivate() { }
