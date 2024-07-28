// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import provideDefinition from "./provideDefinition";
import provideMacroCompletionItems from "./provideMacroCompletionItems";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-freemarker-tipster" is now active!'
  );

  const ftlDocumentSelector: vscode.DocumentSelector = {
    language: "ftl",
    scheme: "file",
  };

  // definition provider for `macro` and `function` directives
  const definitionProvider = vscode.languages.registerDefinitionProvider(
    ftlDocumentSelector,
    {
      provideDefinition,
    }
  );

  // completion item provider for `macro` directives
  const macroCompletionItemProvider =
    vscode.languages.registerCompletionItemProvider(
      ftlDocumentSelector,
      {
        provideCompletionItems: provideMacroCompletionItems,
      },
      "@"
    );

  context.subscriptions.push(definitionProvider, macroCompletionItemProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
