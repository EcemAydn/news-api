<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useNewsStore } from "../stores/NewsStore";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const newsStore = useNewsStore();
const route = useRoute();
const router = useRouter();
const randomUrl2 = ref("https://picsum.photos/900/700");
const newList = ref({
  title: "",
  img: "",
  description: "",
});

onMounted(async () => {
  await newsStore.getApiBusiness();
  if (route.params.id) {
    newList.value = newsStore.getNewsBusinessById(route.params.id);
    console.log(newList.value);
    console.log(route.params.id);
  } else {
    router.push("/");
    console.log("olmadı");
  }
});

newsStore.getApiBusiness();
</script>
<template>
  <Navbar countryShow="false" />
  <div class="w-full flex flex-col items-center justify-center p-8 bg-zinc-100">
    <div
      class="w-fit h-fit flex items-center p-8 justify-center bg-white rounded-md shadow-lg"
    >
      <div class="flex flex-col gap-8 relative">
        <img
          :src="newList.urlToImage === null ? randomUrl2 : newList.urlToImage"
          alt="Photo"
        />
        <div
          class="absolute z-20 text-white bottom-40 text-2xl bg-gradient-to-r from-black font-bold p-8"
        >
          {{ newList.title }}
        </div>
        <div>{{ newList.description }}</div>
        <a :href="newList.url" class="font-bold">Click for more news</a>
      </div>
    </div>
  </div>
  <Footer />
</template>
