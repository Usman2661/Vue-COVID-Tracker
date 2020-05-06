import axios from 'axios';

const state = {
  summary: {},
};

const getters = {
  summary: (state) => state.summary,
};

const actions = {
  async getSummary({ commit }) {
    try {
      const response = await axios.get('https://api.covid19api.com/summary');
      console.log(response.data);
      commit('setSummary', response.data);
    } catch (err) {
      console.log(err);
    }
  },

  //   async getGlobalSummary({ commit }) {
  //     try {
  //       const response = await axios.get('https://api.covid19api.com/summary');
  //       console.log(response.data);
  //       commit('setSummary', response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
};

const mutations = {
  setSummary: (state, summary) => (state.summary = summary),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
