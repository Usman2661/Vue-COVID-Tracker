<template>
  <div>
    <v-row no-gutters>
      <v-col lg="2" offset-lg="3" md="3" offset-md="2" sm="4" xs="12">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Cases</v-list-item-title
              >
              <v-list-item-subtitle
                >Patients confirmed with COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h1 style="margin-left:25%">
                <animated-number
                  :value="summary.TotalConfirmed"
                  :formatValue="formatCases"
                  :duration="300"
                />
              </h1>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="2" md="3" sm="4" xs="12">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Deaths</v-list-item-title
              >
              <v-list-item-subtitle
                >Patients Died from COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h1 style="margin-left:25%">
                <animated-number
                  :value="summary.TotalDeaths"
                  :formatValue="formatCases"
                  :duration="500"
                />
              </h1>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="2" md="3" sm="4" xs="12">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Total Recovered</v-list-item-title
              >
              <v-list-item-subtitle
                >Patients Recovered from COVID-19</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <h1 style="margin-left:25%">
                <animated-number
                  :value="summary.TotalRecovered"
                  :formatValue="formatCases"
                  :duration="500"
                />
              </h1>
              <h3></h3>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';
import numFormat from 'vue-filter-number-format';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SummaryCards',
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value: 1000,
    };
  },
  methods: {
    ...mapActions(['getSummary']),
    formatCases(value) {
      const myValue = value.toFixed(0);
      return myValue.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  computed: mapGetters(['summary']),
  created() {},
};
</script>
