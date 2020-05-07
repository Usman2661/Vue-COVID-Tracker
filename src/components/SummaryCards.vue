<template>
  <div>
    <v-row no-gutters>
      <v-col md="2" offset-md="3" sm="2" offset-sm="3" xs="12">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Cases</v-list-item-title
              >
              <v-list-item-subtitle
                >Patient confirmed with COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h2 cols="6" offset="4">{{ summary.TotalConfirmed }}</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2" sm="2" xs="12">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Deaths</v-list-item-title
              >
              <v-list-item-subtitle
                >Patient Died from COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h2 cols="6" offset="4">{{ summary.TotalDeaths }}</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2" sm="2" xs="12">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Recovered</v-list-item-title
              >
              <v-list-item-subtitle
                >Patient Recovered from COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h2 cols="6" offset="4">{{ summary.TotalRecovered }}</h2>
              <h3></h3>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SummaryCards',
  data() {
    return {
      value: 1000,
    };
  },
  methods: {
    ...mapActions(['getSummary']),
  },
  computed: mapGetters(['summary']),
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
