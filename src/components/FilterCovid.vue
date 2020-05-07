<template>
  <div>
    <v-row align="center">
      <v-col
        lg="4"
        offset-lg="4"
        md="4"
        offset-md="4"
        sm="6"
        offset-sm="3"
        xs="12"
        offset-xs="0"
      >
        <v-autocomplete
          v-on:change="changeCountry"
          :items="countries"
          item-text="Country"
          item-value="slug"
          menu-props="auto"
          label="Select Country"
          hide-details
          single-line
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col
        lg="2"
        offset-lg="5"
        md="4"
        offset-md="4"
        sm="6"
        offset-sm="3"
        xs="12"
        offset-xs="0"
      >
        <div style="display: flex">
          <h1>{{ this.countryName }} -</h1>
          <v-img
            height="50px"
            width="60px"
            :src="countryInfo.flag"
            style="display: block"
          >
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FilterCovid',
  data() {
    return {
      countryName: 'Global',
    };
  },
  methods: {
    ...mapActions(['getCountries', 'getSummary', 'getCountryInfo']),
    changeCountry(country) {
      this.countryName = country;

      let myCountry = this.countries.find((o) => o.Country === country);

      this.getSummary(country);
      this.getCountryInfo(myCountry.ISO2);
      this.countryFlag = this.countryInfo.flag;
    },
  },
  computed: {
    ...mapGetters(['countries', 'summary', 'countryInfo']),
  },
  created() {
    this.getCountries();
    this.getSummary();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
