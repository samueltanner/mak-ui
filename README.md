
```npm i @mak-stack/mak-ui```

```
"use client"
import { mak, MakUiProvider } from "mak-ui"

const palette = {
primary: "#731AFF",
secondary: "#00EAB3",
tertiary: "#ED45BB",
custom: "dark:zinc-600 light:zinc-500",
success: "#22E581",
error: "#EE4444",
danger: "#EE4444",
warning: "#FFCC66",
info: "#0BA5EC",
text: "light:zinc-900 dark:zinc-50",
theme: {
primary: "light:zinc-50 dark:zinc-800",
secondary: "light:zinc-200 dark:zinc-700",
tertiary: "light:zinc-300 dark:zinc-600",
custom: "light:mak-teal-500 dark:mak-teal-700",
light: "light:white dark:zinc-50",
dark: "light:zinc-900 dark:zinc-950",
},
}
export default function Home() {
return (
<MakUiProvider
paletteGenProps={{
        altBlack: "zinc-900",
        altWhite: "zinc-50",
        palette,
      }} >
<mak.div className="h-screen w-screen" makClassName="bg-theme|primary">
<mak.div makClassName="text-color|secondary">hello from mak ui!</mak.div>
</mak.div>
</MakUiProvider>
)
}
```
