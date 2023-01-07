<template>
  <TheNavigationVue />
  <div class="bg-[#ddd] h-screen">
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import TheNavigationVue from "./components/TheNavigation.vue";
export default {
  components: { TheNavigationVue },
};
</script>

<style scoped></style>
