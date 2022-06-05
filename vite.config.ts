import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    windi(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/,
    }),
  ],
});
