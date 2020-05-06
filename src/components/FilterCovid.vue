<template>
  <div>
    <v-row align="center">
      <v-col cols="4" offset-md="4">
        <v-select
          :items="countries"
          item-text="Country"
          item-value="slug"
          menu-props="auto"
          label="Select Country"
          hide-details
          single-line
        ></v-select>
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
  data() {
    return {
      country: null,
      countries: countries,
    };
  },
  methods: {
    ...mapActions(['getCountries']),
  },
  computed: mapGetters(['countries']),
  created() {
    this.getCountries();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
