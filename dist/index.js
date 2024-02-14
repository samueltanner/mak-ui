'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chroma = require('chroma-js');
var colors = require('tailwindcss/colors');
var React = require('react');
var nextThemes = require('next-themes');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);
var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const twColors = {
  black: "#000",
  white: "#fff",
  "slate-50": "#f8fafc",
  "slate-100": "#f1f5f9",
  "slate-200": "#e2e8f0",
  "slate-300": "#cbd5e1",
  "slate-400": "#94a3b8",
  "slate-500": "#64748b",
  "slate-600": "#475569",
  "slate-700": "#334155",
  "slate-800": "#1e293b",
  "slate-900": "#0f172a",
  "slate-950": "#020617",
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  "gray-950": "#030712",
  "zinc-50": "#fafafa",
  "zinc-100": "#f4f4f5",
  "zinc-200": "#e4e4e7",
  "zinc-300": "#d4d4d8",
  "zinc-400": "#a1a1aa",
  "zinc-500": "#71717a",
  "zinc-600": "#52525b",
  "zinc-700": "#3f3f46",
  "zinc-800": "#27272a",
  "zinc-900": "#18181b",
  "zinc-950": "#09090b",
  "neutral-50": "#fafafa",
  "neutral-100": "#f5f5f5",
  "neutral-200": "#e5e5e5",
  "neutral-300": "#d4d4d4",
  "neutral-400": "#a3a3a3",
  "neutral-500": "#737373",
  "neutral-600": "#525252",
  "neutral-700": "#404040",
  "neutral-800": "#262626",
  "neutral-900": "#171717",
  "neutral-950": "#0a0a0a",
  "stone-50": "#fafaf9",
  "stone-100": "#f5f5f4",
  "stone-200": "#e7e5e4",
  "stone-300": "#d6d3d1",
  "stone-400": "#a8a29e",
  "stone-500": "#78716c",
  "stone-600": "#57534e",
  "stone-700": "#44403c",
  "stone-800": "#292524",
  "stone-900": "#1c1917",
  "stone-950": "#0c0a09",
  "red-50": "#fef2f2",
  "red-100": "#fee2e2",
  "red-200": "#fecaca",
  "red-300": "#fca5a5",
  "red-400": "#f87171",
  "red-500": "#ef4444",
  "red-600": "#dc2626",
  "red-700": "#b91c1c",
  "red-800": "#991b1b",
  "red-900": "#7f1d1d",
  "red-950": "#450a0a",
  "orange-50": "#fff7ed",
  "orange-100": "#ffedd5",
  "orange-200": "#fed7aa",
  "orange-300": "#fdba74",
  "orange-400": "#fb923c",
  "orange-500": "#f97316",
  "orange-600": "#ea580c",
  "orange-700": "#c2410c",
  "orange-800": "#9a3412",
  "orange-900": "#7c2d12",
  "orange-950": "#431407",
  "amber-50": "#fffbeb",
  "amber-100": "#fef3c7",
  "amber-200": "#fde68a",
  "amber-300": "#fcd34d",
  "amber-400": "#fbbf24",
  "amber-500": "#f59e0b",
  "amber-600": "#d97706",
  "amber-700": "#b45309",
  "amber-800": "#92400e",
  "amber-900": "#78350f",
  "amber-950": "#451a03",
  "yellow-50": "#fefce8",
  "yellow-100": "#fef9c3",
  "yellow-200": "#fef08a",
  "yellow-300": "#fde047",
  "yellow-400": "#facc15",
  "yellow-500": "#eab308",
  "yellow-600": "#ca8a04",
  "yellow-700": "#a16207",
  "yellow-800": "#854d0e",
  "yellow-900": "#713f12",
  "yellow-950": "#422006",
  "lime-50": "#f7fee7",
  "lime-100": "#ecfccb",
  "lime-200": "#d9f99d",
  "lime-300": "#bef264",
  "lime-400": "#a3e635",
  "lime-500": "#84cc16",
  "lime-600": "#65a30d",
  "lime-700": "#4d7c0f",
  "lime-800": "#3f6212",
  "lime-900": "#365314",
  "lime-950": "#1a2e05",
  "green-50": "#f0fdf4",
  "green-100": "#dcfce7",
  "green-200": "#bbf7d0",
  "green-300": "#86efac",
  "green-400": "#4ade80",
  "green-500": "#22c55e",
  "green-600": "#16a34a",
  "green-700": "#15803d",
  "green-800": "#166534",
  "green-900": "#14532d",
  "green-950": "#052e16",
  "emerald-50": "#ecfdf5",
  "emerald-100": "#d1fae5",
  "emerald-200": "#a7f3d0",
  "emerald-300": "#6ee7b7",
  "emerald-400": "#34d399",
  "emerald-500": "#10b981",
  "emerald-600": "#059669",
  "emerald-700": "#047857",
  "emerald-800": "#065f46",
  "emerald-900": "#064e3b",
  "emerald-950": "#022c22",
  "teal-50": "#f0fdfa",
  "teal-100": "#ccfbf1",
  "teal-200": "#99f6e4",
  "teal-300": "#5eead4",
  "teal-400": "#2dd4bf",
  "teal-500": "#14b8a6",
  "teal-600": "#0d9488",
  "teal-700": "#0f766e",
  "teal-800": "#115e59",
  "teal-900": "#134e4a",
  "teal-950": "#042f2e",
  "cyan-50": "#ecfeff",
  "cyan-100": "#cffafe",
  "cyan-200": "#a5f3fc",
  "cyan-300": "#67e8f9",
  "cyan-400": "#22d3ee",
  "cyan-500": "#06b6d4",
  "cyan-600": "#0891b2",
  "cyan-700": "#0e7490",
  "cyan-800": "#155e75",
  "cyan-900": "#164e63",
  "cyan-950": "#083344",
  "sky-50": "#f0f9ff",
  "sky-100": "#e0f2fe",
  "sky-200": "#bae6fd",
  "sky-300": "#7dd3fc",
  "sky-400": "#38bdf8",
  "sky-500": "#0ea5e9",
  "sky-600": "#0284c7",
  "sky-700": "#0369a1",
  "sky-800": "#075985",
  "sky-900": "#0c4a6e",
  "sky-950": "#082f49",
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
  "blue-400": "#60a5fa",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "blue-700": "#1d4ed8",
  "blue-800": "#1e40af",
  "blue-900": "#1e3a8a",
  "blue-950": "#172554",
  "indigo-50": "#eef2ff",
  "indigo-100": "#e0e7ff",
  "indigo-200": "#c7d2fe",
  "indigo-300": "#a5b4fc",
  "indigo-400": "#818cf8",
  "indigo-500": "#6366f1",
  "indigo-600": "#4f46e5",
  "indigo-700": "#4338ca",
  "indigo-800": "#3730a3",
  "indigo-900": "#312e81",
  "indigo-950": "#1e1b4b",
  "violet-50": "#f5f3ff",
  "violet-100": "#ede9fe",
  "violet-200": "#ddd6fe",
  "violet-300": "#c4b5fd",
  "violet-400": "#a78bfa",
  "violet-500": "#8b5cf6",
  "violet-600": "#7c3aed",
  "violet-700": "#6d28d9",
  "violet-800": "#5b21b6",
  "violet-900": "#4c1d95",
  "violet-950": "#2e1065",
  "purple-50": "#faf5ff",
  "purple-100": "#f3e8ff",
  "purple-200": "#e9d5ff",
  "purple-300": "#d8b4fe",
  "purple-400": "#c084fc",
  "purple-500": "#a855f7",
  "purple-600": "#9333ea",
  "purple-700": "#7e22ce",
  "purple-800": "#6b21a8",
  "purple-900": "#581c87",
  "purple-950": "#3b0764",
  "fuchsia-50": "#fdf4ff",
  "fuchsia-100": "#fae8ff",
  "fuchsia-200": "#f5d0fe",
  "fuchsia-300": "#f0abfc",
  "fuchsia-400": "#e879f9",
  "fuchsia-500": "#d946ef",
  "fuchsia-600": "#c026d3",
  "fuchsia-700": "#a21caf",
  "fuchsia-800": "#86198f",
  "fuchsia-900": "#701a75",
  "fuchsia-950": "#4a044e",
  "pink-50": "#fdf2f8",
  "pink-100": "#fce7f3",
  "pink-200": "#fbcfe8",
  "pink-300": "#f9a8d4",
  "pink-400": "#f472b6",
  "pink-500": "#ec4899",
  "pink-600": "#db2777",
  "pink-700": "#be185d",
  "pink-800": "#9d174d",
  "pink-900": "#831843",
  "pink-950": "#500724",
  "rose-50": "#fff1f2",
  "rose-100": "#ffe4e6",
  "rose-200": "#fecdd3",
  "rose-300": "#fda4af",
  "rose-400": "#fb7185",
  "rose-500": "#f43f5e",
  "rose-600": "#e11d48",
  "rose-700": "#be123c",
  "rose-800": "#9f1239",
  "rose-900": "#881337",
  "rose-950": "#4c0519"
};

