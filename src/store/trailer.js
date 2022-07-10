import { makeFetch } from "@/services/axiosConfig";
import { trailerTypes } from "./mutationTypes";
const { SET_TRAILER } = trailerTypes;
export default {
  state: () => ({
    trailerData: [],
  }),
  mutations: {
    SET_TRAILER(state, payload) {
      state.trailerData = payload;
    },
  },
  actions: {
    async getTrailerData({ commit }, payload) {
      const req = await makeFetch.get(
        `/3/movie/${payload}/videos?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR`
      );
      commit(SET_TRAILER, req.data.results);
    },
  },
};
