export const tailwindVariants = [
    "bg",
    "text",
    "border",
    "ring",
    "outline",
    "ring-offset",
    "fill",
    "stroke",
    "divide",
    "placeholder",
    "decoration",
    "accent",
    "caret",
    "shadow",
];
export const htmlElements = [
    "button",
    "input",
    "text",
    "form",
    "dialog",
    "select",
    "textarea",
];
export const tailwindVariantsSet = new Set(tailwindVariants);
export const makUiThemes = ["dark", "light", "custom"];
export const makUiThemesSet = new Set(makUiThemes);
export const makUiPalettes = [
    "color",
    "text",
    "border",
    "theme",
];
export const makUiPalettesSet = new Set(makUiPalettes);
export const makUiThemeVariants = [
    "primary",
    "secondary",
    "tertiary",
    "custom",
    "light",
    "dark",
    "white",
    "black",
];
export const makUiThemeVariantsSet = new Set(makUiThemeVariants);
export const makUiVariants = [
    "primary",
    "secondary",
    "tertiary",
    "custom",
    "success",
    "error",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];
export const makUiVariantsSet = new Set(makUiVariants);
export const makUiInteractionStates = [
    "active",
    "autofill",
    "checked",
    "closed",
    "default",
    "disabled",
    "empty",
    "enabled",
    "focus",
    "focus-visible",
    "focus-within",
    "hover",
    "in-range",
    "indeterminate",
    "invalid",
    "open",
    "out-of-range",
    "placeholder-shown",
    "read-only",
    "required",
    "selected",
    "selection",
    "target",
    "valid",
    "visited",
];
export const makUiCustomInteractionStates = [
    "base",
    "click",
];
export const makUiStates = [
    ...makUiCustomInteractionStates,
    ...makUiInteractionStates,
];
export const makUiShades = [
    0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
    800, 850, 900, 950, 1000,
];
export const makUiShadesSet = new Set(makUiShades);
export const makUiStatesSet = new Set(makUiStates);
export const makUiDefaultColors = {
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
    dark: "black",
    // white: "white",
    // black: "black",
};
export const makUiDefaultPalette = {
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
            black: "black",
        },
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
            black: "black",
        },
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
            black: "black",
        },
    },
};
export const makUiDefaultThemeShades = {
    light: {
        primary: 50,
        secondary: 100,
        tertiary: 200,
        custom: 950,
        light: 50,
        dark: 950,
        white: 0,
        black: 1000,
    },
    dark: {
        primary: 950,
        secondary: 900,
        tertiary: 800,
        custom: 700,
        light: 50,
        dark: 950,
        white: 0,
        black: 1000,
    },
    custom: {
        primary: 50,
        secondary: 100,
        tertiary: 200,
        custom: 950,
        light: 50,
        dark: 950,
        white: 0,
        black: 1000,
    },
};
export const makUiDefaultStateShades = {
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
    visited: 500,
};
export const makUiDefaultStates = {
    base: "zinc-500",
    click: "zinc-600",
    active: "zinc-600",
    autofill: "zinc-500",
    checked: "zinc-700",
    closed: "zinc-500",
    default: "zinc-500",
    disabled: "zinc-500",
    empty: "zinc-500",
    enabled: "zinc-500",
    focus: "zinc-500",
    "focus-visible": "zinc-500",
    "focus-within": "zinc-500",
    hover: "zinc-300",
    "in-range": "zinc-500",
    indeterminate: "zinc-500",
    invalid: "zinc-500",
    open: "zinc-500",
    "out-of-range": "zinc-500",
    "placeholder-shown": "zinc-500",
    "read-only": "zinc-500",
    required: "zinc-500",
    selected: "zinc-500",
    selection: "zinc-500",
    target: "zinc-500",
    valid: "zinc-500",
    visited: "zinc-500",
};
export const defaultButtonConfig = {
    className: "h-fit w-fit px-2 py-1 text-sm rounded-md font-semibold fade-in-out",
};
export const defaultInputConfig = {
    className: "h-fit w-fit px-2 py-1 text-sm rounded-md font-semibold",
};
export const defaultComponentConfig = {
    button: defaultButtonConfig,
    input: defaultInputConfig,
};
export const mediaQueries = {
    "2xs": "@media (min-width: 320px)",
    xs: "@media (min-width: 480px)",
    sm: "@media (min-width: 640px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 1024px)",
    xl: "@media (min-width: 1280px)",
    "2xl": "@media (min-width: 1536px)",
    "3xl": "@media (min-width: 1920px)",
    "4xl": "@media (min-width: 2560px)",
};
export const tailwindToCssModifierObject = Object.assign({ 
    //styles applied directly to element
    //tw eg. hover:bg-red-500
    dark: '[data-theme="dark"] &', hover: "&:hover", focus: "&:focus", "focus-within": "&:focus-within", "focus-visible": "&:focus-visible", active: "&:active", visited: "&:visited", target: "&:target", has: (selector) => `:has(:${selector})`, "has-not": (selector) => `:not(has:(:${selector}))`, is: (selector) => `:is(${selector})`, "is-not": (selector) => `:not(:is(${selector}))`, "is-has": (selector, altSelector) => `:is(${selector}):has(~ ${altSelector})`, "is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(~ ${altSelector}))`, first: "&:first-child", last: "&:last-child", only: "&:only-child", odd: "&:nth-child(odd)", even: "&:nth-child(even)", "first-of-type": "&:first-of-type", "last-of-type": "&:last-of-type", "only-of-type": "&:only-of-type", empty: "&:empty", disabled: "&:disabled", enabled: "&:enabled", checked: "&:checked", indeterminate: "&:indeterminate", default: "&:default", required: "&:required", valid: "&:valid", invalid: "&:invalid", "in-range": "&:in-range", "out-of-range": "&:out-of-range", "placeholder-shown": "&:placeholder-shown", autofill: "&:autofill", "read-only": "&:read-only", before: "&::before", after: "&::after", "first-letter": "&::first-letter", "first-line": "&::first-line", marker: "&::marker", selection: "&::selection", file: "&::file-selector-button", backdrop: "&::backdrop", placeholder: "&::placeholder", fullscreen: ":fullscreen", "last-child": ":last-child", link: ":link", "not-checked": ":not(:checked)", "only-child": ":only-child", optional: ":optional", "read-write": ":read-write", "first-child": ":first-child", 
    //applies styles to parent if child has a certain state or element
    "parent-has": (selector) => `:has(${selector})`, "parent-has-not": (selector) => `:not(:has(${selector}))`, "parent-is": (selector) => `:is(${selector})`, "parent-is-not": (selector) => `:not(:is(${selector}))`, "parent-is-has": (selector, altSelector) => `:is(${selector}):has(${altSelector})`, "parent-is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(${altSelector}))`, 
    //styles applied to child of a group
    //tw eg. group-hover:bg-red-500
    "group-hover": (selector) => `.group:hover ${selector}`, "group-focus": (selector) => `.group:focus ${selector}`, "group-focus-within": (selector) => `.group:focus-within ${selector}`, "group-focus-visible": (selector) => `.group:focus-visible ${selector}`, "group-active": (selector) => `.group:active ${selector}`, "group-visited": (selector) => `.group:visited ${selector}`, "group-target": (selector) => `.group:target ${selector}`, "group-has": (selector) => `.group:has(${selector})`, "group-has-not": (selector) => `.group:not(:has(${selector}))`, "group-is": (selector) => `.group:is(${selector})`, "group-is-not": (selector) => `.group:not(:is(${selector}))`, "group-is-has": (selector, altSelector) => `.group:is(${selector}):has(${altSelector})`, "group-is-has-not": (selector, altSelector) => `.group:is(${selector}):not(:has(${altSelector}))`, "group-first": (selector) => `.group:first-child ${selector}`, "group-last": (selector) => `.group:last-child ${selector}`, "group-only-child": (selector) => `.group:only-child ${selector}`, "group-odd": (selector) => `.group:nth-child(odd) ${selector}`, "group-even": (selector) => `.group:nth-child(even) ${selector}`, "group-first-of-type": (selector) => `.group:first-of-type ${selector}`, "group-last-of-type": (selector) => `.group:last-of-type ${selector}`, "group-only-of-type": (selector) => `.group:only-of-type ${selector}`, "group-empty": (selector) => `.group:empty ${selector}`, "group-disabled": (selector) => `.group:disabled ${selector}`, "group-enabled": (selector) => `.group:enabled ${selector}`, "group-checked": (selector) => `.group:checked ${selector}`, "group-indeterminate": (selector) => `.group:indeterminate ${selector}`, "group-default": (selector) => `.group:default ${selector}`, "group-required": (selector) => `.group:required ${selector}`, "group-valid": (selector) => `.group:valid ${selector}`, "group-invalid": (selector) => `.group:invalid ${selector}`, "group-in-range": (selector) => `.group:in-range ${selector}`, "group-out-of-range": (selector) => `.group:out-of-range ${selector}`, "group-placeholder-shown": (selector) => `.group:placeholder-shown ${selector}`, "group-autofill": (selector) => `.group:autofill ${selector}`, "group-read-only": (selector) => `.group:read-only ${selector}`, "group-before": (selector) => `.group::before ${selector}`, "group-after": (selector) => `.group::after ${selector}`, "group-first-letter": (selector) => `.group::first-letter ${selector}`, "group-first-line": (selector) => `.group::first-line ${selector}`, "group-marker": (selector) => `.group::marker ${selector}`, "group-selection": (selector) => `.group::selection ${selector}`, "group-file": (selector) => `.group::file-selector-button ${selector}`, "group-backdrop": (selector) => `.group::backdrop ${selector}`, "group-placeholder": (selector) => `.group::placeholder ${selector}`, "group-fullscreen": (selector) => `.group:fullscreen ${selector}`, "group-last-child": (selector) => `.group:last-child ${selector}`, "group-link": (selector) => `.group:link ${selector}`, "group-not-checked": (selector) => `.group:not(:checked) ${selector}`, "group-optional": (selector) => `.group:optional ${selector}`, "group-read-write": (selector) => `.group:read-write ${selector}`, "group-first-child": (selector) => `.group:first-child ${selector}`, 
    //styles applied from parent element to children
    //tw eg. *-hover:bg-red-500
    "*": "& > *", "*-hover": "& > *:hover", "*-focus": "& > *:focus", "*-focus-within": "& > *:focus-within", "*-focus-visible": "& > *:focus-visible", "*-active": "& > *:active", "*-visited": "& > *:visited", "*-target": "& > *:target", "*-first": "& > *:first-child", "*-last": "& > *:last-child", "*-only": "& > *:only-child", "*-odd": "& > *:nth-child(odd)", "*-even": "& > *:nth-child(even)", "*-has": (selector) => `& > *:has(~ ${selector})`, "*-has-not": (selector) => `& > *:not(:has(~ ${selector}))`, "*-is": (selector) => `& > *:is(${selector})`, "*-is-not": (selector) => `& > *:not(:is(${selector}))`, "*-is-has": (selector, altSelector) => `& > *:is(${selector}):has(~ ${altSelector})`, "*-is-has-not": (selector, altSelector) => `& > *:is(${selector}):not(:has(~ ${altSelector}))`, "*-first-of-type": "& > *:first-of-type", "*-last-of-type": "& > *:last-of-type", "*-only-of-type": "& > *:only-of-type", "*-empty": "& > *:empty", "*-disabled": "& > *:disabled", "*-enabled": "& > *:enabled", "*-checked": "& > *:checked", "*-indeterminate": "& > *:indeterminate", "*-default": "& > *:default", "*-required": "& > *:required", "*-valid": "& > *:valid", "*-invalid": "& > *:invalid", "*-in-range": "& > *:in-range", "*-out-of-range": "& > *:out-of-range", "*-placeholder-shown": "& > *:placeholder-shown", "*-autofill": "& > *:autofill", "*-read-only": "& > *:read-only", "*-before": "& > *::before", "*-after": "& > *::after", "*-first-letter": "& > *::first-letter", "*-first-line": "& > *::first-line", "*-marker": "& > *::marker", "*-selection": "& > *::selection", "*-file": "& > *::file-selector-button", "*-backdrop": "& > *::backdrop", "*-placeholder": "& > *::placeholder", "*-fullscreen": "& > *fullscreen", "*-last-child": "& > *last-child", "*-link": "& > *link", "*-not-checked": "& > *not(:checked)", "*-only-child": "& > *only-child", "*-optional": "& > *optional", "*-read-write": "& > *read-write", "*-first-child": "& > *first-child", "*-all": "& > *", "*-nth-child": (n) => `& > *:nth-child(${n})`, "*-nth-last-child": (n) => `& > *:nth-last-child(${n})`, "*-nth-of-type": (n) => `& > *:nth-of-type(${n})`, "*-nth-last-of-type": (n) => `& > *:nth-last-of-type(${n})`, 
    //styles applied to peer elements that come after the affected peer
    //tw eg. 1st element input is checked, 2nd element peer-checked:bg-red-500
    "peer-hover": (selector) => `.peer:hover ~ ${selector}`, "peer-focus": (selector) => `.peer:focus ~ ${selector}`, "peer-focus-within": (selector) => `.peer:focus-within ~ ${selector}`, "peer-focus-visible": (selector) => `.peer:focus-visible ~ ${selector}`, "peer-active": (selector) => `.peer:active ~ ${selector}`, "peer-visited": (selector) => `.peer:visited ~ ${selector}`, "peer-target": (selector) => `.peer:target ~ ${selector}`, "peer-has": (selector) => `.group:has(~ ${selector})`, "peer-has-not": (selector) => `:not(:has(~ ${selector}))`, "peer-is": (selector) => `:is(${selector})`, "peer-is-not": (selector) => `:not(:is(${selector}))`, "peer-is-has": (selector, altSelector) => `:is(${selector}):has(~ ${altSelector})`, "peer-is-has-not": (selector, altSelector) => `:is(${selector}):not(:has(~ ${altSelector}))`, "peer-first": (selector) => `.peer:first-child ~ ${selector}`, "peer-last": (selector) => `.peer:last-child ~ ${selector}`, "peer-only": (selector) => `.peer:only-child ~ ${selector}`, "peer-odd": (selector) => `.peer:nth-child(odd) ~ ${selector}`, "peer-even": (selector) => `.peer:nth-child(even) ~ ${selector}`, "peer-first-of-type": (selector) => `.peer:first-of-type ~ ${selector}`, "peer-last-of-type": (selector) => `.peer:last-of-type ~ ${selector}`, "peer-only-of-type": (selector) => `.peer:only-of-type ~ ${selector}`, "peer-empty": (selector) => `.peer:empty ~ ${selector}`, "peer-disabled": (selector) => `.peer:disabled ~ ${selector}`, "peer-enabled": (selector) => `.peer:enabled ~ ${selector}`, "peer-checked": (selector) => `.peer:checked ~ ${selector}`, "peer-indeterminate": (selector) => `.peer:indeterminate ~ ${selector}`, "peer-default": (selector) => `.peer:default ~ ${selector}`, "peer-required": (selector) => `.peer:required ~ ${selector}`, "peer-valid": (selector) => `.peer:valid ~ ${selector}`, "peer-invalid": (selector) => `.peer:invalid ~ ${selector}`, "peer-in-range": (selector) => `.peer:in-range ~ ${selector}`, "peer-out-of-range": (selector) => `.peer:out-of-range ~ ${selector}`, "peer-placeholder-shown": (selector) => `.peer:placeholder-shown ~ ${selector}`, "peer-autofill": (selector) => `.peer:autofill ~ ${selector}`, "peer-read-only": (selector) => `.peer:read-only ~ ${selector}`, "peer-fullscreen": (selector) => `.peer:fullscreen ~ ${selector}`, "peer-last-child": (selector) => `.peer:last-child ~ ${selector}`, "peer-link": (selector) => `.peer link ~ ${selector}`, "peer-not-checked": "&:not(:has(~ .peer:checked))", "peer-only-child": (selector) => `.peer:only-child) ~ ${selector}`, "peer-optional": (selector) => `.peer:optional) ~ ${selector}`, "peer-read-write": (selector) => `.peer:read-write) ~ ${selector}`, "peer-first-child": (selector) => `.peer:first-child) ~ ${selector}` }, mediaQueries);