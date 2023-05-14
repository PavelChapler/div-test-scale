// @ts-nocheck
const path = require('path');
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Тестовое div | шкала',
      meta: [
        {
          name: 'description',
          content: 'На работу надо взять, надо взять, надо взять'
        },
      ],
      script: [
        { src: 'https://kit.fontawesome.com/f30b856af7.js', async: true },
      ],
      link: [
          { rel: 'icon', sizes: "32x32", type: 'image/png', href: "/favicon-32x32.png" },
          { rel: 'icon',  sizes: "16x16", type: 'image/png', href: "/favicon-16x16.png" },
          { rel: 'apple-touch-icon',  sizes: "180x180", type: 'image/png', href: "/apple-touch-icon1.png" }
      ]
    },
    vite: {
      css: { devSourcemap: true },
    },
    css: [
      "@/app/styles/main.scss",
    ]
  },
  modules: [
    '@pinia/nuxt',
  ],
  components: [
    {
      path: '~/components/global',
      global: true
    }
  ],
  alias: {
    '@@': path.resolve(__dirname, ''),
  },
  experimental: {
    inlineSSRStyles: true,
  },
});
