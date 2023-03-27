<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { useNewsStore } from "../stores/NewsStore";

const newsStore = useNewsStore();
const dropdownShow = ref(false);
const selectedCountry = ref("us");
let timeout = null;
const search = ref("");

function searchNews() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    newsStore.searchNews(search.value.toLowerCase());
  }, 500);
}

function dropdown() {
  dropdownShow.value = true;
  setTimeout(() => {
    dropdownShow.value = false;
  }, 3000);
}

function selectCountry(country) {
  selectedCountry.value = country;
  newsStore.getApi(selectedCountry.value);
}
</script>
<template>
  <div
    class="fixed z-10 flex w-full bg-gradient-to-b from-black items-center justify-between p-4 md:p-12 font-light text-white"
  >
    <h1 class="text-xl">NEWS</h1>
    <input
      type="search"
      @keyup="searchNews"
      v-model="search"
      class="w-full border bg-transparent rounded-md outline-none p-1 mt-2 mx-16"
    />
    <div class="flex gap-8">
      <RouterLink
        to="/"
        active-class="border-red-300 text-red-300"
        class="border-b-2 p-2"
        >Home
      </RouterLink>
      <RouterLink
        to="/sports"
        active-class="border-red-300 text-red-300"
        class="border-b-2 p-2"
        >Sport
      </RouterLink>
      <RouterLink
        to="/business"
        active-class="border-red-300 text-red-300"
        class="border-b-2 p-2"
        >Business
      </RouterLink>
      <button
        @click="dropdown"
        class="w-full relative focus:text-red-300 border-b-2 p-2"
      >
        Country
        <div
          v-if="dropdownShow"
          class="absolute top-10 right-0 text-red-300 p-4 pl-6 pr-6 bg-white shadow-md rounded-b-lg"
        >
          <button @click="selectCountry('us')" class="hover:font-black">
            US
          </button>
          <button @click="selectCountry('tr')" class="hover:font-black">
            TR
          </button>
          <button @click="selectCountry('fr')" class="hover:font-black">
            FR
          </button>
        </div>
      </button>
    </div>
  </div>
</template>
