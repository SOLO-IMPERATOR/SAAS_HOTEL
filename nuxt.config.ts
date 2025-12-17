export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',     
  ],
  css: [
    '~/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  app: {
  head: {
  link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/lucide-static@latest/font/lucide.css'
        }
      ]
    }
  }
})
