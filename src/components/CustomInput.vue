<template>
  <div class="custom-input">
    <div
      class="custom-input__search-icon"
    >
    </div>
    <input
      class="custom-input__field"
      v-model="keyword"
      :placeholder="placeholder"
      :type="type"
      :value="keyword"
    />
    <div
      class="custom-input__close-icon"
      @click="clearSearch"
    >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CustomInput',
  props: {
    placeholder: String,
    type: String,
  },
  data() {
    return {
      keyword: null,
      timeoutQuery: null,
    }
  },
  methods: {
    ...mapActions(['searchCountries', 'getAllCountries']),
    clearSearch() {
      this.keyword = null
    },
    // demo(value) {
    //   console.log(value)
    // },
  },
  // handle search when user stops typing
  watch: {
    keyword(query) {
      if (this.timeoutQuery) {
        clearTimeout(this.timeoutQuery)
      }
      if (query) {
        this.timeoutQuery = setTimeout(() => this.searchCountries(query), 300)
      } else {
        // if query is empty get all contries
        this.timeoutQuery = setTimeout(() => this.getAllCountries())
      }
    },
  },
}
</script>

<style>

</style>
