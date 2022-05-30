<template>
  <main id="main">
    <TitleLayout name1="movie" name2="book" />
    <ContactLayout />
  </main>
</template>
<script>
import TitleLayout from "@/components/TitleLayout.vue";
import ContactLayout from "@/components/ContactLayout.vue";
export default {
  components: {
    TitleLayout,
    ContactLayout,
  },
};
</script>
