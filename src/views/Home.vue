<template>
  <div class="home">
    <FilterSection />
    <grid-container v-if="filteredCountries.length > 0">
      <PaysCard
        v-for="(country, i) in filteredCountries"
        :key="i"
        :countryData="country"
      />
    </grid-container>
  </div>
</template>

<script>
import PaysCard from '../components/PaysCard.vue'
import FilterSection from '../components/FilterSection.vue'
import GridContainer from '../components/GridContainer.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: { FilterSection, GridContainer, PaysCard },

  computed: {
    ...mapState(['countries', 'region']),
    filteredCountries() {
      if (this.region === 'All' || this.region === null) {
        return this.countries
      } else {
        return this.countries.filter(
          (country) => country.region === this.region
        )
      }
    },
  },
  methods: {
    ...mapActions(['getAllCountries', 'filterRegion']),
  },
  watch: {
    region(val) {
      if (val === null) {
        this.filterRegion(null)
      }
    },
  },
  mounted() {
    this.getAllCountries()
  },
}
</script>

<style >
.home {
  padding: 30px;
}
.grid-container {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
</style>

