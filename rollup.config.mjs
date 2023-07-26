import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from 'rollup-plugin-dts'

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        exclude: [
          "node_modules",
          /\.test.((js|jsx|ts|tsx))$/,
          /\.stories.((js|jsx|ts|tsx))$/,
        ],
      }),
    ],
  },
  {
    input: "lib/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [
      dts({
        compilerOtions: {
          baseUrl: "./src",
        },
      }),
    ],
    external: [/\.css$/],
  },
];

export default config;
