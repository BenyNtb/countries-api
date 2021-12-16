<template>
  <div class="country-detail">
    <button
      class="country-detail__btn"
      :class="{ 'country-detail__btn--dark': isDark }"
      @click="goBack"
    >
      <back-icon />
      <span class="country-detail__btn-text">Go Back</span>
    </button>
    <PaysDetailsCard :countryData="countryData" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PaysDetailsCard from '../components/PaysDetailsCard.vue'
export default {
    components: { PaysDetailsCard },
    name: 'PaysDetails',

    computed: {
    ...mapState(['isDark', 'countries']),
    countryData() {
    return this.countries.find(
        (country) => country.name === this.$route.params.country
    )
    },
},
    methods: {
    ...mapActions(['getAllCountries']),
    goBack() {
    this.$router.push({ path: '/' })
    },
},
    mounted() {
    this.getAllCountries()
},
}
</script>

<style>
.country-detail {
    margin: 50px;
}
.country-detail__btn {
    display: flex;
    align-items: center;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    background-color: white;
    margin: 50px 0;
}
.country-detail__btn-text {
    margin-left: 5px;
}


</style>
