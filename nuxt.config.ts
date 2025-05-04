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
  // vuefire: {
  //   config: {
  //     apiKey: "AIzaSyDq855EBxLYYtHwwDlsECP5QrJ6lu9o6OM",
  //     authDomain: "my-portfolio-34fff.firebaseapp.com",
  //     projectId: "my-portfolio-34fff",
  //     storageBucket: "my-portfolio-34fff.appspot.com",
  //     messagingSenderId: "861651541162",
  //     appId: "1:861651541162:web:50e9d325bb8e6b262644d3",
  //     measurementId: "G-QYQ31BDYQZ"
  //   },
  //   services: {
  //     firestore: true,
  //   },
  //   auth: {
  //     enabled: true
  //   },
  // },
})