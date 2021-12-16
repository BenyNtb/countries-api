<template>
  <div
    class="country-card"
    @click="goCountryDetailPage"  
  >
    <div class="country-card__imgbox">
      <img :src="countryData.flag" class="country-card__img" alt="flag" />
    </div>
    <div class="country-card__body">
      <h3 class="country-card__title">{{ countryData.name }}</h3>
      <li class="country-card__list-item">
        <span class="boldish">Population: </span>
        <span>{{ countryData.population | showDecimalPoint }}</span>
      </li>
      <li class="country-card__list-item">
        <span class="boldish">Région: </span>
        <span>{{ countryData.region }}</span>
      </li>
      <li class="country-card__list-item">
        <span class="boldish">Capitale: </span>
        <span>{{ countryData.capital }}</span>
      </li>
    </div>
    
  </div>
</template>

<script>
import filters from '../filters/index'
export default {
  name: 'PaysCard',
  props: {
    countryData: Object,
  },
  mixins: [filters],
  methods: {
    goCountryDetailPage() {
      this.$router.push({ path: `/${this.countryData.name}` })
    },
  },
}
</script>

<style>
.country-card {
  background-color: hsl(209, 23%, 22%);
  overflow: hidden;
  cursor: pointer;
}
.country-card__imgbox {
  height: 50%;
}
.country-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.country-card__body {
  padding: 20px;
  color: hsl(0, 0%, 100%);
}
.country-card__list-item {
  list-style: none;
  line-height: 2;
}



</style>
