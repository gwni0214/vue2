<template>
  <div>
    <HeaderLayout />
    <ContactMenu />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import ContactMenu from "@/components/ContactMenu.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    ContactMenu,
  },
};
</script>
