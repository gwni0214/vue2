<template>
  <div>
    <HeaderLayout />
    <PortfolioCont />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import PortfolioCont from "@/components/PortfolioCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    PortfolioCont,
  },
};
</script>
