import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
export default {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
    },
    plugins: [
        typescript(),
        babel({
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            babelHelpers: "bundled",
            presets: ["@babel/preset-react"],
        }),
    ],
    external: [
        "react",
        "react-dom",
        "next-themes",
        "@emotion/styled",
        "chroma-js",
        "tailwindcss",
        "tailwindcss/colors",
        "framer-motion",
        "fs",
        "path",
    ],
};
