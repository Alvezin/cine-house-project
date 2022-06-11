import { makeFetch } from "@/services/axiosConfig";
import { types } from "./mutationTypes";
const { GET_DISCOVER_MOVIES } = types;
export default {
  state: () => ({
    discoverMovies: [],
  }),
  mutations: {
    GET_DISCOVER_MOVIES(state, payload) {
      state.discoverMovies = [...payload];
    },
  },
  actions: {
    async getDiscover({ commit }) {
      try {
        const req = await makeFetch.get(
          "/3/discover/movie?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=free"
        );
        commit(GET_DISCOVER_MOVIES, req.data.results);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
