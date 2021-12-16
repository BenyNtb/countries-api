<template>
  <div class="home">
    <filter-section />
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

<style l GridContainerang="scss">
.home {
  padding: 30px;
  background-color: hsl(207, 26%, 17%);
}
</style>

