<template>
  <div>
    <v-row align="center">
      <v-col
        lg="6"
        offset-lg="3"
        md="4"
        offset-md="4"
        sm="6"
        offset-sm="3"
        xs="12"
        offset-xs="0"
      >
        <div class="my-2">
          <v-btn @click="checkChartData()" large color="primary"
            >Check chart data</v-btn
          >
        </div>
        <ve-histogram
          :data="chartData"
          :settings="chartSettings"
        ></ve-histogram>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SummaryChart',
  data() {
    this.chartSettings = {
      metrics: ['dailyCases', 'dailyDeaths'],
      dimension: ['Date'],
    };
    return {
      chartData: {
        columns: ['Date', 'dailyCases', 'dailyDeaths'],
        rows: this.$store.state.dailyCountryRecords,
      },
    };
  },
  methods: {
    checkChartData() {
      console.log(this.dailyCountryRecords);
      console.log(this.chartData);
      this.chartData.rows = this.dailyCountryRecords;

      console.log(this.chartData.rows);
    },
  },
  computed: mapGetters(['dailyCountryRecords']),
  created() {
    // console.log(this.chartData);
    // console.log(this.chartData.rows);
    // console.log(this.dailyCountryRecords);
  },
};
</script>
<style lang="stylus" scoped></style>
