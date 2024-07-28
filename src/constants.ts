type DifferentReference = {
  condition: string;

  currentRef: string;
};

type DirectiveInfo = {
  name: string;

  ref: string | DifferentReference[];

  deprecated?: boolean;
};

/**
 * All FreeMarker directives references information
 * @see https://freemarker.apache.org/docs/ref_directives.html
 */
export const ALL_DIRECTIVES: DirectiveInfo[] = [
  {
    name: "assign",
    ref: "https://freemarker.apache.org/docs/ref_directive_assign.html",
  },
  {
    name: "attempt",
    ref: "https://freemarker.apache.org/docs/ref_directive_attempt.html",
  },
  {
    name: "recover",
    ref: "https://freemarker.apache.org/docs/ref_directive_attempt.html",
  },
  {
    name: "autoesc",
    ref: "https://freemarker.apache.org/docs/ref_directive_autoesc.html",
  },
  {
    name: "compress",
    ref: "https://freemarker.apache.org/docs/ref_directive_compress.html",
  },
  {
    name: "escape",
    ref: "https://freemarker.apache.org/docs/ref_directive_escape.html",
    deprecated: true,
  },
  {
    name: "noescape",
    ref: "https://freemarker.apache.org/docs/ref_directive_escape.html",
    deprecated: true,
  },
  {
    name: "flush",
    ref: "https://freemarker.apache.org/docs/ref_directive_flush.html",
  },
  {
    name: "ftl",
    ref: "https://freemarker.apache.org/docs/ref_directive_ftl.html",
  },
  {
    name: "function",
    ref: "https://freemarker.apache.org/docs/ref_directive_function.html",
  },
  {
    name: "return",
    ref: [
      {
        condition: "use it in `function`",
        currentRef:
          "https://freemarker.apache.org/docs/ref_directive_function.html",
      },
      {
        condition: "use it in `macro`",
        currentRef:
          "https://freemarker.apache.org/docs/ref_directive_macro.html",
      },
    ],
  },
  {
    name: "global",
    ref: "https://freemarker.apache.org/docs/ref_directive_global.html",
  },
  {
    name: "if",
    ref: "https://freemarker.apache.org/docs/ref_directive_if.html",
  },
  {
    name: "elseif",
    ref: "https://freemarker.apache.org/docs/ref_directive_if.html",
  },
  {
    name: "else",
    ref: [
      {
        condition: "use it in `if`",
        currentRef: "https://freemarker.apache.org/docs/ref_directive_if.html",
      },
      {
        condition: "use it in `list`",
        currentRef:
          "https://freemarker.apache.org/docs/ref_directive_list.html",
      },
    ],
  },
  {
    name: "import",
    ref: "https://freemarker.apache.org/docs/ref_directive_import.html",
  },
  {
    name: "include",
    ref: "https://freemarker.apache.org/docs/ref_directive_include.html",
  },
  {
    name: "list",
    ref: "https://freemarker.apache.org/docs/ref_directive_list.html",
  },
  {
    name: "items",
    ref: "https://freemarker.apache.org/docs/ref_directive_list.html",
  },
  {
    name: "sep",
    ref: "https://freemarker.apache.org/docs/ref_directive_list.html",
  },
  {
    name: "break",
    ref: [
      {
        condition: "use it in `list`",
        currentRef:
          "https://freemarker.apache.org/docs/ref_directive_list.html",
      },
      {
        condition: "use it in `switch`",
        currentRef:
          "https://freemarker.apache.org/docs/ref_directive_switch.html",
      },
    ],
  },
  {
    name: "continue",
    ref: "https://freemarker.apache.org/docs/ref_directive_list.html",
  },
  {
    name: "local",
    ref: "https://freemarker.apache.org/docs/ref_directive_local.html",
  },
  {
    name: "macro",
    ref: "https://freemarker.apache.org/docs/ref_directive_macro.html",
  },
  {
    name: "nested",
    ref: "https://freemarker.apache.org/docs/ref_directive_macro.html",
  },
  {
    name: "noautoesc",
    ref: "https://freemarker.apache.org/docs/ref_directive_noautoesc.html",
  },
  {
    name: "noparse",
    ref: "https://freemarker.apache.org/docs/ref_directive_noparse.html",
  },
  {
    name: "nt",
    ref: "https://freemarker.apache.org/docs/ref_directive_nt.html",
  },
  {
    name: "outputformat",
    ref: "https://freemarker.apache.org/docs/ref_directive_outputformat.html",
  },
  {
    name: "setting",
    ref: "https://freemarker.apache.org/docs/ref_directive_setting.html",
  },
  {
    name: "stop",
    ref: "https://freemarker.apache.org/docs/ref_directive_stop.html",
  },
  {
    name: "switch",
    ref: "https://freemarker.apache.org/docs/ref_directive_switch.html",
  },
  {
    name: "case",
    ref: "https://freemarker.apache.org/docs/ref_directive_switch.html",
  },
  {
    name: "default",
    ref: "https://freemarker.apache.org/docs/ref_directive_switch.html",
  },
  {
    name: "t",
    ref: "https://freemarker.apache.org/docs/ref_directive_t.html",
  },
  {
    name: "lt",
    ref: "https://freemarker.apache.org/docs/ref_directive_t.html",
  },
  {
    name: "rt",
    ref: "https://freemarker.apache.org/docs/ref_directive_t.html",
  },
  {
    name: "visit",
    ref: "https://freemarker.apache.org/docs/ref_directive_visit.html",
  },
  {
    name: "recurse",
    ref: "https://freemarker.apache.org/docs/ref_directive_visit.html",
  },
  {
    name: "fallback",
    ref: "https://freemarker.apache.org/docs/ref_directive_visit.html",
  },
];
