import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default [
  // CommonJS
  {
    input: "./src/index.js",
    output: {
      file: "bundle.js",
      format: "cjs",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom", "styled-components"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      commonjs()
    ]
  },

  // ES
  // CommonJS
  {
    input: "./src/index.js",
    output: {
      file: "es/bundle.js",
      format: "es",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom", "styled-components"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      commonjs()
    ]
  }
];
