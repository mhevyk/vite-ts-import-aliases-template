import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

function resolveSource(...paths: Parameters<typeof path.resolve>) {
  return path.resolve(__dirname, "src", ...paths);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolveSource("components"),
      "@hooks": resolveSource("hooks"),
    },
  },
  plugins: [react()],
});
