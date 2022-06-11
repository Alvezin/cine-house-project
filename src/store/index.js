import { createStore } from "vuex";
import client from "./client";
import movies from "./movies";
export default createStore({
  modules: {
    client,
    movies,
  },
});
