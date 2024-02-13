import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { paletteFactory } from "../factories/paletteFactory"
// import { ThemeProvider, useTheme } from "next-themes"
import {
  constructTailwindObject,
  deepMerge,
  isEmptyObject,
} from "../functions/helpers"

import {
  MakUiFlexiblePaletteInput,
  MakUiInteractionStateKey,
  MakUiSimplePalette,
  MakUiSimpleTheme,
  MakUiStateShades,
  MakUiThemeKey,
  MakUiThemeShades,
  MakUiVerbosePalette,
  MakUiVerboseTheme,
  ShadeStep,
  MakUiComponentConfig,
  MakUiRootComponentConfig,
  GenericObject,
} from "../types/index"
import {
  makUiDefaultThemeShades,
  makUiThemes,
  defaultComponentConfig,
} from "../constants/ui-constants"

import styled from "@emotion/styled"

type PaletteGeneratorProps = {
  palette?: MakUiFlexiblePaletteInput
  paletteOverride?: MakUiVerbosePalette | Partial<MakUiVerbosePalette>
  themeShades?: MakUiThemeShades
  enableLightMode?: boolean
  enableDarkMode?: boolean
  enableCustomMode?: boolean
  shadeStep?: ShadeStep
  includeBlackAndWhite?: boolean
  includeNearAbsolutes?: boolean
  altBlack?: string
  altWhite?: string
}

type MakUiProviderProps = {
  children: ReactNode
  palette?: MakUiFlexiblePaletteInput
  paletteOverride?: MakUiVerbosePalette
  componentConfig?: MakUiComponentConfig
  buttonConfig?: MakUiRootComponentConfig
  themeShades?: MakUiThemeShades
  stateShades?: MakUiStateShades
  enableSystem?: boolean
  defaultTheme?: MakUiThemeKey
  enableDarkMode?: boolean
  enableCustomMode?: boolean
  enabledStates?: MakUiInteractionStateKey[]
  shadeStep?: ShadeStep
  includeBlackAndWhite?: boolean
  paletteGenProps?: PaletteGeneratorProps
}

const MakUiContext = createContext<MakUiContext | undefined>(undefined)

export const MakUiProvider = (props: MakUiProviderProps) => {
  return (
    // <ThemeProvider
    //   storageKey="mak-ui-theme"
    //   enableSystem={true}
    //   themes={makUiThemes}
    // >
    <MakUiProviderChild {...props}>{props.children}</MakUiProviderChild>
    // </ThemeProvider>
  )
}

const GlobalStyleSheetWrapper = styled.div<GenericObject>(({ styleSheet }) => ({
  ...styleSheet,
}))

const defaultPaletteGenProps: PaletteGeneratorProps = {
  palette: {} as MakUiFlexiblePaletteInput,
  themeShades: makUiDefaultThemeShades,
  enableLightMode: true,
  enableDarkMode: true,
  enableCustomMode: false,
  shadeStep: 50 as ShadeStep,
  includeBlackAndWhite: true,
  includeNearAbsolutes: true,
  altBlack: "#000000",
  altWhite: "#ffffff",
}

