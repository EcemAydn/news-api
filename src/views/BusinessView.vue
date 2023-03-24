<script setup>
import Navbar from "../components/Navbar.vue";
import { useNewsStore } from "../stores/NewsStore";

const newsStore = useNewsStore();

newsStore.getApiBusiness();
</script>

<template>
  <div class="w-full h-full">
    <Navbar />
  </div>
</template>
