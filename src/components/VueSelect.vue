<template>
  <div class="select-dropdown" >
    <vSelect
      v-model="region"
      :placeholder="placeholder"
      :options="options"
    ></vSelect>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapActions } from 'vuex'
export default {
  name: 'VueSelect',
  components: { vSelect },
  props: {
    options: Array,
    placeholder: String,
  },
  data() {
    return {
      region: this.options[0],
    }
  },
  methods: {
    ...mapActions(['filterRegion']),
  },
  watch: {
    region(val) {
      this.filterRegion(val)
    },
  },
}
</script>

<style>
.filters-container {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}
.filters-container__searchbox {
  width: 30%;
  color: hsl(0, 0%, 100%);
}
.filters-container__dropdown {
  width: 30%;
}
</style>
