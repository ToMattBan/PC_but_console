// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      anchorLinks: false
    },
    experimental: {
      search: true,
    }
  }
})
