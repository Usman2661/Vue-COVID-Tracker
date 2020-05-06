<template>
  <div>
    <h1>Filter data by country</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FilterCovid',
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
