<template>
  <section class="destination pt-20">
    <h1 class="text-black font-semibold">{{ destination.name }}</h1>
    <div class="destination-details flex gap-10">
      <img
        class="w-80 object-contain shadow-xl"
        :src="`/images/${destination.image}`"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import sourceData from "@/data.json";
export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
