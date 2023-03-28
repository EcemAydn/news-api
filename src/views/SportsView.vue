<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useNewsStore } from "../stores/NewsStore";

const newsStore = useNewsStore();
const randomUrl = ref("https://picsum.photos/300/100");
const randomUrl2 = ref("https://picsum.photos/900/700");
let selectedIndex = 1;

newsStore.getApiSports();

function next() {
  const selectedElement = document.getElementById(`slide-${selectedIndex}`);
  const slider = document.getElementById("slider");

  slider.scrollLeft = selectedElement.offsetLeft;
  selectedIndex += 1;

  if (selectedIndex >= newsStore.newsSports.length) {
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
  <div class="w-full h-full bg-zinc-100">
    <Navbar />

    <div
      id="slider"
      class="w-full h-full flex items-center gap-6 flex-nowrap pt-8 overflow-x-auto snap-x scroll-smooth px-6"
    >
      <img
        v-for="(newitem, index) in newsStore.newsSports"
        :key="`slide-${index}`"
        :src="newitem.urlToImage === null ? randomUrl2 : newitem.urlToImage"
        alt="Photo"
        class="rounded-md h-[700px] flex-shrink-0 snap-center"
        :id="`slide-${index}`"
      />
    </div>

    <div
      class="flex items-center justify-between gap-4 p-2 w-full absolute bottom-16 top-16"
    >
      <div>
        <button
          @click="back"
          class="bg-black/30 text-white text-3xl p-8 rounded-full"
        >
          ←
        </button>
      </div>
      <div>
        <button
          @click="next"
          class="bg-black/30 text-white text-3xl p-8 rounded-full"
        >
          →
        </button>
      </div>
    </div>

    <div
      class="w-full bg-zinc-100 grid md:grid-cols-3 gap-6 md:gap-10 justify-around p-8"
    >
      <div
        v-for="newitem in newsStore.newsSports"
        :key="newitem.id"
        class="flex flex-col justify-around w-full h-full gap-2 bg-white shadow-md p-4 rounded-md"
      >
        <div class="font-bold">
          {{ newitem.title }}
        </div>
        <div>
          <img
            :src="newitem.urlToImage === null ? randomUrl : newitem.urlToImage"
            alt="Photo"
            class="rounded-md h-[300px]"
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
        </div>
        <div>
          <router-link
            :to="{ name: 'detailsSport', params: { id: newitem.myId } }"
            class="font-bold text-black"
            >Details
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
