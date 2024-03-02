import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist.mjs",
    format: "module",
  },
  plugins: [resolve(), json(), commonjs(), babel({ babelHelpers: "bundled" })],
};
