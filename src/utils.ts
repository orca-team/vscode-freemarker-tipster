import { MarkdownString } from "vscode";
import { DirectiveInfo } from "./types";

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
    title,
    referenceText,
    markdownContent,
  };
}
