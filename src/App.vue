<template>

  <div id="app">
    <navbar class="is-family-secondary is-size-1-mobile" :brand="'T I E N D I T A'" />
    <router-view />
    <Footer />
  </div>

</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    },
  }
</script>


<style lang="scss">
body {
  background-color: rgba(245, 245, 245, 0.774);
}
</style>