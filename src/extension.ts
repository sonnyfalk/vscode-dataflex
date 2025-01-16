import * as vscode from "vscode";
import {
  Command,
  Executable,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

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
  client.start();
}

// This method is called when your extension is deactivated
export function deactivate() {}
