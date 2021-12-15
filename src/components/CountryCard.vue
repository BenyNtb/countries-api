<template>
  <div
    class="country-card"  
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
export default {
  name: 'CountryCard',
  props: {
    countryData: Object,
  },
}
</script>

<style>

.country-card__img{
  height: 100px;
}
</style>
