import { createStore } from "vuex";
import client from "./client";
import movies from "./movies";
import movieDetails from "./movieDetails";
export default createStore({
  modules: {
    client,
    movies,
    movieDetails
  },
});
