<template>
  <div class="select-dropdown" :class="{ 'select-dropdown--dark': isDark }">
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

<style></style>
