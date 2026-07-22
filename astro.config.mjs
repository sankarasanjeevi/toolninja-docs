// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site. When a custom domain (docs.toolninja.com) is
	// added, change `site` to the custom domain and remove `base`.
	site: 'https://sankarasanjeevi.github.io',
	base: '/toolninja-docs',
	integrations: [
		starlight({
			title: 'Tool Ninja',
			description:
				'Documentation for Tool Ninja — focused Premiere Pro and After Effects extensions that live right in your workflow.',
			tagline: 'Docs for Tool Ninja extensions',
			customCss: ['./src/styles/theme.css'],
			social: [
				{ icon: 'external', label: 'Tool Ninja', href: 'https://toolninja.framer.website/' },
			],
			editLink: {
				baseUrl: 'https://github.com/sankarasanjeevi/toolninja-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is Tool Ninja?', slug: 'getting-started/what-is-tool-ninja' },
						{ label: 'Installing an extension', slug: 'getting-started/installation' },
						{ label: 'Activating your license', slug: 'getting-started/licensing' },
					],
				},
				{
					label: 'CutCap',
					items: [
						{ label: 'Overview', slug: 'cutcap/overview' },
						{ label: 'Importing captions', slug: 'cutcap/importing' },
						{ label: 'Editing captions', slug: 'cutcap/editing' },
						{ label: 'Cleanup', slug: 'cutcap/cleanup' },
						{ label: 'Review & search', slug: 'cutcap/review-and-search' },
						{ label: 'Playback & sync', slug: 'cutcap/playback-and-sync' },
						{ label: 'Export & push to Premiere', slug: 'cutcap/output' },
						{ label: 'Push as MOGRTs', slug: 'cutcap/mogrts' },
						{ label: 'Appearance & settings', slug: 'cutcap/settings' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Keyboard shortcuts', slug: 'reference/keyboard-shortcuts' },
						{ label: 'FAQ', slug: 'reference/faq' },
						{ label: 'Changelog', slug: 'reference/changelog' },
					],
				},
			],
		}),
	],
});
