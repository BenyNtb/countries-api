<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__logo">Where in the world?</router-link>
  </nav>
</template>

<script>


export default {

name: 'Navbar',
data() {
return {}
},
}
</script>

<style>
.navbar {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    background-color: hsl(207, 26%, 17%);
}
.navbar__theme {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.navbar span {
    margin-left: 5px;
}

</style>
