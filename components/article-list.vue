<script setup>
import ArticleCard from './articles/article-card.vue'
import {computed} from "vue";
const props = defineProps(["articles", "key", "divider"])
const articles = computed(() => props.articles)
const articlesLength = computed(() => props.articles.length)
const divider = computed(() => props.divider)
</script>

<template>
    <div>
        <div v-for="(post, k) in articles" :key="'list-' + post.id">
            <article-card  :article="post" :key="'card-' + post.id" />
            <div class="w-full h-0.5 bg-gray-800" v-if="divider && k<articlesLength-1"></div>
        </div>
    </div>
</template>