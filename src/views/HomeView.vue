<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useNewsStore } from "../stores/NewsStore";

const newsStore = useNewsStore();
const randomUrl = ref("https://picsum.photos/200/100");
const randomUrl2 = ref("https://picsum.photos/900/700");
let selectedIndex = 1;

newsStore.getApi();

function next() {
  const selectedElement = document.getElementById(`slide-${selectedIndex}`);
  const slider = document.getElementById("slider");

  slider.scrollLeft = selectedElement.offsetLeft;
  selectedIndex += 1;

  if (selectedIndex >= newsStore.news.length) {
    selectedIndex = 0;
  }
}
function back() {
  const selectedElement = document.getElementById(`slide-${selectedIndex}`);
  const slider = document.getElementById("slider");

  slider.scrollLeft = selectedElement.offsetLeft;
  selectedIndex -= 1;

  if (selectedIndex === 0) {
    selectedIndex = 1;
  }
}
</script>

<template>
  <div class="w-full h-full">
    <Navbar />

    <div
      id="slider"
      class="w-full h-full flex items-center gap-6 flex-nowrap overflow-x-auto snap-x scroll-smooth px-6"
    >
      <img
        v-for="(newitem, index) in newsStore.news"
        :key="`slide-${index}`"
        :src="newitem.urlToImage === null ? randomUrl2 : newitem.urlToImage"
        alt="Photo"
        class="rounded-md h-[700px] flex-shrink-0 snap-center"
        :id="`slide-${index}`"
      />
    </div>

    <div class="flex items-center gap-4 p-2 justify-center">
      <button @click="back" class="bg-red-300 text-white text-xl p-2">
        Back
      </button>
      <button @click="next" class="bg-red-300 text-white text-xl p-2">
        Next
      </button>
    </div>

    <div class="w-full h-full grid md:grid-cols-3 gap-6 md:gap-10 p-8">
      <div
        v-for="newitem in newsStore.news"
        :key="newitem.id"
        class="flex flex-col w-full h-full gap-6 bg-white shadow-md p-4 rounded-md"
      >
        <div class="font-bold">
          {{ newitem.title }}
        </div>
        <div>
          <img
            :src="newitem.urlToImage === null ? randomUrl : newitem.urlToImage"
            alt="Photo"
            class="rounded-md"
          />
        </div>
        <div>
          {{
            newitem.description
              ? newitem.description
              : newitem.content
              ? newitem.content
              : "-"
          }}
          <a :href="newitem.url" class="font-bold text-blue-400">continue</a>
        </div>
      </div>
    </div>
  </div>
</template>
