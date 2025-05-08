// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 8000
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@pinia/nuxt',
    "@nuxtjs/i18n",
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
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
    locales: [
      { 
        code: 'en', 
        language: 'en-US',
        iso: "en-US", 
        name: '_english',
        file: 'en-US.js'
      },
      { 
        code: 'it', 
        language: 'it-IT',
        iso: "it-IT",
        name: '_italiano',
        file: 'it-IT.js'
      }
    ],
    defaultLocale: 'en',
  }
})