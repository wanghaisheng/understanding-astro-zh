import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	zh: { label: '简体中文', lang: 'zh' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
};

const site = 'https://understanding-astro-zh-docs.vercel.app';

export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'understanding astro',
			logo: {
				light: '/src/assets/astro-logo-light.svg',
				dark: '/src/assets/astro-logo-dark.svg',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/wanghaisheng/understanding-astro-zh/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/wanghaisheng/understanding-astro-zh',
				discord: 'https://astro.build/chat',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
				},
			],
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			sidebar: [
				{
					label: 'understanding astro',
					translations: {
						de: 'Beginne hier',
						es: 'Comienza aqui',
						ja: 'ここからはじめる',
						fr: 'Commencez ici',
						it: 'Inizia qui',
						zh: 'understanding astro',
						'pt-BR': 'Comece Aqui',
					},
					items: [
						{
							label: 'preface',
							link: 'preface',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'preface',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter1',
							link: 'ch1',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter1',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter2',
							link: 'ch2',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter2',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter3',
							link: 'ch3',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter3',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter4',
							link: 'ch4',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter4',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter5',
							link: 'ch5',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter5',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter6',
							link: 'ch6',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter6',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter7',
							link: 'ch7',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter7',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'chapter8',
							link: 'ch8',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'chapter8',
								'pt-BR': 'Introdução',
							},
						},
						{
							label: 'conclusion',
							link: 'conclusion',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								zh: 'conclusion',
								'pt-BR': 'Introdução',
							},
						},

					],
				},

			],
			lastUpdated: true,
		}),
	],
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
