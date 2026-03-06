// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },


  css: [
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Serviços',
      meta: [
        {
          name: 'description',
          content: 'Bem Vindo a minha loja de Serviços',
        }
      ],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ],

  // Prerender de todo o site
  nitro: {
    prerender: {
      routes: ['/', '/about', '/pricing', '/contact', '/products',],
      ignore: ['/dashboard', '/dashboard/**'],
      // habilitar o crawling para descobrir os enlaces automaticamente
      crawlLinks: true,
    },
  },

})
