<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex bg-zinc-600 items-center justify-between p-4 md:p-6 font-light text-white rounded-b-md"
  >
    <h1>NEWS</h1>
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
    </div>
  </div>
</template>
