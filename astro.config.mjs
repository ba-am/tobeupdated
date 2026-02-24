// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Nexus',
			description: 'Architecting the future through Scalable Intelligence and Robust Engineering.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/google' },
				{ icon: 'x.com', label: 'X', href: 'https://twitter.com/google' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/' }
			],
			sidebar: [
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'AI Architecture', slug: 'concepts/architecture' },
					],
				},
				{
					label: 'Engineering',
					autogenerate: { directory: 'engineering' },
				},
			],
			customCss: [
				// Path to your custom CSS file
				// './src/styles/custom.css',
			],
		}),
	],
});
