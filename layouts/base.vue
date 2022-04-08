<template>
    <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Link rel="icon" type="image/x-icon" href="https://link.eu1.storjshare.io/juksqb32suvyvpdi7caat7ampkoa/personal-website%2Falpaca007.jpeg?wrap=0"></Link>
    </Head>
   <div class="bg-gray-100 min-h-screen">
       <div class="px-4 md:px-16 py-4" id="app-container">
           <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 gap-y-4 lg:mt-12">
               <div>
                   <Sidebar/>

               </div>
               <div class="xl:col-span-2 px-2 lg:px-0 " :class="{'row-start-1 lg:row-start-auto lg:mt-0 mb-8 lg:mb-0': route.path.startsWith('/blog') /*articleSelected || loadingArticle */}">
                   <slot />
               </div>
           </div>

           <!--<div class="py-24"></div>
           <History />



           <SideProjects /> -->
       </div>
   </div>
</template>

<script setup>
import '../assets/app.css'
import {useRoute} from "vue-router";
const route = useRoute()
</script>

<style scoped>

</style>