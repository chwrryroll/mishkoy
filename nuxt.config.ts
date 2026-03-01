import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    head: {
      title: 'Kirillica S Mishkoy',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    fallbackToApi: true,
    serverBundle: {
      collections: ['lucide']
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image']
})
