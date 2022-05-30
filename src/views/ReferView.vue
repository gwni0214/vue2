<template>
  <div>
    <HeaderLayout />
    <ReferCont />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import ReferCont from "@/components/ReferCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    ReferCont,
  },
};
</script>
