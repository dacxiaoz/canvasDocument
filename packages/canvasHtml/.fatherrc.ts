import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    platform: "browser",
    transformer: "babel",
  },
  esm: { transformer: "babel" },
  umd: {
    externals: { react: "window.React", "react-dom": "window.ReactDOM" },
    sourcemap: false,
  },
});
