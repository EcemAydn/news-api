<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { useNewsStore } from "../stores/NewsStore";

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
  newsStore.getApi(search.value);
  newsStore.getApiSports(search.value);
  newsStore.getApiBusiness(search.value);
}

function dropdown() {
  dropdownShow.value = true;
  setTimeout(() => {
    dropdownShow.value = false;
  }, 3000);
}
function selectCountry(country) {
  selectedCountry.value = country;
  newsStore.setSelectedCountry(selectedCountry.value);
}
</script>
<template>
  <div
    class="fixed z-10 grid lg:grid-cols-3 w-full bg-gradient-to-b from-black items-center justify-between p-4 md:p-12 font-thin text-gray-300"
  >
    <div class="flex col-span-2">
      <h1 class="text-xl text-white">NEWS</h1>
      <input
        type="search"
        @keyup="searchNews"
        v-model="search"
        class="w-full border bg-transparent text-xs rounded-md outline-none md:p-1 mx-2 md:mx-8 lg:mx-16"
      />
    </div>
    <div class="flex text-xs md:text-lg gap-2 md:gap-8 md:justify-end">
      <RouterLink to="/" active-class="text-white font-normal" class="p-2">
        Home
      </RouterLink>
      <RouterLink to="/sports" active-class="text-white font-normal" class="p-2"
        >Sport
      </RouterLink>
      <RouterLink
        to="/business"
        active-class="text-white font-normal"
        class="p-2"
        >Business
      </RouterLink>
      <button
        v-if="!countryShow"
        @click="dropdown"
        class="relative focus:text-white p-2"
      >
        Country ↓
        <div
          v-if="dropdownShow"
          class="absolute flex flex-col top-10 right-4 text-gray-400 p-4 pl-6 pr-6 bg-white shadow-md rounded-b-lg"
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
