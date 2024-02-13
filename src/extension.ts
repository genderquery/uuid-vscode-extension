import * as vscode from "vscode";
import { v4 as uuidv4 } from "uuid";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerTextEditorCommand(
    "uuid.generate",
    insertUuidAtCursor
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

function insertUuidAtCursor(
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) {
  textEditor.selections.forEach((selection) => {
    const uuid = uuidv4();
    edit.replace(new vscode.Range(selection.start, selection.end), uuid);
  });
}
