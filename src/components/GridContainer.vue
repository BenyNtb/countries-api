<template>
  <div class="grid-container">
    <slot></slot>
  </div>
</template>

<script>
import PaysCard from '../components/PaysCard.vue'
export default {
  name: 'GridContainer',
  components: { PaysCard },
}
</script>

<style>
.grid-container {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
</style>
