<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
import {NotionRenderer, useGetPageBlocks} from "vue3-notion"
import {onMounted } from 'vue'
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
        <div class="mt-8 lg:mt-0 mx-4">
            <div class="mb-2">
                <NotionRenderer v-if="data" :blockMap="data" fullPage prism/>
            </div>
            <div v-if="data" class="button-container">
                <NuxtLink href="/" class="article-list-back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                    <span>Articles list</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>