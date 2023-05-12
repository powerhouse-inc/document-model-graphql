import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            entry: {
                "document-model-graphql": resolve(__dirname, "src/index.ts"),
                document: resolve(__dirname, "src/generated/document/index.ts"),
                "budget-statement": resolve(
                    __dirname,
                    "src/generated/budget-statement/index.ts"
                ),
            },
        },
        outDir: "dist",
        rollupOptions: {
            external: "zod",
        },
    },
    plugins: [dts()],
});
