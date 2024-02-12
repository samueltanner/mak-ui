import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"

export default {
  input: "src/index.ts", // Your main TypeScript file
  output: {
    dir: "dist",
    format: "cjs", // CommonJS format, you can also use 'esm' for ES Modules
    sourcemap: true,
  },
  plugins: [typescript(), terser()],
  external: ["react", "react-dom"],
}
