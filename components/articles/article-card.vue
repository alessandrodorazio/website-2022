<script setup>
const props = defineProps(["article"]);
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
const dateFormatted = padTo2Digits(props.article.date.getDate()) + '/' + padTo2Digits(props.article.date.getMonth() + 1) + '/' + props.article.date.getFullYear();
</script>

<template>
  <div
    :class="{
      'bg-gradient': !props.article.starred,
      'px-4': props.article.starred
    }"
  >
    <div
      class="article-container"
      :class="{
        'starred': props.article.starred,
      }"
    >
      <div class="link-container">
        <NuxtLink
          :href="'/blog/' + props.article.slug"
          :class="{ 'mb-1': !props.article.starred }"
        >
          <h2 class="link-title-container">
            <span v-if="props.article.starred && false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-5 mr-1"
              >
                <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                <defs></defs>
                <path
                  d="M528.53 171.5l-146.36-21.3-65.43-132.39c-11.71-23.59-45.68-23.89-57.48 0L193.83 150.2 47.47 171.5c-26.27 3.79-36.79 36.08-17.75 54.58l105.91 103-25 145.49c-4.52 26.3 23.22 46 46.48 33.69L288 439.56l130.93 68.69c23.26 12.21 51-7.39 46.48-33.69l-25-145.49 105.91-103c19-18.49 8.48-50.78-17.79-54.57zm-90.89 71l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z"
                  class="fill-yellow-300"
                />
                <path
                  d="M437.64 242.46l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z"
                  class="fill-yellow-200"
                />
              </svg>
            </span>
            <span>
              <span
                v-text="props.article.title"
                class="link-title"
                :class="{
                  'from-orange-300 to-orange-300': props.article.starred,
                  'from-blue-300 to-purple-300': !props.article.starred,
                }"
              ></span>
              <span
                v-if="props.article.starred"
                v-text="'Last update: ' + dateFormatted"
                class="updated-at"
              ></span>
            </span>
          </h2>
        </NuxtLink>
      </div>

      <p class="updated-at" v-if="!props.article.starred">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="h-3 fill-gray-300"
        >
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"
          />
        </svg>
        <span v-text="dateFormatted"></span>
      </p>

      <p
        v-if="props.article.excerpt && !props.article.starred"
        v-text="props.article.excerpt"
        class="excerpt"
      ></p>
    </div>
  </div>
</template>

<style scoped>
.article-container {
    @apply bg-gray-900 rounded-lg;
}

.article-container.starred {
    @apply p-4;
}

.article-container:not(.starred) {
    @apply px-8 py-4;
}

.bg-gradient {
    @apply px-[2px] py-[2px] bg-gradient-to-r from-gray-800 to-gray-800 rounded-[0.65rem] mt-2 lg:mt-4 mb-4;
}

.link-container {
    @apply inline-flex justify-between;
}

.link-title-container {
    @apply text-2xl flex content-center justify-center items-baseline gap-1 font-bold cursor-pointer;
}

.link-title {
    @apply text-transparent bg-clip-text bg-gradient-to-br;
}

.updated-at {
    @apply text-sm text-gray-300 mb-1 flex gap-1 items-center font-bold;
}

.excerpt {
    @apply break-words pb-2 text-base text-justify text-gray-400;
}
</style>