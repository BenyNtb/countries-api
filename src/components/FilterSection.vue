<template>
  <div class="filters-container">
      <custom-input placeholder="Search for a country ..." type="text" />
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue'

export default {
  name: 'FilterSection',
  components: {

    CustomInput,
  },
}
</script>

<style></style>
