<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useNewsStore } from "../stores/NewsStore";
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";

const newsStore = useNewsStore();
const randomUrl = ref("https://picsum.photos/300/100");
const randomUrl2 = ref("https://picsum.photos/900/700");
let selectedIndex = 1;

newsStore.getApiBusiness();

function next() {
  const selectedElement = document.getElementById(`slide-${selectedIndex}`);
  const slider = document.getElementById("slider");

  slider.scrollLeft = selectedElement.offsetLeft;
  selectedIndex += 1;

  if (selectedIndex >= newsStore.newsBusiness.length) {
    selectedIndex = 0;
  }
}
function back() {
  const selectedElement = document.getElementById(`slide-${selectedIndex}`);
  const slider = document.getElementById("slider");

  slider.scrollLeft = selectedElement.offsetLeft;
  selectedIndex -= 1;

  if (selectedIndex <= 0) {
    selectedIndex = 0;
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
        v-for="(newitem, index) in newsStore.newsBusiness"
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
          class="bg-black/30 text-white text-xl md:text-2xl lg:text-3xl p-2 md:p-4 lg:p-6 rounded-full"
        >
          <ChevronLeft />
        </button>
      </div>
      <div>
        <button
          @click="next"
          class="bg-black/30 text-white text-xl md:text-2xl lg:text-3xl p-2 md:p-4 lg:p-6 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>

    <div
      class="w-full bg-zinc-100 grid md:grid-cols-3 gap-6 md:gap-10 justify-around p-8"
    >
      <div
        v-for="newitem in newsStore.newsBusiness"
        :key="newitem.id"
        class="flex flex-col"
      >
        <div
          class="font-medium w-full md:h-44 lg:h-24 flex items-center pl-4 pr-4 bg-gray-200 text-black rounded-t-md"
        >
          {{ newitem.title }}
        </div>
        <div
          class="flex flex-col justify-between items-center md:items-baseline w-full h-full gap-2 p-4 bg-white shadow-md rounded-b-md font-light"
        >
          <div>
            <img
              :src="
                newitem.urlToImage === null ? randomUrl : newitem.urlToImage
              "
              alt="Photo"
              class="h-[300px]"
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
              :to="{ name: 'detailsBusiness', params: { id: newitem.myId } }"
              class="font-bold text-black"
              >Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
