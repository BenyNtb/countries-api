<template>
  <div class="detail-card" v-if="countryData">
    <div class="detail-card__imgbox">
      <img
        :src="countryData.flag"
        :alt="countryData.name"
        class="detail-card__img"
      />
    </div>
    <div class="detail-card__body">
      <div class="detail-card__title">{{ countryData.name }}</div>
      <div
        class="detail-card__grid-container"
      >
        <div class="detail-card__left-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Native Name:</span>
            <span> {{ countryData.nativeName }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Population:</span>
            <span> {{ countryData.population | showDecimalPoint }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Region:</span>
            <span> {{ countryData.region }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Sub Region:</span>
            <span> {{ countryData.subregion }}</span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Capital:</span>
            <span> {{ countryData.capital }}</span>
          </li>
        </div>
        <div class="detail-card__right-grid">
          <li class="detail-card__list-item">
            <span class="boldish">Top Level Domain:</span>
            <span> {{ countryData.topLevelDomain[0] }} </span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Currencies:</span>
            <span>
              {{ currencies }}
            </span>
          </li>
          <li class="detail-card__list-item">
            <span class="boldish">Languages:</span>
            <span> {{ languages }}</span>
          </li>
        </div>
      </div>
      <div class="detail-card__footer">
        <div class="boldish">Border Countries:</div>
        <div class="detail-card__border-countries">
          <div
            class="detail-card__border-country"
            v-for="(bc, i) in borderCountries"
            :key="i"
          >
            {{ bc }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading v-else />
</template>

<script>
import filters from '../filters/index'
import { mapState } from 'vuex'
export default {
  name: 'PaysDetailsCard',
  props: {
  countryData: Object,
  },
  mixins: [filters],
  computed: {
    ...mapState(['countries']),
    currencies() {
      return this.countryData.currencies
      .map((currency) => currency.name)
      .join(', ')
  },
  languages() {
      return this.countryData.languages
      .map((language) => language.name)
      .join(', ')
  },
  borderCountries() {
      const neighbors = []
      this.countryData.borders?.forEach((countryCode) => {
      const newNeighbor = this.countries.find(
          (country) => country.alpha3Code === countryCode
      )
      neighbors.push(newNeighbor.name)
      })
      return neighbors
  },
  },
}
</script>

<style>
.detail-card {
    display: grid;
    column-gap: 30px;
    grid-template-columns: 4fr 5fr;
}
.detail-card__imgbox {
    width: 100%;
}
.detail-card__img {
    width: 100%;
}
.detail-card__body {
    display: grid;
    align-items: center;
}
.detail-card__title {
    font-size: 30px;
}
.detail-card__grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-bottom: 10px;
}
.detail-card__list-item {
    list-style: none;
    line-height: 1.8;
    color: hsl(0, 0%, 100%);
}
.detail-card__footer {
    display: grid;
    grid-template-columns: auto auto;
}
.detail-card__border-countries {
    margin-left: 15px;
    display: inline;
}
.detail-card__border-country {
    margin-bottom: 10px;
    margin-right: 7px;
    display: inline-block;
    padding: 5px 25px;
    border-radius: 3px;
}

</style>
