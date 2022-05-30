<template>
  <main id="main">
    <TitleLayout name1="portfolio" name2="book" />
    <section className="port__cont">
      <div className="container">
        <div className="port__inner">
          <article className="port__item" v-for="port in ports" :key="port.id">
            <figure className="img">
              <a :href="port.link" target="_blank"
                ><img :src="port.image" :alt="port.title"
              /></a>
            </figure>
            <div className="text">
              <h3>{{ port.title }}</h3>
              <p>{{ port.category }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <ContactLayout />
  </main>
</template>
<script>
import TitleLayout from "@/components/TitleLayout.vue";
import ContactLayout from "@/components/ContactLayout.vue";
import { ref } from "vue";
export default {
  components: {
    TitleLayout,
    ContactLayout,
  },
  setup() {
    const ports = ref([]);

    const Portfolios = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://webstoryboy.github.io/dothome1/portfolio.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (ports.value = data.data.ports))
        .catch((error) => console.log("error", error));
    };
    setTimeout(() => {
      Portfolios();
    }, 2000);
    return {
      ports,
      Portfolios,
    };
  },
};
</script>

<style lang="scss" scoped>
.port__cont {
  background-color: var(--dark_bg);
}
.port__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.port__item {
  flex: 1 1 30%;
  margin: 1%;
  .text {
    padding: 1.4rem;
    background-color: #d0d0d0;
    h3 {
      color: var(--white);
      font-family: var(--main_font);
      font-size: 2.6rem;
      line-height: 1;
      padding-top: 0.2em;
      text-transform: uppercase;
    }
    p {
      color: var(--white);
      font-family: var(--sub_font);
    }
  }
}
</style>
