import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  // 开启 attributify: 属性化,可以通过props的方式定一样式
  attributify: true,
  shortcuts: {
    'flex-c': 'flex justify-center items-center',
  }, // 封装原子化：一些常见的类名的集合
});
