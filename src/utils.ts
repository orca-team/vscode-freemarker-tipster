import { CompletionItemLabel, MarkdownString } from "vscode";
import { DirectiveInfo } from "./types";

/**
 * Check if a provided value is non-null and non-undefined.
 * @param value any value
 * @returns boolean
 */
export function isValidValue<V = unknown>(
  value?: any
): value is NonNullable<V> {
  return value !== undefined && value !== null;
}

/**
 * Generates display information for a directive based on its details.
 */
export function generateDirectiveDisplayInfo(info: DirectiveInfo) {
  const { name, ref, deprecated } = info;
  const title = deprecated ? `${name} (deprecated)` : name;
  const referenceText = Array.isArray(ref)
    ? ref
        .map(
          ({ condition, currentRef }) =>
            `If you ${condition}, see this [reference](${currentRef}).`
        )
        .join("\n\n")
    : `[FreeMarker Reference](${ref})`;
  const markdownContent = new MarkdownString(
    `***${title}***\n\n${referenceText}`
  );

  return {
    label: {
      label: name,
      detail: deprecated ? " (deprecated)" : null,
    } as CompletionItemLabel,
    referenceText,
    markdownContent,
  };
}