const makUiThemes = ["dark", "light", "custom"];
const makUiThemesSet = new Set(makUiThemes);
const makUiPalettes = ["color", "text", "border", "theme"];
const makUiVariants = ["primary", "secondary", "tertiary", "custom", "success", "error", "danger", "warning", "info", "light", "dark"];
const makUiShades = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
const makUiShadesSet = new Set(makUiShades);
const makUiDefaultColors = {
  primary: "mak-teal",
  secondary: "green",
  tertiary: "yellow",
  success: "green",
  error: "red",
  danger: "red",
  warning: "yellow",
  info: "blue",
  custom: "zinc",
  light: "white",
  dark: "black"
  // white: "white",
  // black: "black",
};
const makUiDefaultPalette = {
  light: {
    color: makUiDefaultColors,
    text: "zinc-50",
    border: "mak-teal-300",
    theme: {
      primary: "zinc-50",
      secondary: "zinc-100",
      tertiary: "zinc-200",
      custom: "zinc-950",
      light: "white",
      white: "white",
      dark: "black",
      black: "black"
    }
  },
  dark: {
    color: makUiDefaultColors,
    text: "zinc-950",
    border: "mak-teal-600",
    theme: {
      primary: "zinc-950",
      secondary: "zinc-900",
      tertiary: "zinc-800",
      custom: "zinc-700",
      light: "white",
      dark: "black",
      white: "white",
      black: "black"
    }
  },
  custom: {
    color: makUiDefaultColors,
    text: "zinc-900",
    border: "zinc-900",
    theme: {
      primary: "zinc-50",
      secondary: "zinc-100",
      tertiary: "zinc-200",
      custom: "zinc-950",
      light: "white",
      dark: "black",
      white: "white",
      black: "black"
    }
  }
};
const makUiDefaultThemeShades = {
  light: {
    primary: 50,
    secondary: 100,
    tertiary: 200,
    custom: 950,
    light: 50,
    dark: 950,
    white: 0,
    black: 1000
  },
  dark: {
    primary: 950,
    secondary: 900,
    tertiary: 800,
    custom: 700,
    light: 50,
    dark: 950,
    white: 0,
    black: 1000
  },
  custom: {
    primary: 50,
    secondary: 100,
    tertiary: 200,
    custom: 950,
    light: 50,
    dark: 950,
    white: 0,
    black: 1000
  }
};
const makUiDefaultStateShades = {
  base: 500,
  hover: 400,
  active: 600,
  autofill: 500,
  click: 400,
  checked: 600,
  closed: 500,
  default: 400,
  disabled: 300,
  empty: 500,
  enabled: 500,
  focus: 500,
  "focus-visible": 500,
  "focus-within": 500,
  "in-range": 500,
  indeterminate: 500,
  invalid: 500,
  open: 500,
  "out-of-range": 500,
  "placeholder-shown": 500,
  "read-only": 500,
  required: 500,
  selected: 500,
  selection: 500,
  target: 500,
  valid: 500,
  visited: 500
};
const defaultButtonConfig = {
  className: "h-fit w-fit px-2 py-1 text-sm rounded-md font-semibold fade-in-out"
};
const defaultInputConfig = {
  className: "h-fit w-fit px-2 py-1 text-sm rounded-md font-semibold"
};
const defaultComponentConfig = {
  button: defaultButtonConfig,
  input: defaultInputConfig
};
const mediaQueries = {
  "2xs": "@media (min-width: 320px)",
  xs: "@media (min-width: 480px)",
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  "2xl": "@media (min-width: 1536px)",
  "3xl": "@media (min-width: 1920px)",
  "4xl": "@media (min-width: 2560px)"
};
const tailwindToCssModifierObject = Object.assign({
  //styles applied directly to element
  //tw eg. hover:bg-red-500
  dark: '[data-theme="dark"] &',
  hover: "&:hover",
  focus: "&:focus",
  "focus-within": "&:focus-within",
  "focus-visible": "&:focus-visible",
  active: "&:active",
  visited: "&:visited",
  target: "&:target",
  has: selector => `:has(:${selector})`,
  "has-not": selector => `:not(has:(:${selector}))`,
  is: selector => `:is(${selector})`,
  "is-not": selector => `:not(:is(${selector}))`,
  "is-has": (selector, altSelector) => `:is(${selector}):has(~ ${altSelector})`,
  "is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(~ ${altSelector}))`,
  first: "&:first-child",
  last: "&:last-child",
  only: "&:only-child",
  odd: "&:nth-child(odd)",
  even: "&:nth-child(even)",
  "first-of-type": "&:first-of-type",
  "last-of-type": "&:last-of-type",
  "only-of-type": "&:only-of-type",
  empty: "&:empty",
  disabled: "&:disabled",
  enabled: "&:enabled",
  checked: "&:checked",
  indeterminate: "&:indeterminate",
  default: "&:default",
  required: "&:required",
  valid: "&:valid",
  invalid: "&:invalid",
  "in-range": "&:in-range",
  "out-of-range": "&:out-of-range",
  "placeholder-shown": "&:placeholder-shown",
  autofill: "&:autofill",
  "read-only": "&:read-only",
  before: "&::before",
  after: "&::after",
  "first-letter": "&::first-letter",
  "first-line": "&::first-line",
  marker: "&::marker",
  selection: "&::selection",
  file: "&::file-selector-button",
  backdrop: "&::backdrop",
  placeholder: "&::placeholder",
  fullscreen: ":fullscreen",
  "last-child": ":last-child",
  link: ":link",
  "not-checked": ":not(:checked)",
  "only-child": ":only-child",
  optional: ":optional",
  "read-write": ":read-write",
  "first-child": ":first-child",
  //applies styles to parent if child has a certain state or element
  "parent-has": selector => `:has(${selector})`,
  "parent-has-not": selector => `:not(:has(${selector}))`,
  "parent-is": selector => `:is(${selector})`,
  "parent-is-not": selector => `:not(:is(${selector}))`,
  "parent-is-has": (selector, altSelector) => `:is(${selector}):has(${altSelector})`,
  "parent-is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(${altSelector}))`,
  //styles applied to child of a group
  //tw eg. group-hover:bg-red-500
  "group-hover": selector => `.group:hover ${selector}`,
  "group-focus": selector => `.group:focus ${selector}`,
  "group-focus-within": selector => `.group:focus-within ${selector}`,
  "group-focus-visible": selector => `.group:focus-visible ${selector}`,
  "group-active": selector => `.group:active ${selector}`,
  "group-visited": selector => `.group:visited ${selector}`,
  "group-target": selector => `.group:target ${selector}`,
  "group-has": selector => `.group:has(${selector})`,
  "group-has-not": selector => `.group:not(:has(${selector}))`,
  "group-is": selector => `.group:is(${selector})`,
  "group-is-not": selector => `.group:not(:is(${selector}))`,
  "group-is-has": (selector, altSelector) => `.group:is(${selector}):has(${altSelector})`,
  "group-is-has-not": (selector, altSelector) => `.group:is(${selector}):not(:has(${altSelector}))`,
  "group-first": selector => `.group:first-child ${selector}`,
  "group-last": selector => `.group:last-child ${selector}`,
  "group-only-child": selector => `.group:only-child ${selector}`,
  "group-odd": selector => `.group:nth-child(odd) ${selector}`,
  "group-even": selector => `.group:nth-child(even) ${selector}`,
  "group-first-of-type": selector => `.group:first-of-type ${selector}`,
  "group-last-of-type": selector => `.group:last-of-type ${selector}`,
  "group-only-of-type": selector => `.group:only-of-type ${selector}`,
  "group-empty": selector => `.group:empty ${selector}`,
  "group-disabled": selector => `.group:disabled ${selector}`,
  "group-enabled": selector => `.group:enabled ${selector}`,
  "group-checked": selector => `.group:checked ${selector}`,
  "group-indeterminate": selector => `.group:indeterminate ${selector}`,
  "group-default": selector => `.group:default ${selector}`,
  "group-required": selector => `.group:required ${selector}`,
  "group-valid": selector => `.group:valid ${selector}`,
  "group-invalid": selector => `.group:invalid ${selector}`,
  "group-in-range": selector => `.group:in-range ${selector}`,
  "group-out-of-range": selector => `.group:out-of-range ${selector}`,
  "group-placeholder-shown": selector => `.group:placeholder-shown ${selector}`,
  "group-autofill": selector => `.group:autofill ${selector}`,
  "group-read-only": selector => `.group:read-only ${selector}`,
  "group-before": selector => `.group::before ${selector}`,
  "group-after": selector => `.group::after ${selector}`,
  "group-first-letter": selector => `.group::first-letter ${selector}`,
  "group-first-line": selector => `.group::first-line ${selector}`,
  "group-marker": selector => `.group::marker ${selector}`,
  "group-selection": selector => `.group::selection ${selector}`,
  "group-file": selector => `.group::file-selector-button ${selector}`,
  "group-backdrop": selector => `.group::backdrop ${selector}`,
  "group-placeholder": selector => `.group::placeholder ${selector}`,
  "group-fullscreen": selector => `.group:fullscreen ${selector}`,
  "group-last-child": selector => `.group:last-child ${selector}`,
  "group-link": selector => `.group:link ${selector}`,
  "group-not-checked": selector => `.group:not(:checked) ${selector}`,
  "group-optional": selector => `.group:optional ${selector}`,
  "group-read-write": selector => `.group:read-write ${selector}`,
  "group-first-child": selector => `.group:first-child ${selector}`,
  //styles applied from parent element to children
  //tw eg. *-hover:bg-red-500
  "*": "& > *",
  "*-hover": "& > *:hover",
  "*-focus": "& > *:focus",
  "*-focus-within": "& > *:focus-within",
  "*-focus-visible": "& > *:focus-visible",
  "*-active": "& > *:active",
  "*-visited": "& > *:visited",
  "*-target": "& > *:target",
  "*-first": "& > *:first-child",
  "*-last": "& > *:last-child",
  "*-only": "& > *:only-child",
  "*-odd": "& > *:nth-child(odd)",
  "*-even": "& > *:nth-child(even)",
  "*-has": selector => `& > *:has(~ ${selector})`,
  "*-has-not": selector => `& > *:not(:has(~ ${selector}))`,
  "*-is": selector => `& > *:is(${selector})`,
  "*-is-not": selector => `& > *:not(:is(${selector}))`,
  "*-is-has": (selector, altSelector) => `& > *:is(${selector}):has(~ ${altSelector})`,
  "*-is-has-not": (selector, altSelector) => `& > *:is(${selector}):not(:has(~ ${altSelector}))`,
  "*-first-of-type": "& > *:first-of-type",
  "*-last-of-type": "& > *:last-of-type",
  "*-only-of-type": "& > *:only-of-type",
  "*-empty": "& > *:empty",
  "*-disabled": "& > *:disabled",
  "*-enabled": "& > *:enabled",
  "*-checked": "& > *:checked",
  "*-indeterminate": "& > *:indeterminate",
  "*-default": "& > *:default",
  "*-required": "& > *:required",
  "*-valid": "& > *:valid",
  "*-invalid": "& > *:invalid",
  "*-in-range": "& > *:in-range",
  "*-out-of-range": "& > *:out-of-range",
  "*-placeholder-shown": "& > *:placeholder-shown",
  "*-autofill": "& > *:autofill",
  "*-read-only": "& > *:read-only",
  "*-before": "& > *::before",
  "*-after": "& > *::after",
  "*-first-letter": "& > *::first-letter",
  "*-first-line": "& > *::first-line",
  "*-marker": "& > *::marker",
  "*-selection": "& > *::selection",
  "*-file": "& > *::file-selector-button",
  "*-backdrop": "& > *::backdrop",
  "*-placeholder": "& > *::placeholder",
  "*-fullscreen": "& > *fullscreen",
  "*-last-child": "& > *last-child",
  "*-link": "& > *link",
  "*-not-checked": "& > *not(:checked)",
  "*-only-child": "& > *only-child",
  "*-optional": "& > *optional",
  "*-read-write": "& > *read-write",
  "*-first-child": "& > *first-child",
  "*-all": "& > *",
  "*-nth-child": n => `& > *:nth-child(${n})`,
  "*-nth-last-child": n => `& > *:nth-last-child(${n})`,
  "*-nth-of-type": n => `& > *:nth-of-type(${n})`,
  "*-nth-last-of-type": n => `& > *:nth-last-of-type(${n})`,
  //styles applied to peer elements that come after the affected peer
  //tw eg. 1st element input is checked, 2nd element peer-checked:bg-red-500
  "peer-hover": selector => `.peer:hover ~ ${selector}`,
  "peer-focus": selector => `.peer:focus ~ ${selector}`,
  "peer-focus-within": selector => `.peer:focus-within ~ ${selector}`,
  "peer-focus-visible": selector => `.peer:focus-visible ~ ${selector}`,
  "peer-active": selector => `.peer:active ~ ${selector}`,
  "peer-visited": selector => `.peer:visited ~ ${selector}`,
  "peer-target": selector => `.peer:target ~ ${selector}`,
  "peer-has": selector => `.group:has(~ ${selector})`,
  "peer-has-not": selector => `:not(:has(~ ${selector}))`,
  "peer-is": selector => `:is(${selector})`,
  "peer-is-not": selector => `:not(:is(${selector}))`,
  "peer-is-has": (selector, altSelector) => `:is(${selector}):has(~ ${altSelector})`,
  "peer-is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(~ ${altSelector}))`,
  "peer-first": selector => `.peer:first-child ~ ${selector}`,
  "peer-last": selector => `.peer:last-child ~ ${selector}`,
  "peer-only": selector => `.peer:only-child ~ ${selector}`,
  "peer-odd": selector => `.peer:nth-child(odd) ~ ${selector}`,
  "peer-even": selector => `.peer:nth-child(even) ~ ${selector}`,
  "peer-first-of-type": selector => `.peer:first-of-type ~ ${selector}`,
  "peer-last-of-type": selector => `.peer:last-of-type ~ ${selector}`,
  "peer-only-of-type": selector => `.peer:only-of-type ~ ${selector}`,
  "peer-empty": selector => `.peer:empty ~ ${selector}`,
  "peer-disabled": selector => `.peer:disabled ~ ${selector}`,
  "peer-enabled": selector => `.peer:enabled ~ ${selector}`,
  "peer-checked": selector => `.peer:checked ~ ${selector}`,
  "peer-indeterminate": selector => `.peer:indeterminate ~ ${selector}`,
  "peer-default": selector => `.peer:default ~ ${selector}`,
  "peer-required": selector => `.peer:required ~ ${selector}`,
  "peer-valid": selector => `.peer:valid ~ ${selector}`,
  "peer-invalid": selector => `.peer:invalid ~ ${selector}`,
  "peer-in-range": selector => `.peer:in-range ~ ${selector}`,
  "peer-out-of-range": selector => `.peer:out-of-range ~ ${selector}`,
  "peer-placeholder-shown": selector => `.peer:placeholder-shown ~ ${selector}`,
  "peer-autofill": selector => `.peer:autofill ~ ${selector}`,
  "peer-read-only": selector => `.peer:read-only ~ ${selector}`,
  "peer-fullscreen": selector => `.peer:fullscreen ~ ${selector}`,
  "peer-last-child": selector => `.peer:last-child ~ ${selector}`,
  "peer-link": selector => `.peer link ~ ${selector}`,
  "peer-not-checked": "&:not(:has(~ .peer:checked))",
  "peer-only-child": selector => `.peer:only-child) ~ ${selector}`,
  "peer-optional": selector => `.peer:optional) ~ ${selector}`,
  "peer-read-write": selector => `.peer:read-write) ~ ${selector}`,
  "peer-first-child": selector => `.peer:first-child) ~ ${selector}`
}, mediaQueries);

