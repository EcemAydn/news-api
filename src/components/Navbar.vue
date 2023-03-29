<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { useNewsStore } from "../stores/NewsStore";
import { ChevronDown } from "lucide-vue-next";

defineProps({
  countryShow: {
    type: Boolean,
    default: false,
  },
});

const newsStore = useNewsStore();
const dropdownShow = ref(false);
const search = ref("");
const selectedCountry = ref(newsStore.selectedCountry);

function searchNews() {
  setTimeout(() => {
    newsStore.getApi(search.value);
    newsStore.getApiSports(search.value);
    newsStore.getApiBusiness(search.value);
  }, 2000);
}

function dropdown() {
  if (dropdownShow.value === false) {
    dropdownShow.value = true;
  } else {
    dropdownShow.value = false;
  }
}

function selectCountry(country) {
  selectedCountry.value = country;
  newsStore.setSelectedCountry(selectedCountry.value);
  dropdownShow.value = false;
}
</script>
<template>
  <div
    class="fixed z-10 grid grid-cols-3 w-full bg-gradient-to-b from-slate-900 items-center justify-between p-4 md:p-12 font-thin text-gray-300"
  >
    <div class="flex col-span-2">
      <h1 class="text-xl text-white">NEWS</h1>
      <input
        type="search"
        @keyup="searchNews"
        v-model="search"
        class="w-full border bg-transparent text-xs rounded-md outline-none md:p-1 mx-4 md:mx-8 lg:mx-16"
      />
    </div>
    <div
      class="flex text-xs md:text-lg gap-1 md:gap-2 lg:gap-8 md:justify-end items-center"
    >
      <RouterLink to="/" active-class="text-white font-normal">
        Home
      </RouterLink>
      <RouterLink to="/sports" active-class="text-white font-normal"
        >Sport
      </RouterLink>
      <RouterLink to="/business" active-class="text-white font-normal"
        >Business
      </RouterLink>
      <button
        v-if="!countryShow"
        @click="dropdown"
        class="relative flex items-center gap-1 focus:text-white"
      >
        <p>Country</p>
        <ChevronDown :size="20" />
        <div
          v-if="dropdownShow"
          class="absolute flex flex-col top-8 right-0 left-0 text-gray-400 p-4 pl-6 pr-6 bg-white shadow-md rounded-b-lg"
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
