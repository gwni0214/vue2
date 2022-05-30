<template>
  <div>
    <HeaderLayout />
    <YoutubeCont />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import YoutubeCont from "@/components/YoutubeCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    YoutubeCont,
  },
};
</script>
