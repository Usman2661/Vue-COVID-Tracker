<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Covid 19"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <h1>Covid-19</h1>
      </div>

      <v-spacer></v-spacer>
      <!-- 
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <FilterCovid />
      <SummaryCards />
      <SummaryChart />
    </v-content>
  </v-app>
</template>

<script>
import FilterCovid from './components/FilterCovid.vue';
import SummaryCards from './components/SummaryCards.vue';
import SummaryChart from './components/SummaryChart.vue';

export default {
  name: 'App',
  components: {
    FilterCovid,
    SummaryCards,
    SummaryChart,
  },

  data: () => ({
    //
  }),
};
</script>
