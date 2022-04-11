<script setup>
const props = defineProps(["href"])
</script>
<template>
    <span class="container">
        <NuxtLink :href="href?href:'/'" class="button gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
            <span>Articles list</span>
        </NuxtLink>
    </span>
</template>

<style scoped>

.container {
    @apply inline-flex py-[2px] px-[2px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2;
}

.button {
    @apply inline-flex bg-gradient-to-r from-white to-white text-gray-700 fill-gray-700 transition transition-all duration-100 content-center py-1 px-4 rounded-full font-bold;
}

.button span {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600;
}

.button svg {
    @apply fill-blue-600;
}

.button:hover {
    @apply bg-gradient-to-r from-blue-600 to-purple-600;
}

.button:hover span {
    @apply text-white;
}

.button:hover svg {
    @apply fill-white;
}

</style>