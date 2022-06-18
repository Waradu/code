import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import examples from 'mdsvexamples'
import path from 'path'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [
		[
			examples,
			{
				defaults: {
					Wrapper: path.resolve('./docs/components/Example.svelte'),
				},
			},
		],
	],
	rehypePlugins: [],

	layout: {
		_: './docs/layout/page.svelte',
	},
})

export default config
