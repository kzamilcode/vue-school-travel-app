<template>
  <div class="nav text-white p-8 bg-[#253545] font-Poppins">
    <RouterLink class="mr-5 pb-1 inline-block" to="/">Home</RouterLink>
    <RouterLink class="mr-5 pb-1 inline-block" to="/jamaica"
      >Jamaica</RouterLink
    >
    <RouterLink class="mr-5 pb-1 inline-block" to="/brazil">Brazil</RouterLink>
    <RouterLink class="mr-5 pb-1 inline-block" to="/panama">Panama</RouterLink>
    <RouterLink class="mr-5 pb-1 inline-block" to="/hawaii">Hawaii</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.nav a.router-link-active {
  border-bottom: 2px solid #fff;
}
</style>
