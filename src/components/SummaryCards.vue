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
              <h2 cols="6" offset="4">{{ summary.Global.TotalConfirmed }}</h2>

              <!-- <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col> -->
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
              <h2 cols="6" offset="4">{{ summary.Global.TotalDeaths }}</h2>

              <!-- <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col> -->
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
              <h2 cols="6" offset="4">{{ summary.Global.TotalRecovered }}</h2>

              <!-- <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col> -->
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'SummaryCards',

  methods: {
    ...mapActions(['getSummary']),
  },
  computed: mapGetters(['summary']),
  created() {
    this.getSummary();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
