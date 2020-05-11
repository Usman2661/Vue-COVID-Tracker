<template>
  <div>
    <v-row align="center">
      <v-col
        lg="6"
        offset-lg="3"
        md="9"
        offset-md="2"
        sm="12"
        xs="12"
        offset-xs="0"
      >
        <ve-histogram
          :data="this.dailyCountryRecords"
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
  computed: mapGetters(['dailyCountryRecords']),
};
</script>
<style lang="stylus" scoped></style>
