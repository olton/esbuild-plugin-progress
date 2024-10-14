import {build} from 'esbuild';
import progress from "./src/index.js";

await build({
    entryPoints: ['./src/index.js'],
    outfile: './dist/index.js',
    bundle: true,
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    minify: false,
    sourcemap: false,
    plugins: [progress()]
})
