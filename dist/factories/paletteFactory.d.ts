import { MakUiFlexiblePaletteInput, MakUiSimplePalette, MakUiThemeKey, MakUiThemeShades, MakUiVerbosePalette, ShadeStep } from "../types/index";
export declare const paletteFactory: ({ paletteInput, enabledThemeModes, defaultShades, shadeStep, includeBlackAndWhite, includeNearAbsolutes, altBlack, altWhite, }: {
    paletteInput: MakUiFlexiblePaletteInput;
    enabledThemeModes: MakUiThemeKey[];
    defaultShades: MakUiThemeShades;
    shadeStep: ShadeStep;
    includeBlackAndWhite: boolean;
    includeNearAbsolutes: boolean;
    altBlack: string;
    altWhite: string;
}) => {
    verbose: MakUiVerbosePalette;
    simple: MakUiSimplePalette;
};
