import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { MakUiThemeKey } from ".."
import { setLocalStorage } from "../functions/helpers"

type ThemeContextType = {
  theme: MakUiThemeKey
  toggleTheme: () => void
  enableSystem: boolean
  themes: MakUiThemeKey[]
  toggleUseSystemTheme: () => void
  setTheme: (theme: MakUiThemeKey) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type MakUiThemeProviderProps = {
  storageKey?: string
  children: ReactNode
  themes: MakUiThemeKey[]
  defaultTheme?: MakUiThemeKey
}

export const MakUiThemeProvider = ({
  storageKey = "mak-ui-theme",
  children,
  themes,
  defaultTheme = "light",
}: MakUiThemeProviderProps) => {
  const [theme, setTheme] = useState<MakUiThemeKey>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<MakUiThemeKey>("light")
  const [enableSystem, setEnableSystem] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleMediaChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleMediaChange)
    handleMediaChange() // Initial check

    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  useEffect(() => {
    if (enableSystem) {
      setTheme(systemTheme)
    }
  }, [enableSystem, systemTheme])

  const toggleTheme = () => {
    if (enableSystem) {
      setEnableSystem(false)
    } else {
      const nextThemeIndex = (themes.indexOf(theme) + 1) % themes.length
      setTheme(themes[nextThemeIndex] as MakUiThemeKey)
    }
  }

  const toggleUseSystemTheme = () => {
    setEnableSystem(!enableSystem)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    if (theme) {
      setLocalStorage(storageKey, theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        enableSystem,
        toggleUseSystemTheme,
        themes,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useMakUiTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useMakUiTheme must be used within a MakUiThemeProvider")
  }
  return context
}
