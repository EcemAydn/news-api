<script setup>
import Navbar from "../components/Navbar.vue";
import { useNewsStore } from "../stores/NewsStore";

const newsStore = useNewsStore();

newsStore.getApi();
</script>

<template>
  <div class="w-full h-full relative">
    <Navbar />
    <div
      v-for="newitem in newsStore.news"
      :key="newitem.id"
      class="w-full h-full flex gap-6 relative"
    >
      <img
        :src="newitem.urlToImage"
        alt="Photo"
        class="border-8 absolute rounded-md top-8 flex blur-sm"
      />
    </div>
    <div
      class="w-full h-full grid md:grid-cols-3 gap-6 md:gap-10 p-8 relative bottom-0 top-96"
    >
      <div
        v-for="newitem in newsStore.news"
        :key="newitem.id"
        class="flex flex-col w-full h-full gap-6 bg-white shadow-md p-4 rounded-md"
      >
        <div class="font-bold">
          {{ newitem.title }}
        </div>
        <div>
          <img :src="newitem.urlToImage" alt="Photo" class="rounded-md" />
        </div>
        <div>
          {{ newitem.description }}
          <a :href="newitem.url" class="font-bold text-blue-400">continue</a>
        </div>
      </div>
    </div>
  </div>
</template>
