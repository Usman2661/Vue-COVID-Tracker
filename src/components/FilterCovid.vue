<template>
  <div>
    <v-row align="center">
      <v-col cols="4" offset-md="4">
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
      <v-col cols="4" offset-md="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FilterCovid',
  methods: {
    ...mapActions(['getCountries', 'getSummary']),
    changeCountry(country) {
      this.getSummary(country);
    },
  },
  computed: {
    ...mapGetters(['countries', 'summary']),
  },
  created() {
    this.getCountries();
    this.getSummary();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
