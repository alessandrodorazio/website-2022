import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ["@nuxtjs/tailwindcss", "vue3-notion/nuxt"],
    nitro: {
        preset: 'vercel'
    }
})
