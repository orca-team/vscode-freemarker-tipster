import {
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Definition,
  DefinitionLink,
  Uri,
  Range,
} from "vscode";

/**
 * Searches through the provided text document for a line that matches the given regular expression.
 *
 * @param document text document
 * @param regex regular expression
 * @returns The index of the first line that matches the regular expression, or null if no match is found.
 */
function searchLine(document: TextDocument, regex: RegExp): number | null {
  const lineCount = document.lineCount;
  let line = 0;

  while (line < lineCount) {
    const lineText = document.lineAt(line).text;
    if (regex.test(lineText)) {
      return line;
    }
    line++;
  }

  return null;
}

/**
 * Checks if the given text is a valid macro directive.
 *
 * @param text The string of text to check.
 * @returns boolean
 */
function isValidMacroText(text: string) {
  return text.startsWith("<@");
}

/**
 * Checks if the given text is a valid function directive.
 *
 * @param text The string of text to check.
 * @returns boolean
 */
function isValidFunctionText(text: string) {
  return /^([a-zA-Z_$@][a-zA-Z0-9_$@]*)\(([^)]*)\)/.test(text);
}

export default function provideDefinition(
  document: TextDocument,
  position: Position,
  token: CancellationToken
): ProviderResult<Definition | DefinitionLink[]> {
  const macroTextRange = document.getWordRangeAtPosition(
    position,
    // letters, digits, underlines, dollar, at sign, first char cannot be digit
    /<@([a-zA-Z_$@][a-zA-Z0-9_$@]*)/
  );
  const macroText = document.getText(macroTextRange);

  if (isValidMacroText(macroText)) {
    const macroVarName = macroText.substring(2);
    const macroReg = new RegExp(`<#macro\\s+${macroVarName}(?:\\s+|>)`);
    const matchedMacroLine = searchLine(document, macroReg);
    if (matchedMacroLine !== null) {
      return new Promise((resolve) => {
        return resolve([
          {
            targetUri: Uri.file(document.fileName),
            targetRange: new Range(
              new Position(matchedMacroLine, 0),
              new Position(matchedMacroLine + 1, 0)
            ),
            originSelectionRange: document.getWordRangeAtPosition(
              position,
              /@([a-zA-Z_][a-zA-Z0-9_]*)/
            ),
          },
        ]);
      });
    }

    return Promise.resolve(null);
  }

  // letters, digits, underlines, dollar, at sign, first char cannot be digit.
  // must be followed by parentheses.
  const calledFuncReg = /([a-zA-Z_$@][a-zA-Z0-9_$@]*)\(([^)]*)\)/;
  const functionTextRange = document.getWordRangeAtPosition(
    position,
    calledFuncReg
  );
  const functionText = document.getText(functionTextRange);
  if (isValidFunctionText(functionText)) {
    const functionName = functionText.substring(0, functionText.indexOf("("));
    const functionReg = new RegExp(`<#function\\s+${functionName}(?:\\s+|>)`);
    const matchedFunctionLine = searchLine(document, functionReg);
    if (matchedFunctionLine !== null) {
      return new Promise((resolve) => {
        return resolve([
          {
            targetUri: Uri.file(document.fileName),
            targetRange: new Range(
              new Position(matchedFunctionLine, 0),
              new Position(matchedFunctionLine + 1, 0)
            ),
            originSelectionRange: document.getWordRangeAtPosition(
              position,
              calledFuncReg
            ),
          },
        ]);
      });
    }

    return Promise.resolve(null);
  }

  return Promise.resolve(null);
}
