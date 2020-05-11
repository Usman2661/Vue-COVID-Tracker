import axios from 'axios';

const state = {
  summary: {},
  countries: [],
  countryInfo: {},
  dailyCountryRecords: {},
};

const getters = {
  summary: (state) => state.summary,
  countries: (state) => state.countries,
  countryInfo: (state) => state.countryInfo,
  dailyCountryRecords: (state) => state.dailyCountryRecords,
};

const actions = {
  async getSummary({ commit }, byCountry) {
    try {
      const response = await axios.get('https://api.covid19api.com/summary');

      if (byCountry) {
        const summaryData = response.data.Countries;

        let summary = summaryData.find((o) => o.Country === byCountry);

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

  async getdailyCountryRecords({ commit }, byCountry) {
    try {
      const response = await axios.get(
        `https://api.covid19api.com/total/dayone/country/${byCountry}`
      );

      const countryRecordsData = response.data;

      const dailyCountryRecordsData = countryRecordsData.map(
        (record, index, allRecords) => {
          const previous = allRecords[index - 1] || {
            Confirmed: 0,
            Deaths: 0,
          };

          return {
            ...record,
            dailyCases: record.Confirmed - previous.Confirmed,
            dailyDeaths: record.Deaths - previous.Deaths,
          };
        }
      );

      const chartData = {
        columns: ['Date', 'dailyCases', 'dailyDeaths'],
        rows: dailyCountryRecordsData,
      };

      commit('setDailyCountryRecords', chartData);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  setSummary: (state, summary) => (state.summary = summary),
  setCountries: (state, countries) => (state.countries = countries),
  setCountryInfo: (state, countryInfo) => (state.countryInfo = countryInfo),
  setDailyCountryRecords: (state, dailyCountryRecords) =>
    (state.dailyCountryRecords = dailyCountryRecords),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