const MakUiProviderChild = ({
  children,
  componentConfig: componentConfigInput,
  palette: paletteInput,
  enableSystem = true,
  defaultTheme = "light",
  paletteGenProps = defaultPaletteGenProps,
}: MakUiProviderProps) => {
  const [styleSheet, setStyleSheet] = useState<GenericObject>({})
  const [themeMode, setThemeMode] = useState<MakUiThemeKey>(defaultTheme)

  const paletteInputRef = useRef<string>()
  useEffect(() => {
    if (paletteInputRef.current !== JSON.stringify(paletteInput)) {
      paletteInputRef.current = JSON.stringify(paletteInput)
    }
    return
  }, [JSON.stringify(paletteInput)])

  // let { theme: themeMode, setTheme: setThemeMode } = useTheme()

  const mergedPaletteGenProps = deepMerge(
    defaultPaletteGenProps,
    paletteGenProps
  ) as PaletteGeneratorProps

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
    altWhite,
  } = mergedPaletteGenProps

  paletteInput = paletteOverride
    ? paletteOverride
    : !isEmptyObject(paletteGenInput)
    ? paletteGenInput
    : paletteInput
    ? paletteInput
    : {}
  const stringifiedPalette = JSON.stringify(paletteInput)

  const darkModeInPalette = stringifiedPalette.includes("dark:")
  const customModeInPalette = stringifiedPalette.includes("custom:")
  const lightModeInPalette =
    !paletteOverride &&
    (stringifiedPalette.includes("light:") ||
      Object.values(paletteInput || {}).some((val) => !val.includes(":")))
  const enabledThemeModes = [
    enableLightMode || lightModeInPalette ? "light" : null,
    enableDarkMode || darkModeInPalette ? "dark" : null,
    enableCustomMode || customModeInPalette ? "custom" : null,
  ].filter((mode) => mode !== null) as MakUiThemeKey[]

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("mak-ui-theme")
    if (defaultTheme && !localStorageTheme) {
      setThemeMode(defaultTheme)
    }
  }, [])

  useEffect(() => {
    if (!enableSystem) return
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setThemeMode("dark")
      } else {
        setThemeMode("light")
      }
    }

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange)

    handleDarkModeChange({
      matches: darkModeMediaQuery.matches,
    } as MediaQueryListEvent)

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange)
    }
  }, [])

  let currentTheme: MakUiThemeKey =
    (themeMode as MakUiThemeKey | undefined) || defaultTheme

  const componentConfig = useMemo(() => {
    const configObject: MakUiComponentConfig = {
      button:
        (componentConfigInput?.button as MakUiRootComponentConfig) ||
        defaultComponentConfig.button,
      input:
        (componentConfigInput?.input as MakUiRootComponentConfig) ||
        defaultComponentConfig.input,
      text:
        (componentConfigInput?.text as MakUiRootComponentConfig) ||
        defaultComponentConfig.text,
      select:
        (componentConfigInput?.select as MakUiRootComponentConfig) ||
        defaultComponentConfig.select,
      form:
        (componentConfigInput?.form as MakUiRootComponentConfig) ||
        defaultComponentConfig.form,
      dialog:
        (componentConfigInput?.dialog as MakUiRootComponentConfig) ||
        defaultComponentConfig.dialog,
      textarea:
        (componentConfigInput?.textarea as MakUiRootComponentConfig) ||
        defaultComponentConfig.textarea,
    }

    return configObject
  }, [JSON.stringify(componentConfigInput)])

  const palettesMemo = useMemo(() => {
    if (paletteOverride)
      return {
        simplePalette: paletteOverride as MakUiSimplePalette,
        verbosePalette: paletteOverride as MakUiVerbosePalette,
      }
    console.log("generating palette")
    const { verbose, simple } =
      paletteFactory({
        paletteInput: paletteInput as MakUiFlexiblePaletteInput,
        enabledThemeModes,
        defaultShades: themeShades!,
        shadeStep: shadeStep!,
        includeBlackAndWhite: includeBlackAndWhite!,
        includeNearAbsolutes: includeNearAbsolutes!,
        altBlack: altBlack!,
        altWhite: altWhite!,
      }) || {}

    return {
      simplePalette: simple as MakUiSimplePalette,
      verbosePalette: verbose as MakUiVerbosePalette,
    }
  }, [paletteInputRef, paletteOverride])

  const [simpleTheme, setSimpleTheme] = useState<MakUiSimpleTheme>(
    {} as MakUiSimpleTheme
  )

  const [verboseTheme, setVerboseTheme] = useState<MakUiVerboseTheme>(
    {} as MakUiVerboseTheme
  )
  const [theme, setTheme] = useState<MakUiThemeKey>(
    (themeMode as MakUiThemeKey) || defaultTheme || "light"
  )

  useEffect(() => {
    setTheme(themeMode as MakUiThemeKey)
  }, [themeMode])

  const formattingThemes =
    isEmptyObject(simpleTheme) ||
    isEmptyObject(verboseTheme) ||
    !simpleTheme ||
    !verboseTheme
      ? true
      : false

  useEffect(() => {
    setVerboseTheme(palettesMemo.verbosePalette[currentTheme])
    setSimpleTheme(palettesMemo.simplePalette[currentTheme])
  }, [themeMode, currentTheme])

  const { simplePalette, verbosePalette } = palettesMemo

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
    constructTailwindColorScale: constructTailwindObject,
  }

  return (
    <MakUiContext.Provider value={value}>
      <GlobalStyleSheetWrapper styleSheet={styleSheet}>
        {formattingThemes ? <></> : <>{children}</>}
      </GlobalStyleSheetWrapper>
    </MakUiContext.Provider>
  )
}

interface MakUiContext {
  componentConfig: MakUiComponentConfig

  theme: MakUiThemeKey
  setTheme: (themeMode: MakUiThemeKey) => void
  formattingThemes: boolean
  isDark: boolean
  isLight: boolean
  isCustom: boolean
  enabledThemeModes: MakUiThemeKey[]
  simplePalette: MakUiSimplePalette
  verbosePalette: MakUiVerbosePalette
  simpleTheme: MakUiSimpleTheme
  verboseTheme: MakUiVerboseTheme
  styleSheet: GenericObject
  setStyleSheet: (styleSheet: GenericObject) => void
  constructTailwindColorScale: ({
    hex,
    step,
    includeNearAbsolutes,
  }: {
    hex: string
    step?: number | undefined
    includeNearAbsolutes?: boolean | undefined
  }) => Record<number, string>
}

export const useMakUi = () => {
  const context = useContext(MakUiContext)
  if (context === undefined) {
    throw new Error("useMakUi must be used within a MakUiProvider")
  }
  return context
}
