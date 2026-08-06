"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const node_1 = require("vscode-languageclient/node");
class ApplyEditPreserveSelection {
    client;
    constructor(client) {
        this.client = client;
    }
    fillClientCapabilities(capabilities) {
        if (!capabilities.experimental) {
            capabilities.experimental = {};
        }
        capabilities.experimental.dataFlexApplyEditPreserveSelection = true;
    }
    getState() {
        return { kind: 'static' };
    }
    initialize(capabilities) {
        this.client.onRequest("dataFlex/applyEditPreserveSelection", async (payload) => {
            const { textDocument, edits } = payload;
            const editor = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === textDocument.uri);
            if (!editor)
                return false;
            if (textDocument.version != null && editor.document.version !== textDocument.version) {
                return false;
            }
            const savedSelections = editor.selections;
            const success = await editor.edit(editBuilder => {
                for (const edit of edits) {
                    const range = new vscode.Range(edit.range.start.line, edit.range.start.character, edit.range.end.line, edit.range.end.character);
                    editBuilder.replace(range, edit.newText);
                }
            });
            editor.selections = savedSelections;
            return success;
        });
    }
    clear() {
    }
}
// This method is called when your extension is activated
function activate(context) {
    const path = vscode.Uri.joinPath(context.extensionUri, "server", "dataflex-lsp");
    const executable = {
        command: path.fsPath,
        transport: node_1.TransportKind.stdio,
    };
    const serverOptions = executable;
    const clientOptions = {
        documentSelector: [{ scheme: "file", language: "dataflex" }],
    };
    let client = new node_1.LanguageClient("DataFlex Language Server", serverOptions, clientOptions);
    client.registerFeature(new ApplyEditPreserveSelection(client));
    client.start();
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map