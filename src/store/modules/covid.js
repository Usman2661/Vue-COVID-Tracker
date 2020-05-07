import axios from 'axios';

const state = {
  summary: {},
  countries: [],
  countryInfo: {},
};

const getters = {
  summary: (state) => state.summary,
  countries: (state) => state.countries,
  countryInfo: (state) => state.countryInfo,
};

const actions = {
  async getSummary({ commit }, byCountry) {
    try {
      const response = await axios.get('https://api.covid19api.com/summary');

      if (byCountry) {
        const summaryData = response.data.Countries;

        let summary = summaryData.find((o) => o.Country === byCountry);

        console.log(summary);
        commit('setSummary', summary);
      } else {
        commit('setSummary', response.data.Global);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async getCountries({ commit }) {
    try {
      const response = await axios.get('https://api.covid19api.com/countries');

      const countries = response.data;

      countries.sort(function(a, b) {
        return a.Country.localeCompare(b.Country);
      });

      commit('setCountries', countries);
    } catch (err) {
      console.log(err);
    }
  },
  async getCountryInfo({ commit }, ISO) {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${ISO}`
      );

      const countryData = response.data;
      commit('setCountryInfo', countryData);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  setSummary: (state, summary) => (state.summary = summary),
  setCountries: (state, countries) => (state.countries = countries),
  setCountryInfo: (state, countryInfo) => (state.countryInfo = countryInfo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
