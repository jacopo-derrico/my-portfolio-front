// https://nuxt.com/docs/api/configuration/nuxt-config
import { usePortfolioStore } from '~/store/portfolio';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer: {
    port: 8000
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@pinia/nuxt',
    "@nuxtjs/sitemap",
  ],
  ssr: true,
  css: [
    '@/assets/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  fonts: {
    local: {},
  },
  app: {
    head: {
      title: 'DeJa - Designer & Web developer',
      meta: [
        { name: 'description', content: 'Designer & web developer based in Turin, Italy(for now). Take a look at my projects and contact me if you want to work with me.' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  sitemap: {
    sources: [
      '/api/sitemap-urls'
    ]
  }
})