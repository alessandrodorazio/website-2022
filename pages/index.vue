<template>
  <div>
    <Head>
        <Title>Alessandro D'Orazio</Title>
        <Meta name="description" content="Software developer and AI/Web3 Enthusiast"></Meta>
        <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></Meta>
        <Meta name="charset" content="UTF-8"></Meta>
    </Head>
    <div class="container">
      <div>
        <div class="posts-list">
          <div class="article-card-starred-list-container" v-if="postsStarred">
            <article-list
              class="article-card-starred-list"
              :articles="postsStarred"
              :divider="true"
              key="starred-posts"
            />
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
import { onMounted } from "vue";
import {useNotion} from "../composables/useNotion";
const {pageTable, postsStarred, posts, setData} = useNotion();

onMounted(async () => {
  window.scroll(0, 0);
  await setData()
}); 
</script>