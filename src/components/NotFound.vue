<template>
  <div class="container columns  is-multiline is-centered mt-6">
    <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
      <img class="mt-6" src="https://icons8.com/vue-static/landings/animated-icons/icons/neutral/neutral.gif" alt="">
      <p class="is-size-1 has-text-black mt-3">404</p>
      <p class="is-size-5 has-text-grey"> Not found</p>
      <p class="is-size-6 has-text-grey">The requested URL was not found on this server.</p>
      <button class="button has-background-warning-dark mt-6"><router-link class="has-text-white" to="/">Volver al Home</router-link></button> 
    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style lang="scss" scoped>
.container{
  text-align: center;
  height: 30rem;
  margin: 0 auto;
}
img {
  width: 80px;
}
</style>