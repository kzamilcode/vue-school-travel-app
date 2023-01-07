<template>
  <div class="All Destinations"></div>
  <div class="destinations flex gap-4 p-10">
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
    >
      <h2 class="pb-2">{{ destination.name }}</h2>
      <img
        class="shadow-md border-2 border-black"
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      />
    </RouterLink>
  </div>
</template>

<script>
import sourceData from "../data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
