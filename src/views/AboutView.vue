<template>
  <div>
    <HeaderLayout />
    <AboutCont />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import AboutCont from "@/components/AboutCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    AboutCont,
  },
};
</script>
