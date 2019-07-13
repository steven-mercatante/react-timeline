import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";

const NODE_ENV = process.env.NODE_ENV || "development";

export default [
  {
    input: "./src/index.js",
    output: {
      file: "./build/dev.js",
      format: "cjs"
    },
    external: ["react", "react-dom", "styled-components"],
    plugins: [
      // replace({
      //   "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      // }),
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
      commonjs()
    ]
  }
];
