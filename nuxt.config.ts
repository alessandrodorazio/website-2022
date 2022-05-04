import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ["@nuxtjs/tailwindcss", "vue3-notion/nuxt"],
    nitro: {
        preset: 'vercel'
    },
    hooks: {
        'pages:extend' (pages) {
            pages.push(

                {
                    name: 'Home',
                    path: '/',
                    file: resolve(__dirname, 'pages/index.vue')
                },
                {
                    name: 'Article Page',
                    path: '/blog:id(.*)',
                    file: resolve(__dirname, 'pages/blog/[id]/index.vue')
                },

                {
                    name: 'List Page',
                    path: '/demo/:id/:id2',
                    file: resolve(__dirname, 'pages/List.vue')
                },

                {
                    name: 'Not Found',
                    path: '/:pathMatch(.*)*',
                    file: resolve(__dirname, 'pages/404.vue')
                })
        }
    }
})
