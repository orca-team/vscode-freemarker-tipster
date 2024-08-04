import { BuiltInInfo, BuiltInReferenceInfo, DirectiveInfo } from "./types";

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

const isTypeBuiltInReferences: BuiltInReferenceInfo[] = [
  "string",
  "number",
  "boolean",
  "date",
  "date_like",
  "date_only",
  "time",
  "datetime",
  "unknown_date_like",
  "method",
  "transform",
  "macro",
  "hash",
  "hash_ex",
  "sequence",
  "collection",
  "collection_ex",
  "enumerable",
  "indexable",
  "directive",
  "node",
  "markup_output",
].map((keyType) => ({
  name: `is_${keyType}`,
  ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_isType",
}));

/**
 * All FreeMarker built-ins reference information
 * @see https://freemarker.apache.org/docs/ref_builtins_alphaidx.html
 */
export const ALL_BUILT_INS: BuiltInInfo[] = [
  {
    actType: "for strings/numbers/booleans",
    description: "Built-ins for strings/numbers/booleans.",
    builtIns: [
      {
        name: "c",
        ref: [
          {
            condition: "strings",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_c_string",
          },
          {
            condition: "numbers",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_c",
          },
          {
            condition: "booleans",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_boolean.html#ref_builtin_c_boolean",
          },
        ],
      },
      {
        name: "cn",
        ref: [
          {
            condition: "strings",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_cn_string",
          },
          {
            condition: "numbers",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_cn",
          },
          {
            condition: "booleans",
            currentRef:
              "https://freemarker.apache.org/docs/ref_builtins_boolean.html#ref_builtin_cn_boolean",
          },
        ],
      },
    ],
  },
  {
    actType: "for strings",
    description: "Built-ins for strings.",
    builtIns: [
      {
        name: "boolean",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_boolean",
      },
      {
        name: "cap_first",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_cap_first",
      },
      {
        name: "c_lower_case",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_c_lower_case",
      },
      {
        name: "c_upper_case",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_c_upper_case",
      },
      {
        name: "capitalize",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_capitalize",
      },
      {
        name: "chop_linebreak",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_chop_linebreak",
      },
      {
        name: "contains",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_contains",
      },
      {
        name: "date",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_date",
      },
      {
        name: "time",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_date",
      },
      {
        name: "datetime",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_date",
      },
      {
        name: "ends_with",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_ends_with",
      },
      {
        name: "ensure_ends_with",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_ensure_ends_with",
      },
      {
        name: "ensure_starts_with",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_ensure_starts_with",
      },
      {
        name: "esc",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_esc",
      },
      {
        name: "groups",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_groups",
      },
      {
        name: "html",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_html",
        deprecated: true,
      },
      {
        name: "index_of",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_index_of",
      },
      {
        name: "j_string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_j_string",
      },
      {
        name: "js_string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_js_string",
      },
      {
        name: "json_string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_json_string",
      },
      {
        name: "keep_after",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_keep_after",
      },
      {
        name: "keep_after_last",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_keep_after_last",
      },
      {
        name: "keep_before",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_keep_before",
      },
      {
        name: "keep_before_last",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_keep_before_last",
      },
      {
        name: "last_index_of",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_last_index_of",
      },
      {
        name: "left_pad",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_left_pad",
      },
      {
        name: "length",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_length",
      },
      {
        name: "lower_case",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_lower_case",
      },
      {
        name: "matches",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_matches",
      },
      {
        name: "no_esc",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_no_esc",
      },
      {
        name: "number",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_number",
      },
      {
        name: "replace",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_replace",
      },
      {
        name: "right_pad",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_right_pad",
      },
      {
        name: "remove_beginning",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_remove_beginning",
      },
      {
        name: "remove_ending",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_remove_ending",
      },
      {
        name: "rtf",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_rtf",
        deprecated: true,
      },
      {
        name: "split",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_split",
      },
      {
        name: "starts_with",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_starts_with",
      },
      {
        name: "string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_string_for_string",
        description: "when used with a string value",
      },
      {
        name: "substring",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_substring",
        deprecated: true,
      },
      {
        name: "trim",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_trim",
      },
      {
        name: "truncate",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_truncate",
      },
      {
        name: "uncap_first",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_uncap_first",
      },
      {
        name: "upper_case",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_upper_case",
      },
      {
        name: "url",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_url",
      },
      {
        name: "url_path",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_url_path",
      },
      {
        name: "word_list",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_word_list",
      },
      {
        name: "xhtml",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_xhtml",
        deprecated: true,
      },
      {
        name: "xml",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_xml",
        deprecated: true,
      },
    ],
  },
  {
    actType: "for numbers",
    description: "Built-ins for numbers",
    builtIns: [
      {
        name: "abs",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_abs",
      },
      {
        name: "is_infinite",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_is_infinite",
      },
      {
        name: "is_nan",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_is_nan",
      },
      {
        name: "lower_abc",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_lower_abc",
      },
      {
        name: "round",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_rounding",
      },
      {
        name: "floor",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_rounding",
      },
      {
        name: "ceiling",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_rounding",
      },
      {
        name: "string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_number.html#ref_builtin_string_for_number",
        description: "when used with a numerical value",
      },
      {
        name: "upper_abc",
        ref: "https://freemarker.apache.org/docs/ref_builtins_string.html#ref_builtin_upper_abc",
      },
    ],
  },
  {
    actType: "for date/time/date-time values",
    description: "Built-ins for date/time/date-time values.",
    builtIns: [
      {
        name: "date",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_datetype",
        description: "when used with a date value",
      },
      {
        name: "time",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_datetype",
        description: "when used with a time value",
      },
      {
        name: "datetime",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_datetype",
        description: "when used with a date-time value",
      },
      {
        name: "date_if_unknown",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_if_unknown",
      },
      {
        name: "time_if_unknown",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_if_unknown",
      },
      {
        name: "datetime_if_unknown",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_if_unknown",
      },
      {
        name: "iso_",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_date_iso",
        description:
          "iso_utc, iso_local, iso_utc_nz, iso_local_nz, iso_utc_m, iso_utc_m_nz, etc.",
      },
      {
        name: "string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_date.html#ref_builtin_string_for_date",
        description: "when used with a date/time/date-time value",
      },
    ],
  },
  {
    actType: "for booleans",
    description: "Built-ins for booleans.",
    builtIns: [
      {
        name: "string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_boolean.html#ref_builtin_string_for_boolean",
      },
      {
        name: "then",
        ref: "https://freemarker.apache.org/docs/ref_builtins_boolean.html#ref_builtin_then",
      },
    ],
  },
  {
    actType: "for sequences",
    description: "Built-ins for sequences.",
    builtIns: [
      {
        name: "chunk",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_chunk",
      },
      {
        name: "drop_while",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_drop_while",
      },
      {
        name: "filter",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_filter",
      },
      {
        name: "first",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_first",
      },
      {
        name: "join",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_join",
      },
      {
        name: "last",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_last",
      },
      {
        name: "map",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_map",
      },
      {
        name: "min",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_min_max",
      },
      {
        name: "max",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_min_max",
      },
      {
        name: "reverse",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_reverse",
      },
      {
        name: "seq_contains",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_seq_contains",
      },
      {
        name: "seq_index_of",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_seq_index_of",
      },
      {
        name: "seq_last_index_of",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_seq_last_index_of",
      },
      {
        name: "size",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_size",
      },
      {
        name: "sort",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_sort",
      },
      {
        name: "sort_by",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_sort_by",
      },
      {
        name: "take_while",
        ref: "https://freemarker.apache.org/docs/ref_builtins_sequence.html#ref_builtin_take_while",
      },
    ],
  },
  {
    actType: "for hashes",
    description: "Built-ins for hashes.",
    builtIns: [
      {
        name: "keys",
        ref: "https://freemarker.apache.org/docs/ref_builtins_hash.html#ref_builtin_keys",
      },
      {
        name: "values",
        ref: "https://freemarker.apache.org/docs/ref_builtins_hash.html#ref_builtin_values",
      },
    ],
  },
  {
    actType: "for nodes(XML)",
    description: "Built-ins for nodes(for XML).",
    builtIns: [
      {
        name: "ancestors",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_ancestors",
      },
      {
        name: "children",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_children",
      },
      {
        name: "node_name",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_node_name",
      },
      {
        name: "next_sibling",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_next_sibling",
      },
      {
        name: "node_namespace",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_node_namespace",
      },
      {
        name: "node_type",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_node_type",
      },
      {
        name: "parent",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_parent",
      },
      {
        name: "previous_sibling",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_previous_sibling",
      },
      {
        name: "root",
        ref: "https://freemarker.apache.org/docs/ref_builtins_node.html#ref_builtin_root",
      },
    ],
  },
  {
    actType: "for loop variable",
    description: "Loop variable built-ins.",
    builtIns: [
      {
        name: "counter",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_counter",
      },
      {
        name: "has_next",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_has_next",
      },
      {
        name: "index",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_index",
      },
      {
        name: "is_even_item",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_is_even_item",
      },
      {
        name: "is_first",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_is_first",
      },
      {
        name: "is_last",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_is_last",
      },
      {
        name: "is_odd_item",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_is_odd_item",
      },
      {
        name: "item_cycle",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_item_cycle",
      },
      {
        name: "item_parity",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_item_parity",
      },
      {
        name: "item_parity_cap",
        ref: "https://freemarker.apache.org/docs/ref_builtins_loop_var.html#ref_builtin_item_parity_cap",
      },
    ],
  },
  {
    actType: "type independent",
    description: "Type independent built-ins.",
    builtIns: [
      {
        name: "switch",
        ref: "https://freemarker.apache.org/docs/ref_builtins_type_independent.html",
      },
    ],
  },
  {
    actType: "expert",
    description: "Seldom used and expert built-ins.",
    builtIns: [
      {
        name: "absolute_template_name",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_absolute_template_name",
      },
      {
        name: "api",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_buitin_api_and_has_api",
      },
      {
        name: "has_api",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_buitin_api_and_has_api",
      },
      {
        name: "byte",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "double",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "float",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "int",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "long",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "short",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numType",
      },
      {
        name: "eval",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_eval",
      },
      {
        name: "eval_json",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_eval_json",
      },
      {
        name: "has_content",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_has_content",
      },
      {
        name: "interpret",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_interpret",
      },
      ...isTypeBuiltInReferences,
      {
        name: "markup_string",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_markup_string",
      },
      {
        name: "namespace",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_namespace",
      },
      {
        name: "new",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_new",
      },
      {
        name: "number_to_date",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numToDate",
      },
      {
        name: "number_to_time",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numToDate",
      },
      {
        name: "number_to_datetime",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_numToDate",
      },
      {
        name: "sequence",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_sequence",
      },
      {
        name: "with_args",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_with_args",
      },
      {
        name: "with_args_last",
        ref: "https://freemarker.apache.org/docs/ref_builtins_expert.html#ref_builtin_with_args_last",
      },
    ],
  },
];
