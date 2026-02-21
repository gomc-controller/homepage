import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://gomc-controller.github.io',
  base: '/homepage',
  integrations: [
    starlight({
      title: 'GOMC',
      logo: {
        src: './src/assets/gomc-logo.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/modusoft/gomc',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: [],
    }),
  ],
});
