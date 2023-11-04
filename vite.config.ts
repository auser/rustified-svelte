import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import wasmPack from 'vite-plugin-wasm-pack';
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
	plugins: [sveltekit(), wasmPack('./passgen'), purgeCss({
		safelist: {
			greedy: [/svelte-/, /^hljs-/, /^sl-/],
		}
	})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
