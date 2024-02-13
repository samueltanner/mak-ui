import { MakUiFlexiblePaletteInput, MakUiSimplePalette, MakUiThemeKey, MakUiThemeShades, MakUiVerbosePalette, ShadeStep } from "../types/index";
export declare const paletteFactory: ({ paletteInput, enabledThemeModes, defaultShades, shadeStep, includeBlackAndWhite, includeNearAbsolutes, altBlack, altWhite, tailwindConfig, }: {
    paletteInput: MakUiFlexiblePaletteInput;
    enabledThemeModes: MakUiThemeKey[];
    defaultShades: MakUiThemeShades;
    shadeStep: ShadeStep;
    includeBlackAndWhite: boolean;
    includeNearAbsolutes: boolean;
    altBlack: string;
    altWhite: string;
    tailwindConfig?: any;
}) => {
    verbose: MakUiVerbosePalette;
    simple: MakUiSimplePalette;
};
