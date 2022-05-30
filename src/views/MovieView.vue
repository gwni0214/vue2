<template>
  <div>
    <HeaderLayout />
    <MovieCont />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import MovieCont from "@/components/MovieCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    MovieCont,
  },
};
</script>
