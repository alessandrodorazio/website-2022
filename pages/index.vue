<template>
    <div>
        <Head>
            <title>Alessandro D'Orazio</title>
            <Meta name="description" content="Software developer and AI/Web3 Enthusiast"></Meta>
        </Head>
        <div class="container">
            <div>
                <div class="posts-list">
                    <div class="article-card-starred-list-container" v-if="postsStarred">
                        <article-list class="article-card-starred-list" :articles="postsStarred" :divider="true" key="starred-posts" />
                    </div>

                    <div v-if="posts">
                        <article-list :articles="posts" :divider="false" key="posts" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import {getPageTable} from 'vue3-notion'
const pageTable = await getPageTable("b4e2f642b4db46138ecc83ba12b63d0a");

// sort published pages
pageTable.forEach(item => {
    item.date = new Date(item.date)
})

const postsStarred = pageTable.filter((page) => page.published && page.starred).sort((a,b) => {
                 // alphabetical order for starred
    return (a.title >= b.title)?1:-1
})

const posts = pageTable
    .filter((page) => page.published && !page.starred)
    .sort((a, b) => {
        return b.date - a.date // date order for non starred
});

onMounted(() =>{
    window.scroll(0,0)
})


</script>