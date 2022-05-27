<template>
  <section className="main__cont">
    <div className="main__inner">
      <!-- <div v-for="list in texts" v-bind:key="list.text">{{ list.text }}</div> -->
      <div v-for="texts in lists" v-bind:key="texts.text">{{ texts.text }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { text: "we provide" },
        { text: "visual coding" },
        { text: "solutions" },
        { text: "for you webs" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main__cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--light_bg);

  .main__inner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: "Saol";
    color: var(--black);
    text-transform: uppercase;
  }
}
</style>
