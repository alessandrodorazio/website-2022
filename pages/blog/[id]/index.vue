<script setup>
import {useRoute} from 'vue-router'
import {NotionRenderer, useGetPageBlocks} from "vue3-notion"
import {onMounted } from 'vue'

const route = useRoute()
const articleId = route.params.id.replace('.html', '');


const articleIdHyphened = route.params.id.substring(0, 8) + '-' + route.params.id.substring(8, 12) + '-' + route.params.id.substring(12, 16) + '-' + route.params.id.substring(16, 20) + '-' + route.params.id.substring(20, 32)

let {data} = await useGetPageBlocks(articleId)

onMounted(() =>{
    window.scroll(0,0)
})
</script>

<template>

    <div>
        <Head>
            <title v-if="articleIdHyphened && data && data[articleIdHyphened]">{{data[articleIdHyphened].value.properties.title[0][0]}} - Alessandro D'Orazio</title>
        </Head>
        <div class="mt-8 lg:mt-0 mx-4" v-if="data">
            <div class="mb-2">
                <ClientOnly>
                    <NotionRenderer :blockMap="data" fullPage prism/>
                </ClientOnly>
            </div>
            <nuxt-button />
        </div>
    </div>
</template>

<style scoped>

</style>