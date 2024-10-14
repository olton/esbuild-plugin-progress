import {context} from 'esbuild';
import progress from "./src/index.js";

let ctx = await context({
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

await ctx.watch()