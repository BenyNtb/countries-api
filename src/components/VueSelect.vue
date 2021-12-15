<template>
  <div class="select-dropdown">
    <vSelect
      v-model="region"
      :placeholder="placeholder"
      :options="options"
    ></vSelect>
  </div>
</template>

<script>
import vSelect from 'vue-select'
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
}
</script>

<style></style>
