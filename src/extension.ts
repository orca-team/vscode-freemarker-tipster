// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import provideDefinition from "./provideDefinition";
import provideMacroCompletionItems from "./provideMacroCompletionItems";
import provideDirectivesCompletionItems from "./provideDirectivesCompletionItems";
import provideDirectivesHover from "./provideDirectivesHover";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
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

  // completion item provider for all FreeMarker directives
  const directivesCompletionItemProvider =
    vscode.languages.registerCompletionItemProvider(
      ftlDocumentSelector,
      {
        provideCompletionItems: provideDirectivesCompletionItems,
      },
      "#"
    );

  // hover for all FreeMarker directives
  const directivesHoverProvider = vscode.languages.registerHoverProvider(
    ftlDocumentSelector,
    {
      provideHover: provideDirectivesHover,
    }
  );

  context.subscriptions.push(
    definitionProvider,
    macroCompletionItemProvider,
    directivesCompletionItemProvider,
    directivesHoverProvider
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
