import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { extname, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { globSync } from "glob";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: "./tsconfig.app.json",
			exclude: ["src/**/*.stories.ts"], // Exclude stories from .d.ts generation
		}),
		libInjectCss(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.js"),
			name: "neumorphic-ui",
			formats: ["es"],
			// the proper extensions will be added
			fileName: "neumorphic-ui",
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: Object.fromEntries(
				globSync("src/**/*.{ts,tsx}", {
					 // Ignore stories
					 ignore: ["src/**/*.stories.ts"],
				}).map((file) => [
					// This removes `src/` as well as the file extension from each
					// file, so e.g. src/nested/foo.js becomes nested/foo
					relative(
						"src",
						file.slice(0, file.length - extname(file).length)
					),
					// This expands the relative paths to absolute paths, so e.g.
					// src/nested/foo becomes /project/src/nested/foo.js
					fileURLToPath(new URL(file, import.meta.url)),
				])
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
});
