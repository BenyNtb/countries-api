<template>
  <div id="app" class="app-wrapper">
    <navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
