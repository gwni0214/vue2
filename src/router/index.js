import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ReferView from "../views/ReferView.vue";
import MovieView from "../views/MovieView.vue";
import YoutubeView from "../views/YoutubeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/port",
    name: "port",
    component: PortfolioView,
  },
  {
    path: "/refer",
    name: "refer",
    component: ReferView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