const setLocalStorage = (key, value) => {
  if (typeof window === "undefined") return;
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
const getLocalStorage = key => {
  if (typeof window === "undefined") return;
  return window.localStorage.getItem(key);
};
const removeLocalStorage = key => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
};
const mergeWithFallback = (primary, ...fallbacks) => {
  let result = {};
  fallbacks.forEach(fallback => {
    if (isObject(fallback) && !isEmptyObject(fallback)) Object.keys(fallback).forEach(key => {
      if (result[key] === undefined) {
        result[key] = fallback[key];
      }
    });
  });
  return Object.assign(Object.assign({}, result), primary);
};
const nearestMultiple = (num, multiple, roundDir = "nearest") => {
  const delta = roundDir === "up" ? multiple : roundDir === "down" ? -multiple : 0;
  const remainder = num % multiple;
  return remainder === 0 ? num + delta : num + multiple - remainder + delta;
};
const ensureNestedObject = ({
  parent,
  keys,
  value
}) => {
  keys = keys ? keys.filter(k => k) : [];
  let current = parent;
  if (!keys || keys.length === 0) return current;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1 && value !== undefined) {
      current[key] = value;
    } else {
      current[key] = current[key] || {};
    }
    current = current[key];
  }
  return current;
};
const allowFalsyFallback = (value, fallback) => {
  return value || value === 0 || value === false || value === null || value === undefined ? value : fallback;
};
const isEmptyObject = obj => {
  if (obj === undefined) return false;
  return isObject(obj) && Object.keys(obj).length === 0;
};
const isNestedObject = obj => isObject(obj) && Object.values(obj).some(isObject);
const isObject = v => v !== null && typeof v === "object" && !Array.isArray(v) && typeof v !== "string";
const deepMerge = (...objects) => {
  const result = {};
  const merge = (target, source) => {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === "object") {
        target[key] = target[key] || {};
        merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  };
  for (const obj of objects) {
    if (!isObject(obj)) continue;
    merge(result, obj);
  }
  return result;
};
const constructTailwindObject = ({
  hex,
  step = 100,
  includeNearAbsolutes = true,
  hexPosition = 500,
  includeBlackAndWhite = true,
  blackHex = "#000000",
  whiteHex = "#FFFFFF",
  tailwindConfig
}) => {
  if (hex.includes("-") || hex.charAt(0) !== "#") {
    hex = twColorHelper({
      colorString: hex,
      tailwindConfig
    }).hex;
  }
  if (hex.includes("#white") || hex === "white") {
    hex = "#ffffff";
  }
  if (hex.includes("#black") || hex === "black") {
    hex = "#000000";
  }
  const tailwindColors = {};
  const scale2Start = Math.max(0, hexPosition);
  const scale1 = chroma__default["default"].scale([whiteHex, hex]).mode("rgb").domain([0, hexPosition]);
  const scale2 = chroma__default["default"].scale([hex, blackHex]).mode("rgb").domain([scale2Start, 1000]);
  const getColor = i => {
    return i <= hexPosition ? scale1(i).hex() : scale2(i).hex();
  };
  for (let i = 0; i <= 1000; i += step) {
    tailwindColors[i] = getColor(i);
  }
  if (includeNearAbsolutes) {
    tailwindColors[50] = getColor(50);
    tailwindColors[950] = getColor(950);
  }
  if (includeBlackAndWhite) {
    tailwindColors[0] = whiteHex;
    tailwindColors[1000] = blackHex;
  }
  return tailwindColors;
};
const getThemeShadesObj = shades => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  const lightPrimary = ((_a = shades === null || shades === void 0 ? void 0 : shades.light) === null || _a === void 0 ? void 0 : _a.primary) || getNormalizedShadeNumber(50);
  const lightSecondary = ((_b = shades === null || shades === void 0 ? void 0 : shades.light) === null || _b === void 0 ? void 0 : _b.secondary) || getNormalizedShadeNumber(lightPrimary + 50);
  const lightTertiary = ((_c = shades === null || shades === void 0 ? void 0 : shades.light) === null || _c === void 0 ? void 0 : _c.tertiary) || getNormalizedShadeNumber(lightSecondary + 100);
  const lightCustom = ((_d = shades === null || shades === void 0 ? void 0 : shades.light) === null || _d === void 0 ? void 0 : _d.custom) || getNormalizedShadeNumber(950);
  const darkPrimary = ((_e = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _e === void 0 ? void 0 : _e.primary) || getNormalizedShadeNumber(950);
  const darkSecondary = ((_f = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _f === void 0 ? void 0 : _f.secondary) || getNormalizedShadeNumber(darkPrimary - 50);
  const darkTertiary = ((_g = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _g === void 0 ? void 0 : _g.tertiary) || getNormalizedShadeNumber(darkSecondary - 100);
  const darkCustom = ((_h = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _h === void 0 ? void 0 : _h.custom) || getNormalizedShadeNumber(50);
  const customPrimary = ((_j = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _j === void 0 ? void 0 : _j.primary) || getNormalizedShadeNumber(500);
  const customSecondary = ((_k = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _k === void 0 ? void 0 : _k.secondary) || getNormalizedShadeNumber(customPrimary + 100);
  const customTertiary = ((_l = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _l === void 0 ? void 0 : _l.tertiary) || getNormalizedShadeNumber(customPrimary + 200);
  const customCustom = ((_m = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _m === void 0 ? void 0 : _m.custom) || getNormalizedShadeNumber(customPrimary + 300);
  const responseObj = {
    light: {
      primary: getNormalizedShadeNumber(lightPrimary),
      secondary: getNormalizedShadeNumber(lightSecondary),
      tertiary: getNormalizedShadeNumber(lightTertiary),
      custom: getNormalizedShadeNumber(lightCustom)
    },
    dark: {
      primary: getNormalizedShadeNumber(darkPrimary),
      secondary: getNormalizedShadeNumber(darkSecondary),
      tertiary: getNormalizedShadeNumber(darkTertiary),
      custom: getNormalizedShadeNumber(darkCustom)
    },
    custom: {
      primary: getNormalizedShadeNumber(customPrimary),
      secondary: getNormalizedShadeNumber(customSecondary),
      tertiary: getNormalizedShadeNumber(customTertiary),
      custom: getNormalizedShadeNumber(customCustom)
    }
  };
  return responseObj;
};
const includesShade = string => {
  if (!string) return false;
  const splitString = string.split("-");
  const shade = splitString[splitString.length - 1];
  return !!parseInt(shade);
};
const getNormalizedShadeNumber = num => {
  if (num !== 0 && (!num || typeof num !== "number")) return 500;
  return num <= 50 ? 50 : num >= 950 ? 950 : Math.round(num / 100) * 100;
};
const getConstructedTheme = ({
  providedVariants,
  theme,
  defaultShades,
  altBlack,
  altWhite,
  tailwindConfig
}) => {
  const {
    primary,
    secondary,
    tertiary,
    custom,
    light,
    dark
  } = providedVariants;
  const blackHex = twColorHelper({
    colorString: altBlack,
    tailwindConfig
  }).hex;
  const whiteHex = twColorHelper({
    colorString: altWhite,
    tailwindConfig
  }).hex;
  const {
    shade: primaryShade,
    color: primaryColor,
    hex: primaryHex
  } = twColorHelper({
    colorString: primary || makUiDefaultColors.primary,
    shade: includesShade(primary) ? undefined : defaultShades[theme].primary,
    useDefaults: false,
    tailwindConfig
  });
  const {
    shade: secondaryShade,
    color: secondaryColor,
    hex: secondaryHex
  } = twColorHelper({
    colorString: secondary,
    useDefaults: false,
    tailwindConfig
  });
  const {
    shade: tertiaryShade,
    color: tertiaryColor,
    hex: tertiaryHex
  } = twColorHelper({
    colorString: tertiary,
    useDefaults: false,
    tailwindConfig
  });
  const {
    shade: customShade,
    color: customColor,
    hex: customHex
  } = twColorHelper({
    colorString: custom,
    useDefaults: false,
    tailwindConfig
  });
  const {
    shade: lightShade,
    color: lightColor,
    hex: lightHex
  } = twColorHelper({
    colorString: light || "white",
    useDefaults: false,
    tailwindConfig
  });
  const {
    shade: darkShade,
    color: darkColor,
    hex: darkHex
  } = twColorHelper({
    colorString: dark || "black",
    useDefaults: false,
    tailwindConfig
  });
  const defaultShadesObj = makUiDefaultThemeShades[theme];
  const shadeDiffs = Object.entries(defaultShadesObj).reduce((acc, [variant, shade]) => {
    if (variant === "primary") {
      acc[variant] = 0;
    } else {
      let value = shade - defaultShadesObj["primary"];
      const isNeg = value < 0 ? -1 : 1;
      const absValue = Math.abs(value);
      value = Math.round(absValue / 100) * 100 * isNeg;
      acc[variant] = value;
    }
    return acc;
  }, {});
  const resolvedPrimaryShade = includesShade(primary) ? primaryShade : defaultShades[theme].primary;
  const resolvedShadesObject = {
    primary: resolvedPrimaryShade,
    secondary: includesShade(secondary) ? secondaryShade : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.secondary),
    tertiary: includesShade(tertiary) ? tertiaryShade : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.tertiary),
    custom: includesShade(custom) ? customShade : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.custom),
    light: includesShade(light) ? lightShade : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.light),
    dark: includesShade(dark) ? darkShade : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.dark)
  };
  const resolvedThemeObject = {
    primary: twColorHelper({
      colorString: primaryColor,
      shade: includesShade(primary) ? primaryShade : defaultShades[theme].primary,
      tailwindConfig
    }),
    secondary: twColorHelper({
      colorString: secondaryColor || primaryColor,
      shade: resolvedShadesObject.secondary,
      tailwindConfig
    }),
    tertiary: twColorHelper({
      colorString: tertiaryColor || primaryColor,
      shade: resolvedShadesObject.tertiary,
      tailwindConfig
    }),
    custom: twColorHelper({
      colorString: customColor || primaryColor,
      shade: resolvedShadesObject.custom,
      tailwindConfig
    }),
    light: twColorHelper({
      colorString: lightColor,
      shade: resolvedShadesObject.light,
      tailwindConfig
    }),
    dark: twColorHelper({
      colorString: darkColor,
      shade: resolvedShadesObject.dark,
      tailwindConfig
    }),
    blackHex,
    whiteHex
  };
  const themeResponse = {
    primary: primaryHex || resolvedThemeObject.primary.hex,
    secondary: secondaryHex || resolvedThemeObject.secondary.hex,
    tertiary: tertiaryHex || resolvedThemeObject.tertiary.hex,
    custom: customHex || resolvedThemeObject.custom.hex,
    light: lightHex || resolvedThemeObject.light.hex,
    dark: darkHex || resolvedThemeObject.dark.hex,
    black: resolvedThemeObject.blackHex,
    white: resolvedThemeObject.whiteHex
  };
  return themeResponse;
};
const getConstructedShades = ({
  defaultColor,
  middleHex,
  providedShades,
  steps = 50,
  variant,
  includeBlackAndWhite = true,
  includeNearAbsolutes = true,
  altBlack = "#000000",
  altWhite = "#FFFFFF",
  hexPosition,
  tailwindConfig
}) => {
  var _a, _b;
  const finalShades = {};
  let shadeHex;
  const blackHex = twColorHelper({
    colorString: altBlack,
    tailwindConfig
  }).hex;
  const whiteHex = twColorHelper({
    colorString: altWhite,
    tailwindConfig
  }).hex;
  if (!middleHex) {
    let fallbackPosition = (_a = Object.keys(providedShades || {})) === null || _a === void 0 ? void 0 : _a[0];
    const fallBackProvidedColor = (_b = Object.values(providedShades || {})) === null || _b === void 0 ? void 0 : _b[0];
    const fallBack = fallBackProvidedColor || defaultColor || makUiDefaultColors[variant];
    const resolvedFallBackObject = twColorHelper({
      colorString: fallBack,
      tailwindConfig
    });
    const resolvedTailwindColors = constructTailwindObject({
      hex: resolvedFallBackObject.hex,
      step: steps,
      includeBlackAndWhite,
      includeNearAbsolutes,
      blackHex,
      whiteHex,
      hexPosition: Number(fallbackPosition),
      tailwindConfig
    });
    for (const [shade, color] of Object.entries(resolvedTailwindColors)) {
      if (providedShades && providedShades[shade]) {
        const twObj = twColorHelper({
          colorString: providedShades[shade],
          tailwindConfig
        });
        shadeHex = twObj.hex;
      } else {
        shadeHex = color;
      }
      const shadeNumber = Number(shade);
      finalShades[shadeNumber] = shadeHex;
    }
    return finalShades;
  } else {
    const tailwindColors = constructTailwindObject({
      hex: middleHex,
      step: steps,
      includeBlackAndWhite,
      includeNearAbsolutes,
      blackHex,
      whiteHex,
      hexPosition,
      tailwindConfig
    });
    for (const [shade, color] of Object.entries(tailwindColors)) {
      if (providedShades && providedShades[shade]) {
        const twObj = twColorHelper({
          colorString: providedShades[shade],
          tailwindConfig
        });
        shadeHex = twObj.hex;
      } else {
        shadeHex = color;
      }
      const shadeNumber = Number(shade);
      finalShades[shadeNumber] = shadeHex;
    }
    return finalShades;
  }
};
const getOpacity = ({
  opacityValue,
  override
}) => {
  if (override !== undefined) {
    return {
      string: `/${nearestMultiple(Number(override), 5)}`,
      value: Number(override)
    };
  }
  let opacityNum = 100;
  if (typeof opacityValue === "string") {
    opacityNum = Number(opacityValue);
  } else if (opacityValue === undefined || opacityValue === null) {
    opacityNum = 100;
  } else if (opacityValue === 0) {
    opacityNum = 0;
  } else {
    opacityNum = Number(opacityValue) || 100;
  }
  const opacityString = `/${nearestMultiple(opacityNum, 5)}`;
  return {
    string: opacityString,
    value: opacityNum
  };
};
const generateDefaultShadesDiffOject = ({
  defaultShades = makUiDefaultStateShades
}) => {
  let defaultShadesDiffObject = {};
  const baseShade = defaultShades.base;
  Object.entries(defaultShades).forEach(([state, shade]) => {
    const shadeDiff = shade - baseShade;
    defaultShadesDiffObject[state] = shadeDiff;
  });
  return defaultShadesDiffObject;
};
const generateDefaultStatesObject = ({
  defaultShades = makUiDefaultStateShades,
  defaultColor = "zinc",
  baseShade = 500,
  multiplier = 1
}) => {
  const shadesDiff = generateDefaultShadesDiffOject({
    defaultShades
  });
  const isAbsoluteColor = defaultColor === "white" || defaultColor === "black";
  let defaultStatesObject = {};
  for (const [state, diff] of Object.entries(shadesDiff)) {
    const shade = baseShade + diff * multiplier;
    if (isAbsoluteColor) {
      defaultStatesObject[state] = defaultColor;
    } else {
      defaultStatesObject[state] = `${defaultColor}-${getNormalizedShadeNumber(shade)}`;
    }
  }
  return defaultStatesObject;
};
const twColorHelper = ({
  colorString,
  opacity,
  shade,
  useDefaults = true,
  defaults = makUiDefaultColors,
  defaultKey = "primary",
  tailwindConfig
}) => {
  if (colorString === null || colorString === void 0 ? void 0 : colorString.includes("#")) {
    const hex = colorString;
    return {
      absolute: true,
      isTwColor: false,
      color: undefined,
      shade: undefined,
      autoShade: false,
      autoColor: false,
      opacity: 100,
      colorString: undefined,
      rootString: undefined,
      hex: hex
    };
  }
  let defaultValue;
  if (makUiVariants.includes(defaultKey)) {
    defaultValue = defaults[defaultKey];
  } else {
    defaultValue = defaults[defaultKey];
  }
  let autoShade = true;
  if (typeof shade === "string" || typeof shade === "number") {
    autoShade = false;
  }
  let autoColor = !!colorString;
  if (!colorString && !useDefaults) {
    return {
      absolute: false,
      isTwColor: false,
      color: undefined,
      shade: undefined,
      autoShade: false,
      autoColor,
      opacity: 0,
      colorString: "",
      rootString: "",
      hex: "#000"
    };
  }
  const absoluteRegex = /^((white|black)\/\[*0*(?:[0-9][0-9]?|100)%*\]*|(white|black))$/;
  const isAbsoluteColor = !colorString ? false : absoluteRegex.test(colorString) || colorString === "white" || colorString === "black";
  if (isAbsoluteColor && !!colorString) {
    const [absoluteColor, absoluteOpacity] = colorString.split("/");
    const {
      string,
      value
    } = getOpacity({
      opacityValue: absoluteOpacity,
      override: opacity
    });
    return {
      absolute: true,
      isTwColor: true,
      color: absoluteColor,
      shade: undefined,
      autoShade: false,
      autoColor,
      opacity: value,
      colorString: `${absoluteColor}${string}`,
      rootString: `${absoluteColor}`,
      hex: colorString === "white" ? "#FFFFFF" : "#000000"
    };
  } else {
    if (isObject(colorString) && Object.values(colorString)[0]) {
      colorString = Object.values(colorString)[0];
      autoColor = false;
    } else if (!colorString) {
      colorString = defaultValue;
      autoColor = true;
      autoShade = false;
    }
    const colorArr = colorString.split("-");
    autoShade = !parseInt(colorArr[colorArr.length - 1]);
    const lastElement = colorArr[colorArr.length - 1];
    let shadeAndOpacity;
    let color;
    let variableShade;
    let variableOpacity;
    if (lastElement.includes("/")) {
      shadeAndOpacity = colorArr.pop();
      const shadeAndOpacityArr = shadeAndOpacity === null || shadeAndOpacity === void 0 ? void 0 : shadeAndOpacity.split("/");
      color = colorArr.join("-");
      variableShade = shade || (shadeAndOpacityArr === null || shadeAndOpacityArr === void 0 ? void 0 : shadeAndOpacityArr[0]);
      variableOpacity = shadeAndOpacityArr === null || shadeAndOpacityArr === void 0 ? void 0 : shadeAndOpacityArr[1].replace(/\D/g, "");
    } else {
      const includesShade = Number(lastElement) > 0;
      const computedShade = includesShade ? colorArr.pop() : 500;
      variableShade = shade || computedShade;
      if (variableShade && Number(variableShade) < 50) variableShade = getNormalizedShadeNumber(Number(variableShade));
      variableOpacity = 100;
      color = colorArr.join("-");
    }
    variableShade = Number(variableShade);
    const opacityObj = getOpacity({
      opacityValue: variableOpacity,
      override: opacity
    });
    if (variableShade > 50 && variableShade < 950) {
      variableShade = nearestMultiple(variableShade, 100);
    }
    const hex = getTwHex({
      color,
      shade: variableShade,
      absolute: false,
      tailwindConfig
    });
    const isTwColor = !!color && !!variableShade;
    return {
      absolute: false,
      isTwColor,
      opacity: opacityObj.value,
      shade: Number(variableShade),
      autoShade,
      autoColor,
      color: color || makUiDefaultColors.primary,
      colorString: `${color}-${variableShade}${opacityObj.string}`,
      rootString: `${color}-${variableShade}`,
      hex
    };
  }
};
const concatNestedKeys = (obj, prefix = "") => {
  let result = {};
  Object.keys(obj).forEach(key => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, concatNestedKeys(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  });
  return result;
};
const getTwHex = ({
  colorString,
  color,
  shade,
  absolute,
  tailwindConfig
}) => {
  const black = colors__default["default"]["black"];
  const white = colors__default["default"]["white"];
  const handleAbsolute = absoluteColor => {
    return absoluteColor === "white" ? white : black;
  };
  const getParsedShade = shade => {
    if (!shade) return 500;
    if (shade <= 50) return 50;
    if (shade >= 950) return 950;
    const nearestMultipleOfShade = nearestMultiple(shade, 100);
    return nearestMultipleOfShade;
  };
  const getDefaultColorGroup = color => {
    const defaultColorGroup = colors__default["default"][color];
    return defaultColorGroup;
  };
  const getHex = (defaultColorGroup, parsedShade, rootColor, rootShade) => {
    var _a, _b, _c, _d, _e;
    if (defaultColorGroup && typeof defaultColorGroup === "object") {
      const defaultHex = defaultColorGroup[parsedShade];
      if (defaultHex) return defaultHex;
      return black;
    } else {
      let twConfig = tailwindConfig;
      const tailwindCustomColors = ((_b = (_a = twConfig === null || twConfig === void 0 ? void 0 : twConfig.theme) === null || _a === void 0 ? void 0 : _a.extend) === null || _b === void 0 ? void 0 : _b.colors) || {};
      const [colorGroup, colorSubGroup] = rootColor.split("-");
      const customColorHex = ((_c = tailwindCustomColors === null || tailwindCustomColors === void 0 ? void 0 : tailwindCustomColors[rootColor]) === null || _c === void 0 ? void 0 : _c[rootShade]) || ((_e = (_d = tailwindCustomColors === null || tailwindCustomColors === void 0 ? void 0 : tailwindCustomColors[colorGroup]) === null || _d === void 0 ? void 0 : _d[colorSubGroup]) === null || _e === void 0 ? void 0 : _e[rootShade]) || black;
      return customColorHex;
    }
  };
  if (!colorString && !color) return black;
  if (absolute || colorString === "white" || colorString === "black" && typeof colorString === "string") {
    return handleAbsolute(colorString);
  }
  if (shade && typeof shade === "string") shade = Number(shade);
  if (!colorString && color && shade) {
    const parsedShade = getParsedShade(shade);
    const defaultColorGroup = getDefaultColorGroup(color);
    const hex = getHex(defaultColorGroup, parsedShade, color, shade);
    return hex;
  }
  if (colorString) {
    const {
      color,
      shade,
      absolute
    } = twColorHelper({
      colorString,
      tailwindConfig
    });
    if (absolute && typeof color === "string") return handleAbsolute(color);
    if (!color || !shade) return black;
    const parsedShade = getParsedShade(shade);
    const defaultColorGroup = getDefaultColorGroup(color);
    const hex = getHex(defaultColorGroup, parsedShade, color, shade);
    return hex;
  }
  return black;
};
const detectSystemTheme = () => {
  if (typeof window === "undefined") return;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const detectedTheme = systemTheme.matches ? "dark" : "light";
  return detectedTheme;
};
const separateObjectByKey = ({
  obj,
  keys,
  fallbackKey = "default"
}) => {
  const responseObj = {};
  const defaultObj = Object.assign({}, obj);
  Object.entries(obj).forEach(([k, v]) => {
    for (const key of keys) {
      if (k.includes(key)) {
        if (!responseObj[key.toLowerCase()]) {
          responseObj[key.toLowerCase()] = {};
        }
        responseObj[key.toLowerCase()][k] = v;
        delete defaultObj[k];
      }
    }
  });
  responseObj[fallbackKey.toLocaleLowerCase()] = defaultObj;
  return responseObj;
};
const splitKeyAtChar = (obj, char) => {
  if (!isObject(obj)) return obj;
  if (!char) return obj;
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return Object.assign(Object.assign({}, acc), {
      [key.split(char)[0]]: value
    });
  }, {});
};
const splitStringAtCapital = string => {
  return string.split(/(?=[A-Z])/);
};
const getNestedClassNameObjects = ({
  key,
  value,
  enabledThemeModes
}) => {
  const classNamesArray = [];
  let [variant, paletteVariant = "color"] = splitStringAtCapital(key);
  paletteVariant = paletteVariant.toLowerCase();
  let shades = Object.entries(value);
  shades.forEach(([shade, classNames]) => {
    const shadeNumber = Number(shade);
    classNames.split(" ").forEach(className => {
      const splitClassName = className.split(":");
      let altThemes = [];
      className = splitClassName[splitClassName.length - 1];
      if (makUiThemesSet.has(splitClassName[0])) {
        altThemes.push(splitClassName[0]);
      } else {
        altThemes.push(...enabledThemeModes);
      }
      for (const t of altThemes) {
        classNamesArray.push({
          variant,
          theme: t,
          shade: shadeNumber,
          paletteVariant,
          className
        });
      }
    });
  });
  return classNamesArray;
};
const getClassNameAsObject = ({
  key,
  value,
  enabledThemeModes
}) => {
  const variant = makUiVariants.find(v => {
    if (key.toLowerCase().includes(v)) {
      return v;
    }
  }) || "primary";
  const paletteVariant = makUiPalettes.find(v => {
    if (key.toLowerCase().includes(v)) {
      return v;
    }
  }) || "color";
  let className;
  const classNamesArray = [];
  const splitClassName = value.split(":");
  const shade = (() => {
    for (let el of splitClassName) {
      let num = Number(el);
      if (makUiShadesSet.has(num)) {
        return num;
      }
    }
    return 500;
  })();
  let altThemes = [];
  let altShades = [];
  className = splitClassName[splitClassName.length - 1];
  if (makUiThemesSet.has(splitClassName[0])) {
    altThemes.push(splitClassName[0]);
  } else {
    altThemes.push(...enabledThemeModes);
  }
  splitClassName.forEach(cn => {
    if (makUiShadesSet.has(Number(cn))) {
      altShades.push(Number(cn));
    }
  });
  for (const t of altThemes) {
    for (const s of altShades) {
      classNamesArray.push({
        variant,
        theme: t,
        shade: s,
        paletteVariant,
        className
      });
    }
    classNamesArray.push({
      variant,
      theme: t,
      shade,
      paletteVariant,
      className
    });
  }
  return classNamesArray;
};
const extractInitialPalette = ({
  palette,
  enabledThemeModes,
  tailwindConfig
}) => {
  let themePalette = {};
  for (const theme of enabledThemeModes) {
    themePalette[theme] = {};
  }
  let paletteObject = {};
  for (const [key, value] of Object.entries(palette)) {
    if (key === "theme") {
      if (typeof value === "string") {
        const classNamesArray = value.split(" ");
        let themeObject = {};
        for (const theme of enabledThemeModes) {
          themeObject[theme] = undefined;
        }
        classNamesArray.forEach(className => {
          if (className.includes("dark:")) {
            themeObject.dark = className.split(":")[1];
          } else if (className.includes("custom:")) {
            themeObject.custom = className.split(":")[1];
          } else if (className.includes("light:")) {
            themeObject.light = className.split(":")[1];
          } else {
            for (const theme of enabledThemeModes) {
              themeObject[theme] = className;
            }
          }
        });
        for (const [theme, classNames] of Object.entries(themeObject)) {
          ensureNestedObject({
            parent: paletteObject,
            keys: [theme, "theme", "primary"],
            value: classNames
          });
        }
        continue;
      }
      const themes = Object.entries(value);
      themes.forEach(([variant, classNames]) => {
        if (typeof classNames === "string") {
          const splitClassNames = classNames.split(" ");
          splitClassNames.forEach(className => {
            const splitClassName = className.split(":");
            const color = splitClassName[splitClassName.length - 1];
            const hex = twColorHelper({
              colorString: color,
              tailwindConfig
            }).hex;
            const altThemes = [];
            makUiThemesSet.has(splitClassName[0]) ? altThemes.push(splitClassName[0]) : altThemes.push(...enabledThemeModes);
            for (const t of altThemes) {
              ensureNestedObject({
                parent: themePalette,
                keys: [t, variant],
                value: hex
              });
            }
          });
        }
      });
      continue;
    }
    if (isObject(value)) {
      const classNamesArray = getNestedClassNameObjects({
        key,
        value,
        enabledThemeModes
      });
      for (const obj of classNamesArray) {
        const {
          variant,
          theme,
          paletteVariant,
          shade,
          className
        } = obj;
        const nestedObj = {};
        ensureNestedObject({
          parent: nestedObj,
          keys: [theme, paletteVariant, variant, shade === null || shade === void 0 ? void 0 : shade.toString()],
          value: className
        });
        paletteObject = deepMerge(nestedObj, paletteObject);
      }
    } else {
      for (const classNameString of value.split(" ")) {
        const classNamesArray = getClassNameAsObject({
          key,
          value: classNameString,
          enabledThemeModes
        });
        for (const obj of classNamesArray) {
          const {
            variant,
            theme,
            paletteVariant,
            shade,
            className
          } = obj;
          const shadeNumber = Number(shade);
          const nestedObj = {};
          ensureNestedObject({
            parent: nestedObj,
            keys: [theme, paletteVariant, variant, shadeNumber.toString()],
            value: className
          });
          paletteObject = deepMerge(nestedObj, paletteObject);
        }
      }
    }
  }
  if (!isEmptyObject(themePalette.light)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["light", "theme"],
      value: themePalette.light
    });
  }
  if (!isEmptyObject(themePalette.dark)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["dark", "theme"],
      value: themePalette.dark
    });
  }
  if (!isEmptyObject(themePalette.custom)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["custom", "theme"],
      value: themePalette.custom
    });
  }
  return paletteObject;
};
const objectToClassName = _a => {
  var args = __rest(_a, []);
  return parseProps(Object.assign({}, args));
  function parseProps({
    object,
    variant,
    allowedStates,
    allowedModifiers
  }) {
    if (!isObject(object)) return "";
    let parsedStringArray = [];
    if (!allowedStates || !allowedStates.has("not-base")) {
      allowedStates = new Set([...(allowedStates || []), "base"]);
    }
    let allowedObject = {};
    if (allowedStates === null || allowedStates === void 0 ? void 0 : allowedStates.size) {
      [...allowedStates].forEach(state => {
        allowedObject[state] = object[state];
      });
    }
    Object.entries(allowedObject).forEach(([key, value]) => {
      if (key === "not-base") return;
      if (key === "base") {
        parsedStringArray.push(`${variant}-${value}`);
        return;
      } else {
        parsedStringArray.push(`${key}:${variant}-${value}`);
        if (allowedModifiers === null || allowedModifiers === void 0 ? void 0 : allowedModifiers.size) {
          [...allowedModifiers].forEach(modifier => {
            parsedStringArray.push(`${modifier}-${key}:${variant}-${value}`);
          });
        }
      }
    });
    return parsedStringArray.join(" ");
  }
};
const parseClassNameToStyleObject = ({
  className = "",
  makClassName = undefined,
  activeTheme,
  currentThemeMode
}) => {
  const makRegex = /mak\((.*?)\)/g;
  const whiteSpaceRegex = /[ \t\r\n]+/;
  const makClassNamesArray = [];
  const twClassNamesArray = [];
  if (makClassName) {
    makClassNamesArray.push(...makClassName.split(" "));
  }
  if (className && className.includes("mak(")) {
    className = className.replace(/mak\(\)/g, "");
    let match;
    while ((match = makRegex.exec(className)) !== null) {
      makClassNamesArray.push(...match[1].split(" "));
    }
    const outside = className.replace(makRegex, "").replace(whiteSpaceRegex, " ").trim().split(" ");
    if (outside.length) {
      twClassNamesArray.push(...outside);
    }
  } else if (className && !className.includes("mak(")) {
    twClassNamesArray.push(...className.split(" "));
  }
  makClassName = makClassNamesArray.join(" ");
  let twClassName = twClassNamesArray.length ? twClassNamesArray.join(" ") : undefined;
  const {
    baseClassObject,
    pseudoClassObject,
    unresolved
  } = parseMakClassNames({
    makClassName,
    activeTheme,
    currentThemeMode
  });
  const styleObject = {
    baseClassObject,
    pseudoClassObject
  };
  return {
    styleObject,
    twClassName,
    makClassName
  };
};
const separateTwModifiers = className => {
  if (!className || typeof className !== "string") return {
    className,
    modifiersArray: [],
    modifiers: "",
    media: undefined
  };
  // Regex to capture the last segment after the last colon and the rest before it
  const regex = /^(.*?):([^:]+)$/;
  const match = className.match(regex);
  let media = undefined;
  if (match) {
    const modifiers = match[1];
    const finalClassName = match[2];
    // Splitting modifiers on colon, but keeping group-* and peer-* together with their /<identifier>
    const modifiersSet = new Set(modifiers.split(/(?<!\/\w+):/));
    for (const mediaQuery of Object.keys(mediaQueries)) {
      if (modifiersSet.has(mediaQuery)) {
        media = mediaQuery;
      }
    }
    const modifiersArray = [...modifiersSet.values()];
    return {
      modifiers,
      modifiersArray,
      media,
      className: finalClassName
    };
  } else {
    return {
      modifiers: "",
      modifiersArray: [],
      media,
      className
    };
  }
};
const parseMakClassNames = ({
  makClassName,
  activeTheme,
  currentThemeMode
}) => {
  var _a, _b, _c, _d;
  makClassName = makClassName === null || makClassName === void 0 ? void 0 : makClassName.replace(/\s+/g, " ").trim();
  if (!makClassName || makClassName === "") return {};
  const makClassNamesArray = (makClassName === null || makClassName === void 0 ? void 0 : makClassName.split(" ")) || [];
  const styleMap = new Map();
  const modifierSet = new Set();
  const unresolvedClasses = [];
  if (makClassNamesArray.length > 0) {
    for (const makClassName of makClassNamesArray) {
      const {
        className,
        modifiers,
        modifiersArray,
        media
      } = separateTwModifiers(makClassName);
      const classNameObj = {};
      let key = "backgroundColor";
      let paletteVariant = undefined;
      let variant = "primary";
      let shade = undefined;
      let mcn;
      let opacity = undefined;
      let color;
      let altPaletteVariant = undefined;
      const keyMap = {
        bg: "backgroundColor",
        text: "color",
        border: "borderColor",
        theme: "backgroundColor",
        color: "backgroundColor",
        outline: "outlineColor",
        ring: "outlineColor",
        "ring-offset": "boxShadow",
        divide: "borderColor"
      };
      mcn = className;
      opacity = mcn === null || mcn === void 0 ? void 0 : mcn.split("/")[1];
      mcn = mcn === null || mcn === void 0 ? void 0 : mcn.split("/")[0];
      variant = ((_a = mcn === null || mcn === void 0 ? void 0 : mcn.split(`${paletteVariant}-`)) === null || _a === void 0 ? void 0 : _a[1]) || "primary";
      paletteVariant = (mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[0]) || "bg";
      variant = (mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[1]) || "primary";
      if (variant.includes("|")) {
        const splitVariant = variant.split("|");
        variant = splitVariant[1];
        altPaletteVariant = splitVariant[0];
      }
      let shadeString = mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[2];
      if (!shadeString) {
        if (variant === "light") {
          shadeString = "100";
        } else if (variant === "dark") {
          shadeString = "900";
        } else {
          shadeString = "500";
        }
      }
      shade = Number(shadeString);
      let resolvedVariant = altPaletteVariant || paletteVariant;
      if (resolvedVariant !== "theme") {
        color = (_c = (_b = activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme[resolvedVariant]) === null || _b === void 0 ? void 0 : _b[variant]) === null || _c === void 0 ? void 0 : _c[shade];
        if (!color) {
          let twKey = mcn;
          twKey = twKey.split("-").slice(1).join("-");
          if (twKey.charAt(0) === "#") {
            color = twKey;
          } else {
            const twColor = twColors[twKey];
            color = twColor;
          }
        }
      } else {
        color = (_d = activeTheme.theme) === null || _d === void 0 ? void 0 : _d[variant];
      }
      if (opacity && color) {
        color = chroma__default["default"](color).alpha(Number(opacity) / 100).css();
      }
      if (modifiersArray.length) {
        let modifierCSSKeysArray = [];
        const utilityKey = keyMap[paletteVariant];
        const rootCSS = {
          [utilityKey]: color
        };
        modifiersArray.forEach(modifier => {
          let modifierKey = tailwindToCssModifierObject === null || tailwindToCssModifierObject === void 0 ? void 0 : tailwindToCssModifierObject[modifier];
          if (typeof modifierKey === "string") {
            modifierCSSKeysArray.push(modifierKey);
          }
          if (typeof modifierKey === "function") {
            let modifierAndClassNameString = `.${modifiersArray.join(":")}:${className}`;
            const escapedClassName = modifierAndClassNameString.replace(/([:\|\[\]{}()+>~!@#$%^&*=/"'`;,\\])/g, "\\$&");
            const selector = `${escapedClassName}`;
            const resolvedModifierFn = modifierKey(selector, "");
            modifierCSSKeysArray.push(resolvedModifierFn);
          }
        });
        ensureNestedObject({
          parent: classNameObj,
          keys: modifierCSSKeysArray,
          value: rootCSS
        });
        modifierSet.add(classNameObj);
      } else if (paletteVariant && color) {
        key = keyMap[paletteVariant];
        styleMap.set(key, color);
      } else {
        unresolvedClasses.push(makClassName);
      }
    }
  }
  const modifierArray = Array.from(modifierSet);
  const mergedModifiers = deepMerge(...modifierArray);
  const pseudoClassObject = mergedModifiers;
  const baseClassObject = Object.fromEntries(styleMap);
  const unresolved = unresolvedClasses.length ? unresolvedClasses.join(" ") : undefined;
  return {
    pseudoClassObject,
    baseClassObject,
    unresolved
  };
};
const ensureUtilityClass = (utility, className) => {
  if (!utility) {
    className = utility;
    utility = "bg-";
  }
  if (!utility.includes("-")) utility = `${utility}-`;
  if (!className.includes(utility)) {
    return `${utility}${className}`;
  } else {
    className = className.split(utility)[1] || className.split(utility)[0];
    className = `${utility}${className}`;
  }
  return className;
};
const mergeClassNames = (...props) => {
  return props.join(" ");
};
const mergeDefaultConfig = ({
  makUi,
  useConfig,
  component,
  className,
  makClassName
}) => {
  var _a;
  className = className ? className.trim().replace(/^undefined /g, "") : undefined;
  makClassName = makClassName ? makClassName.trim().replace(/^undefined /g, "") : undefined;
  if (!component) return {
    componentConfig: undefined,
    componentClassName: className,
    componentMakClassName: makClassName,
    defaultClassName: undefined,
    defaultMakClassName: undefined,
    resolvedClassName: className,
    resolvedMakClassName: makClassName
  };
  const componentConfig = (_a = makUi.componentConfig) === null || _a === void 0 ? void 0 : _a[component];
  const defaultClassName = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.className;
  const defaultMakClassName = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.makClassName;
  const componentClassName = className;
  const componentMakClassName = makClassName;
  let resolvedClassName;
  let resolvedMakClassName;
  if (useConfig) {
    resolvedClassName = [defaultClassName || "", componentClassName || ""].join(" ").trim();
    resolvedMakClassName = [defaultMakClassName, componentMakClassName].join(" ").trim();
  } else {
    resolvedClassName = componentClassName;
    resolvedMakClassName = componentMakClassName;
  }
  return {
    componentConfig,
    defaultClassName,
    defaultMakClassName,
    componentClassName,
    componentMakClassName,
    resolvedClassName,
    resolvedMakClassName
  };
};
const formatJsonToHtmlString = jsonObject => {
  return Object.entries(jsonObject).map(([key, value]) => {
    if (typeof value === "object") {
      return `${key}: {${formatJsonToHtmlString(value)}}`;
    } else {
      return `${key}: ${value}`;
    }
  }).join("; ");
};

const typeProps = {
  //theme
  useConfig: true,
  darkMode: false,
  lightMode: false,
  customMode: false,
  themeMode: "light",
  //themeVariant
  themeWhite: false,
  themeBlack: false,
  themeLight: false,
  themeDark: false,
  themePrimary: false,
  themeSecondary: false,
  themeTertiary: false,
  themeCustom: false,
  themeVariant: undefined,
  themeOpacity: 100,
  primary: false,
  secondary: false,
  tertiary: false,
  success: false,
  error: false,
  warning: false,
  danger: false,
  info: false,
  custom: false,
  dark: false,
  light: false,
  variant: undefined,
  variantShade: 500,
  variantOpacity: 100,
  textPrimary: false,
  textSecondary: false,
  textTertiary: false,
  textSuccess: false,
  textError: false,
  textWarning: false,
  textDanger: false,
  textInfo: false,
  textCustom: false,
  textLight: false,
  textDark: false,
  text: undefined,
  textShade: 500,
  textOpacity: 100,
  bgPrimary: false,
  bgSecondary: false,
  bgTertiary: false,
  bgSuccess: false,
  bgError: false,
  bgWarning: false,
  bgDanger: false,
  bgInfo: false,
  bgCustom: false,
  bgLight: false,
  bgDark: false,
  bg: undefined,
  bgShade: undefined,
  bgOpacity: undefined,
  borderPrimary: false,
  borderSecondary: false,
  borderTertiary: false,
  borderSuccess: false,
  borderError: false,
  borderWarning: false,
  borderDanger: false,
  borderInfo: false,
  borderCustom: false,
  borderLight: false,
  borderDark: false,
  border: undefined,
  borderShade: 500,
  borderOpacity: 100,
  textSize: undefined,
  borderPx: undefined,
  className: undefined,
  makClassName: undefined,
  height: undefined,
  width: undefined
};
const getThemeModeValue = props => {
  if (props.themeMode) return props.themeMode;
  if (props.lightMode) return "light";
  if (props.darkMode) return "dark";
  if (props.customMode) return "custom";
  return undefined;
};
const propValue = (props, variant) => {
  if (!props) return undefined;
  if (props === true) return variant;
  if (props === false) return undefined;
  if (typeof props !== "boolean") return `${variant}-${props}`;
};
const getThemeVariantValue = props => {
  if (props.themeVariant) return props.themeVariant;
  if (props.themePrimary) return propValue(props.themePrimary, "primary");
  if (props.themeSecondary) return propValue(props.themeSecondary, "secondary");
  if (props.themeTertiary) return propValue(props.themeTertiary, "tertiary");
  if (props.themeCustom) return propValue(props.themeCustom, "custom");
  if (props.themeLight) return propValue(props.themeLight, "light");
  if (props.themeDark) return propValue(props.themeDark, "dark");
  if (props.themeWhite) return propValue(props.themeWhite, "white");
  if (props.themeBlack) return propValue(props.themeBlack, "black");
  return undefined;
};
const getColorValue = props => {
  if (props.variant) return props.variant;
  if (props.primary) return propValue(props.primary, "primary");
  if (props.secondary) return propValue(props.secondary, "secondary");
  if (props.tertiary) return propValue(props.tertiary, "tertiary");
  if (props.success) return propValue(props.success, "success");
  if (props.error) return propValue(props.error, "error");
  if (props.warning) return propValue(props.warning, "warning");
  if (props.danger) return propValue(props.danger, "danger");
  if (props.info) return propValue(props.info, "info");
  if (props.custom) return propValue(props.custom, "custom");
  if (props.light) return propValue(props.light, "light");
  if (props.dark) return propValue(props.dark, "dark");
  return undefined;
};
const getBorderValue = props => {
  if (props.border) return props.border;
  if (props.borderPrimary) return propValue(props.borderPrimary, "primary");
  if (props.borderSecondary) return propValue(props.borderSecondary, "secondary");
  if (props.borderTertiary) return propValue(props.borderTertiary, "tertiary");
  if (props.borderSuccess) return propValue(props.borderSuccess, "success");
  if (props.borderError) return propValue(props.borderError, "error");
  if (props.borderWarning) return propValue(props.borderWarning, "warning");
  if (props.borderDanger) return propValue(props.borderDanger, "danger");
  if (props.borderInfo) return propValue(props.borderInfo, "info");
  if (props.borderCustom) return propValue(props.borderCustom, "custom");
  if (props.borderLight) return propValue(props.borderLight, "light");
  if (props.borderDark) return propValue(props.borderDark, "dark");
  return undefined;
};
const getTextValue = props => {
  if (props.text) return props.text;
  if (props.textPrimary) return propValue(props.textPrimary, "primary");
  if (props.textSecondary) return propValue(props.textSecondary, "secondary");
  if (props.textTertiary) return propValue(props.textTertiary, "tertiary");
  if (props.textSuccess) return propValue(props.textSuccess, "success");
  if (props.textError) return propValue(props.textError, "error");
  if (props.textWarning) return propValue(props.textWarning, "warning");
  if (props.textDanger) return propValue(props.textDanger, "danger");
  if (props.textInfo) return propValue(props.textInfo, "info");
  if (props.textCustom) return propValue(props.textCustom, "custom");
  if (props.textLight) return propValue(props.textLight, "light");
  if (props.textDark) return propValue(props.textDark, "dark");
  return undefined;
};
const getBgValue = props => {
  if (props.bg) return props.bg;
  if (props.bgPrimary) return propValue(props.bgPrimary, "primary");
  if (props.bgSecondary) return propValue(props.bgSecondary, "secondary");
  if (props.bgTertiary) return propValue(props.bgTertiary, "tertiary");
  if (props.bgSuccess) return propValue(props.bgSuccess, "success");
  if (props.bgError) return propValue(props.bgError, "error");
  if (props.bgWarning) return propValue(props.bgWarning, "warning");
  if (props.bgDanger) return propValue(props.bgDanger, "danger");
  if (props.bgInfo) return propValue(props.bgInfo, "info");
  if (props.bgCustom) return propValue(props.bgCustom, "custom");
  if (props.bgLight) return propValue(props.bgLight, "light");
  if (props.bgDark) return propValue(props.bgDark, "dark");
  return undefined;
};
const withComputedProps = props => {
  const computedModeProps = getThemeModeValue(props);
  const computedThemeProps = getThemeVariantValue(props);
  const computedColorProps = getColorValue(props);
  const computedBorderProps = getBorderValue(props);
  const computedTextProps = getTextValue(props);
  const hasBgProps = getBgValue(props);
  return Object.assign(Object.assign({}, props), {
    useConfig: props.useConfig === undefined ? typeProps.useConfig : props.useConfig,
    mode: computedModeProps,
    hasModeProps: !!computedModeProps,
    theme: computedThemeProps,
    hasThemeProps: !!computedThemeProps,
    color: computedColorProps,
    hasColorProps: !!computedColorProps,
    border: computedBorderProps,
    hasBorderProps: !!computedBorderProps,
    text: computedTextProps,
    hasTextProps: !!computedTextProps,
    bg: hasBgProps,
    hasBgProps: !!hasBgProps,
    themeOpacity: allowFalsyFallback(props.themeOpacity, typeProps.themeOpacity),
    textOpacity: allowFalsyFallback(props.textOpacity, typeProps.textOpacity),
    bgOpacity: allowFalsyFallback(props.bgOpacity, typeProps.bgOpacity),
    variantOpacity: allowFalsyFallback(props.variantOpacity, typeProps.variantOpacity),
    borderOpacity: allowFalsyFallback(props.borderOpacity, typeProps.borderOpacity),
    textShade: allowFalsyFallback(props.textShade, typeProps.textShade),
    bgShade: allowFalsyFallback(props.bgShade, typeProps.bgShade),
    variantShade: allowFalsyFallback(props.variantShade, typeProps.variantShade),
    borderShade: allowFalsyFallback(props.borderShade, typeProps.borderShade),
    borderPx: allowFalsyFallback(props.borderPx, typeProps.borderPx),
    className: props.className,
    makClassName: props.makClassName,
    height: props.height,
    width: props.width
  });
};

const paletteFactory = ({
  paletteInput,
  enabledThemeModes,
  defaultShades,
  shadeStep,
  includeBlackAndWhite,
  includeNearAbsolutes,
  altBlack,
  altWhite,
  tailwindConfig
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const initialVerbosePalette = extractInitialPalette({
    palette: paletteInput,
    enabledThemeModes,
    tailwindConfig
  });
  let finalVerbosePalette = {};
  let finalSimplePalette = {};
  for (const theme of enabledThemeModes) {
    for (const paletteVariant of makUiPalettes) {
      if (paletteVariant === "theme") {
        if ((_a = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _a === void 0 ? void 0 : _a["theme"]) {
          const providedVariants = initialVerbosePalette[theme].theme;
          const constructedTheme = getConstructedTheme({
            providedVariants,
            theme,
            defaultShades: defaultShades,
            altBlack,
            altWhite,
            tailwindConfig
          });
          ensureNestedObject({
            parent: finalVerbosePalette,
            keys: [theme, paletteVariant],
            value: constructedTheme
          });
          ensureNestedObject({
            parent: finalSimplePalette,
            keys: [theme, paletteVariant],
            value: constructedTheme
          });
        } else {
          const defaultVariant = makUiDefaultPalette[theme].theme;
          const constructedTheme = getConstructedTheme({
            providedVariants: defaultVariant,
            theme,
            defaultShades: defaultShades,
            altBlack,
            altWhite,
            tailwindConfig
          });
          ensureNestedObject({
            parent: finalVerbosePalette,
            keys: [theme, paletteVariant],
            value: constructedTheme
          });
          ensureNestedObject({
            parent: finalSimplePalette,
            keys: [theme, paletteVariant],
            value: constructedTheme
          });
        }
        continue;
      }
      for (const variant of makUiVariants) {
        if ((_c = (_b = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _b === void 0 ? void 0 : _b[paletteVariant]) === null || _c === void 0 ? void 0 : _c[variant]) {
          const providedShades = initialVerbosePalette[theme][paletteVariant][variant];
          const constructedShades = getConstructedShades({
            defaultColor: makUiDefaultColors[variant],
            middleHex: providedShades === null || providedShades === void 0 ? void 0 : providedShades["500"],
            providedShades,
            variant: variant,
            steps: shadeStep,
            includeBlackAndWhite,
            includeNearAbsolutes,
            altBlack,
            altWhite,
            tailwindConfig
          });
          ensureNestedObject({
            parent: finalVerbosePalette,
            keys: [theme, paletteVariant, variant],
            value: constructedShades
          });
          ensureNestedObject({
            parent: finalSimplePalette,
            keys: [theme, paletteVariant, variant],
            value: {
              "0": constructedShades["0"],
              "50": constructedShades["50"],
              "100": constructedShades["100"],
              "200": constructedShades["200"],
              "300": constructedShades["300"],
              "400": constructedShades["400"],
              "500": constructedShades["500"],
              "600": constructedShades["600"],
              "700": constructedShades["700"],
              "800": constructedShades["800"],
              "900": constructedShades["900"],
              "950": constructedShades["950"],
              "1000": constructedShades["1000"]
            }
          });
          if (paletteVariant === "color" && !((_e = (_d = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _d === void 0 ? void 0 : _d.border) === null || _e === void 0 ? void 0 : _e[variant])) {
            ensureNestedObject({
              parent: finalVerbosePalette,
              keys: [theme, "border", variant],
              value: constructedShades
            });
            ensureNestedObject({
              parent: finalSimplePalette,
              keys: [theme, "border", variant],
              value: {
                "0": constructedShades["0"],
                "50": constructedShades["50"],
                "100": constructedShades["100"],
                "200": constructedShades["200"],
                "300": constructedShades["300"],
                "400": constructedShades["400"],
                "500": constructedShades["500"],
                "600": constructedShades["600"],
                "700": constructedShades["700"],
                "800": constructedShades["800"],
                "900": constructedShades["900"],
                "950": constructedShades["950"],
                "1000": constructedShades["1000"]
              }
            });
          }
        } else if (!((_g = (_f = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _f === void 0 ? void 0 : _f[paletteVariant]) === null || _g === void 0 ? void 0 : _g[variant]) && !((_j = (_h = finalVerbosePalette === null || finalVerbosePalette === void 0 ? void 0 : finalVerbosePalette[theme]) === null || _h === void 0 ? void 0 : _h[paletteVariant]) === null || _j === void 0 ? void 0 : _j[variant])) {
          const constructedShades = getConstructedShades({
            middleHex: makUiDefaultColors === null || makUiDefaultColors === void 0 ? void 0 : makUiDefaultColors[variant],
            variant: variant,
            steps: shadeStep,
            includeBlackAndWhite,
            includeNearAbsolutes,
            altBlack,
            altWhite,
            hexPosition: variant === "dark" ? 1000 : variant === "light" ? 0 : 500,
            tailwindConfig
          });
          ensureNestedObject({
            parent: finalVerbosePalette,
            keys: [theme, paletteVariant, variant],
            value: constructedShades
          });
          ensureNestedObject({
            parent: finalSimplePalette,
            keys: [theme, paletteVariant, variant],
            value: {
              "0": constructedShades["0"],
              "50": constructedShades["50"],
              "100": constructedShades["100"],
              "200": constructedShades["200"],
              "300": constructedShades["300"],
              "400": constructedShades["400"],
              "500": constructedShades["500"],
              "600": constructedShades["600"],
              "700": constructedShades["700"],
              "800": constructedShades["800"],
              "900": constructedShades["900"],
              "950": constructedShades["950"],
              "1000": constructedShades["1000"]
            }
          });
        }
      }
    }
  }
  Object.defineProperties(finalVerbosePalette.dark, {
    bg: {
      get() {
        return finalVerbosePalette.dark.color;
      }
    }
    // ring: {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
    // outline: {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
    // "ring-offset": {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
  });
  Object.defineProperties(finalVerbosePalette.light, {
    bg: {
      get() {
        return finalVerbosePalette.light.color;
      }
    }
    // ring: {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
    // outline: {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
    // "ring-offset": {
    //   get() {
    //     return finalVerbosePalette.dark.border
    //   },
    // },
  });
  return {
    verbose: finalVerbosePalette,
    simple: finalSimplePalette
  };
};

const MakUiContext = /*#__PURE__*/React.createContext(undefined);
const MakUiProvider = props => {
  return /*#__PURE__*/React__default["default"].createElement(nextThemes.ThemeProvider, {
    storageKey: "mak-ui-theme",
    enableSystem: true,
    themes: makUiThemes
  }, /*#__PURE__*/React__default["default"].createElement(MakUiProviderChild, props, props.children));
};
const GlobalStyleSheetWrapper = styled__default["default"].div(({
  styleSheet
}) => Object.assign({}, styleSheet));
const defaultPaletteGenProps = {
  palette: {},
  themeShades: makUiDefaultThemeShades,
  enableLightMode: true,
  enableDarkMode: true,
  enableCustomMode: false,
  shadeStep: 50,
  includeBlackAndWhite: true,
  includeNearAbsolutes: true,
  altBlack: "#000000",
  altWhite: "#ffffff"
};
const MakUiProviderChild = ({
  children,
  componentConfig: componentConfigInput,
  palette: paletteInput,
  enableSystem = true,
  defaultTheme = "light",
  paletteGenProps = defaultPaletteGenProps,
  tailwindConfig = {}
}) => {
  const [styleSheet, setStyleSheet] = React.useState({});
  let {
    theme: themeMode,
    setTheme: setThemeMode
  } = nextThemes.useTheme();
  const mergedPaletteGenProps = deepMerge(defaultPaletteGenProps, paletteGenProps);
  const {
    palette: paletteGenInput,
    paletteOverride,
    themeShades,
    enableLightMode,
    enableDarkMode,
    enableCustomMode,
    shadeStep,
    includeBlackAndWhite,
    includeNearAbsolutes,
    altBlack,
    altWhite
  } = mergedPaletteGenProps;
  paletteInput = paletteOverride ? paletteOverride : !isEmptyObject(paletteGenInput) ? paletteGenInput : paletteInput ? paletteInput : {};
  const paletteInputRef = React.useRef();
  React.useEffect(() => {
    if (paletteInputRef.current !== JSON.stringify(paletteInput)) {
      paletteInputRef.current = JSON.stringify(paletteInput);
    }
    return;
  }, [JSON.stringify(paletteInput)]);
  const stringifiedPalette = JSON.stringify(paletteInput);
  const darkModeInPalette = stringifiedPalette.includes("dark:");
  const customModeInPalette = stringifiedPalette.includes("custom:");
  const lightModeInPalette = !paletteOverride && (stringifiedPalette.includes("light:") || Object.values(paletteInput || {}).some(val => !val.includes(":")));
  const enabledThemeModes = [enableLightMode || lightModeInPalette ? "light" : null, enableDarkMode || darkModeInPalette ? "dark" : null, enableCustomMode || customModeInPalette ? "custom" : null].filter(mode => mode !== null);
  React.useEffect(() => {
    const localStorageTheme = localStorage.getItem("mak-ui-theme");
    if (defaultTheme && !localStorageTheme) {
      setThemeMode(defaultTheme);
    }
  }, []);
  React.useEffect(() => {
    if (!enableSystem) return;
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = e => {
      if (e.matches) {
        setThemeMode("dark");
      } else {
        setThemeMode("light");
      }
    };
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    handleDarkModeChange({
      matches: darkModeMediaQuery.matches
    });
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);
  let currentTheme = themeMode || defaultTheme;
  const componentConfig = React.useMemo(() => {
    const configObject = {
      button: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.button) || defaultComponentConfig.button,
      input: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.input) || defaultComponentConfig.input,
      text: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.text) || defaultComponentConfig.text,
      select: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.select) || defaultComponentConfig.select,
      form: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.form) || defaultComponentConfig.form,
      dialog: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.dialog) || defaultComponentConfig.dialog,
      textarea: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.textarea) || defaultComponentConfig.textarea
    };
    return configObject;
  }, [JSON.stringify(componentConfigInput)]);
  const palettesMemo = React.useMemo(() => {
    if (paletteOverride) return {
      simplePalette: paletteOverride,
      verbosePalette: paletteOverride
    };
    const {
      verbose,
      simple
    } = paletteFactory({
      paletteInput: paletteInput,
      enabledThemeModes,
      defaultShades: themeShades,
      shadeStep: shadeStep,
      includeBlackAndWhite: includeBlackAndWhite,
      includeNearAbsolutes: includeNearAbsolutes,
      altBlack: altBlack,
      altWhite: altWhite,
      tailwindConfig
    }) || {};
    return {
      simplePalette: simple,
      verbosePalette: verbose
    };
  }, [paletteInputRef, paletteOverride]);
  const [simpleTheme, setSimpleTheme] = React.useState({});
  const [verboseTheme, setVerboseTheme] = React.useState({});
  const [theme, setTheme] = React.useState(themeMode || defaultTheme || "light");
  React.useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);
  const formattingThemes = isEmptyObject(simpleTheme) || isEmptyObject(verboseTheme) || !simpleTheme || !verboseTheme ? true : false;
  React.useEffect(() => {
    setVerboseTheme(palettesMemo.verbosePalette[currentTheme]);
    setSimpleTheme(palettesMemo.simplePalette[currentTheme]);
  }, [themeMode, currentTheme]);
  const {
    simplePalette,
    verbosePalette
  } = palettesMemo;
  const value = {
    simplePalette,
    verbosePalette,
    simpleTheme,
    verboseTheme,
    componentConfig,
    setTheme: setThemeMode,
    theme,
    formattingThemes,
    isDark: theme === "dark",
    isLight: theme === "light",
    isCustom: theme === "custom",
    enabledThemeModes,
    styleSheet,
    setStyleSheet,
    constructTailwindColorScale: constructTailwindObject
  };
  return /*#__PURE__*/React__default["default"].createElement(MakUiContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default["default"].createElement(GlobalStyleSheetWrapper, {
    styleSheet: styleSheet
  }, formattingThemes ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children)));
};
const useMakUi = () => {
  const context = React.useContext(MakUiContext);
  if (context === undefined) {
    throw new Error("useMakUi must be used within a MakUiProvider");
  }
  return context;
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const componentWrapperLogic = ({
  props,
  makUi,
  type
}) => {
  const {
    theme: makTheme,
    verbosePalette: makVerbosePalette,
    verboseTheme: makVerboseTheme
  } = makUi;
  let _a = withComputedProps(props),
    {
      mode: themeMode,
      theme: themeProps,
      color: colorProps,
      text: textProps,
      border: borderProps,
      bg: bgProps,
      hasModeProps,
      hasThemeProps,
      hasColorProps,
      hasTextProps,
      hasBorderProps,
      hasBgProps,
      className,
      makClassName,
      useConfig
    } = _a,
    restWithComputedProps = __rest(_a, ["mode", "theme", "color", "text", "border", "bg", "hasModeProps", "hasThemeProps", "hasColorProps", "hasTextProps", "hasBorderProps", "hasBgProps", "className", "makClassName", "useConfig"]);
  let {
    resolvedClassName,
    resolvedMakClassName
  } = mergeDefaultConfig({
    makUi,
    useConfig,
    component: type,
    className,
    makClassName
  });
  const activeThemeMode = themeMode ? themeMode : makTheme ? makTheme : undefined;
  const activeTheme = activeThemeMode ? makVerbosePalette[activeThemeMode] : makVerboseTheme;
  const {
    text: textPalette,
    color: colorPalette,
    border: borderPalette,
    theme: themePalette
  } = activeTheme;
  if (themeProps) {
    const themeClassName = `theme-${themeProps}`;
    resolvedMakClassName = resolvedMakClassName ? `${resolvedMakClassName} ${themeClassName}` : themeClassName;
  }
  if (colorProps) {
    const colorClassName = `bg-${colorProps}`;
    resolvedMakClassName = resolvedMakClassName ? `${resolvedMakClassName} ${colorClassName}` : colorClassName;
  }
  if (textProps) {
    const textClassName = `text-${textProps}`;
    resolvedMakClassName = resolvedMakClassName ? `${resolvedMakClassName} ${textClassName}` : textClassName;
  }
  if (borderProps) {
    const borderClassName = `border-${borderProps}`;
    resolvedMakClassName = resolvedMakClassName ? `${resolvedMakClassName} ${borderClassName}` : borderClassName;
  }
  if (bgProps) {
    const bgClassName = `bg-${bgProps}`;
    resolvedMakClassName = resolvedMakClassName ? `${resolvedMakClassName} ${bgClassName}` : bgClassName;
  }
  const {
    styleObject,
    twClassName,
    makClassName: makClassNames
  } = parseClassNameToStyleObject({
    className: resolvedClassName,
    makClassName: resolvedMakClassName,
    activeTheme,
    currentThemeMode: makUi.theme
  });
  const response = Object.assign({
    styleObject,
    componentTheme: themePalette,
    componentText: textPalette,
    componentColor: colorPalette,
    componentBorder: borderPalette,
    fullComponentTheme: activeTheme,
    componentThemeMode: activeThemeMode,
    globalThemeMode: makTheme,
    globalTheme: makVerboseTheme,
    globalPalette: makVerbosePalette,
    twClassName,
    makClassName: makClassNames,
    modeVariant: themeMode,
    hasModeProps,
    hasThemeProps,
    hasColorProps,
    hasTextProps,
    hasBorderProps,
    hasBgProps,
    themeVariant: themeProps,
    colorVariant: colorProps,
    textVariant: textProps,
    borderVariant: borderProps,
    bgVariant: bgProps,
    _className: twClassName,
    _makClassName: makClassNames,
    children: restWithComputedProps.children
  }, restWithComputedProps);
  return response;
};

const BaseStyledComponent$1 = styled__default["default"].div(({
  styleObject
}) => Object.assign({}, styleObject));
const StyledComponent = /*#__PURE__*/React.forwardRef((_a, ref) => {
  var {
      as: Component = "div",
      styleObject
    } = _a,
    props = __rest(_a, ["as", "styleObject"]);
  const formattedStyleString = formatJsonToHtmlString(styleObject);
  return /*#__PURE__*/React__default["default"].createElement(BaseStyledComponent$1, _extends({
    as: Component,
    styleObject: styleObject,
    className: props.makTwClassName,
    "data-class": props.twClassName,
    "data-mak-class": props.makClassName,
    "data-mak-style": formattedStyleString,
    ref: ref
  }, props));
});
StyledComponent.displayName = "StyledComponent";

const BaseStyledComponent = styled__default["default"].div(({
  styleObject
}) => Object.assign({}, styleObject));
const StyledMotionComponent = /*#__PURE__*/React.forwardRef((_a, ref) => {
  var {
      as: Component = "div",
      styleObject,
      motionProps
    } = _a,
    props = __rest(_a, ["as", "styleObject", "motionProps"]);
  const restProps = __rest(props, ["makClassName", "componentTheme", "componentBorder", "componentText", "componentColor", "fullComponentTheme", "componentThemeMode", "globalThemeMode", "globalTheme", "globalPalette"]);
  const MotionComponent = framerMotion.motion[Component];
  const memoizedMotionProps = React.useMemo(() => motionProps, [motionProps]);
  const formattedStyleString = formatJsonToHtmlString(styleObject);
  return /*#__PURE__*/React__default["default"].createElement(BaseStyledComponent, _extends({
    as: MotionComponent,
    styleObject: styleObject,
    className: props.makTwClassName,
    "data-class": props.twClassName,
    "data-mak-class": props.makClassName,
    "data-mak-style": formattedStyleString,
    ref: ref
  }, memoizedMotionProps, restProps));
});
StyledMotionComponent.displayName = "StyledMotionComponent";

const MakComponent = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef((_a, ref) => {
  var {
      component,
      motion,
      useConfig
    } = _a,
    props = __rest(_a, ["component", "motion", "useConfig"]);
  const makUi = useMakUi();
  const {
    setStyleSheet,
    styleSheet
  } = makUi;
  let {
    resolvedClassName,
    resolvedMakClassName,
    componentConfig
  } = mergeDefaultConfig({
    makUi,
    useConfig,
    component,
    className: props === null || props === void 0 ? void 0 : props.className,
    makClassName: props === null || props === void 0 ? void 0 : props.makClassName
  });
  const response = React.useMemo(() => {
    return componentWrapperLogic({
      props: props,
      makUi
    });
  }, [props, makUi]);
  const {
      styleObject,
      twClassName,
      makClassName
    } = response,
    responseRest = __rest(response, ["styleObject", "twClassName", "makClassName"]);
  const {
    baseClassObject = {},
    pseudoClassObject = {}
  } = styleObject;
  React.useEffect(() => {
    if (((resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("group-")) || (resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("peer-"))) && styleSheet) {
      const updatedStyleSheet = Object.assign({}, styleSheet);
      Object.entries(pseudoClassObject).forEach(([key, value]) => {
        if (!styleSheet[key]) {
          updatedStyleSheet[key] = value;
          setStyleSheet(updatedStyleSheet);
        }
      });
    }
  }, [setStyleSheet, pseudoClassObject]);
  const resolvedCombinedClassName = [resolvedClassName, resolvedMakClassName].join(" ").trim();
  const allProps = Object.assign({
    makTwClassName: resolvedCombinedClassName,
    twClassName: resolvedClassName,
    makClassName: resolvedMakClassName,
    component,
    defaultConfig: componentConfig
  }, responseRest);
  const inlineStyles = Object.assign(Object.assign({}, baseClassObject), pseudoClassObject);
  const isMotionObject = motion && !isEmptyObject(motion);
  if (isMotionObject) {
    return /*#__PURE__*/React__default["default"].createElement(StyledMotionComponent, _extends({
      ref: ref,
      styleObject: inlineStyles,
      as: component,
      motionProps: motion
    }, allProps));
  }
  return /*#__PURE__*/React__default["default"].createElement(StyledComponent, _extends({
    ref: ref,
    styleObject: inlineStyles,
    as: component
  }, allProps));
}));
MakComponent.displayName = "MakComponent";

