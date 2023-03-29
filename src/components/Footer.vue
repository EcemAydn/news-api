<script setup>
import { Twitter } from "lucide-vue-next";
import { Facebook } from "lucide-vue-next";
import { Instagram } from "lucide-vue-next";
import { Phone } from "lucide-vue-next";
import { Mail } from "lucide-vue-next";
</script>
<template>
  <div class="bg-white p-8 grid md:grid-cols-3 gap-8 text-black font-light">
    <div class="md:col-span-2 text-xs md:text-base">
      <h1
        class="bg-gradient-to-r from-white text-base md:text-lg text-black font-black"
      >
        News
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero
        facilis fuga voluptatibus quasi libero suscipit voluptatum explicabo non
        quo debitis, voluptates quae quos amet sapiente delectus porro.
      </p>
      <p class="pt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at?
      </p>
    </div>
    <div class="flex gap-6 items-center justify-center">
      <a href="#" class="text-blue-500"><Twitter /></a>
      <a href="#" class="text-blue-600"><Facebook /></a>
      <a href="#" class="text-pink-500"><Instagram /></a>
      <a href="#" class="text-green-500"><Phone /></a>
      <a href="#" class="text-blue-400"><Mail /></a>
    </div>
  </div>
  <div
    class="w-full flex items-center text-xs md:text-base justify-center bg-gray-100 text-black font-thin"
  >
    ecembeyzaaydin
  </div>
</template>
