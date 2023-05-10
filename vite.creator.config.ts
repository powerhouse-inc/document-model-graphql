import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
    root: "src/creator",
    plugins: [react({ include: "src/creator/**/*.tsx" })],
    optimizeDeps: {
        include: ["zod"],
    },
});
