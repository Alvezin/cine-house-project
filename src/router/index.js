import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import("../views/CadastroView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/main/:id",
    name: "main",
    component: () => import("../views/UserMainView.vue"),
    children: [
      {
        path: "painel",
        name: "painel",
        component: () => import("../views/UserIndexView.vue"),
      },
      {
        path: "movie/:movieId",
        name: "details",
        component: () => import("../views/MovieDetails.vue"),
        children: [
          {
            path: "detalhe",
            name: "detail",
            component: () => import("../views/DetailsView.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
