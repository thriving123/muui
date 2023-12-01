import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  // 设置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 导入scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/global.scss";`,
      },
    },
  },
});
