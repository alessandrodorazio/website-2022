<template>
    <div>
        <Head>
            <title>Alessandro D'Orazio</title>
            <Meta name="description" content="Software developer and AI/Web3 Enthusiast"></Meta>
        </Head>
        <div class="container">
            <div>
                <div class="posts-list">
                    <div class="article-card-starred-list-container">
                        <div class="article-card-starred-list" v-if="postsStarred">
                            <div v-for="(post, k) in postsStarred">
                                <article-card  :article="post" :key="'article-'+k" />
                                <div class="w-full h-0.5 bg-gray-200" v-if="k<postsStarred.length-1"></div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <!--<h1 class="font-bold">Latest posts</h1>-->
                        <div v-if="posts">
                            <article-card v-for="(post, k) in posts" :article="post" :key="'article-'+k" />

                        </div>
                    </div>
                    <!--<ul>
                        <li v-for="(post, k) in posts" :key="k">
                            <b>{{ post.date }}</b>
                            <NuxtLink v-if="post.slug" :to="'/blog/' + post.slug" class="button--grey">
                                <b>{{ post.title }}</b>
                                {{ post.excerpt }}
                            </NuxtLink>
                        </li>
                    </ul>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {getPageTable} from 'vue3-notion'
import ArticleCard from "../components/articles/article-card";
import {onMounted} from "vue";
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
// convert array of pages to a map of tags with page arrays
/*const postsByTag = pageTable
        .filter((page) => page.published)
        .reduce((map, currentPage) => {
            currentPage.tags.forEach((tag) =>
                    map.has(tag)
                            ? map.set(tag, [...map.get(tag), currentPage])
                            : map.set(tag, [currentPage])
            );
            return map;
        }, new Map()); */
//const tags = [...postsByTag.keys()].sort()


</script>