const componentCache = {};
const handler = {
  get(_, tag) {
    if (!componentCache[tag]) {
      const ForwardedComponent = /*#__PURE__*/React.forwardRef((props, ref) => {
        const memoizedProps = React.useMemo(() => {
          return Object.assign({}, props);
        }, [props]);
        return /*#__PURE__*/React__default["default"].createElement(MakComponent, _extends({
          component: tag
        }, memoizedProps, {
          ref: ref
        }));
      });
      ForwardedComponent.displayName = `Mak${tag.charAt(0).toUpperCase() + tag.slice(1)}`;
      componentCache[tag] = ForwardedComponent;
    }
    return componentCache[tag];
  }
};
const mak = new Proxy({}, handler);

exports.MakUiProvider = MakUiProvider;
exports.allowFalsyFallback = allowFalsyFallback;
exports.componentWrapperLogic = componentWrapperLogic;
exports.concatNestedKeys = concatNestedKeys;
exports.constructTailwindObject = constructTailwindObject;
exports.deepMerge = deepMerge;
exports.detectSystemTheme = detectSystemTheme;
exports.ensureNestedObject = ensureNestedObject;
exports.ensureUtilityClass = ensureUtilityClass;
exports.extractInitialPalette = extractInitialPalette;
exports.formatJsonToHtmlString = formatJsonToHtmlString;
exports.generateDefaultShadesDiffOject = generateDefaultShadesDiffOject;
exports.generateDefaultStatesObject = generateDefaultStatesObject;
exports.getConstructedShades = getConstructedShades;
exports.getConstructedTheme = getConstructedTheme;
exports.getLocalStorage = getLocalStorage;
exports.getOpacity = getOpacity;
exports.getThemeShadesObj = getThemeShadesObj;
exports.getTwHex = getTwHex;
exports.isEmptyObject = isEmptyObject;
exports.isNestedObject = isNestedObject;
exports.isObject = isObject;
exports.mak = mak;
exports.mergeClassNames = mergeClassNames;
exports.mergeDefaultConfig = mergeDefaultConfig;
exports.mergeWithFallback = mergeWithFallback;
exports.nearestMultiple = nearestMultiple;
exports.objectToClassName = objectToClassName;
exports.parseClassNameToStyleObject = parseClassNameToStyleObject;
exports.parseMakClassNames = parseMakClassNames;
exports.removeLocalStorage = removeLocalStorage;
exports.separateObjectByKey = separateObjectByKey;
exports.setLocalStorage = setLocalStorage;
exports.splitKeyAtChar = splitKeyAtChar;
exports.splitStringAtCapital = splitStringAtCapital;
exports.twColorHelper = twColorHelper;
exports.useMakUi = useMakUi;
exports.withComputedProps = withComputedProps;
//# sourceMappingURL=index.js.map
