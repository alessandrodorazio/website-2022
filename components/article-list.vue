<script setup>
import ArticleCard from './articles/article-card.vue'
const props = defineProps(["articles", "key", "divider"])
const articlesLength = props.articles.length
</script>

<template>
    <div>
        <div v-for="(post, k) in props.articles" :key="'list-' + post.id">
            <article-card  :article="post" :key="'card-' + post.id" />
            <div class="w-full h-0.5 bg-gray-200" v-if="props.divider && k<articlesLength-1"></div>
        </div>
    </div>
</template>