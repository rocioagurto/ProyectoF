<template>
  <div id="app">
    <!-- Titulo del Nabvar -->
    <navbar class="is-family-secondary is-size-1-mobile" :brand="'T I E N D I T A'" />
    <!-- Loading Modal -->
     <div class="modal" :class="{'is-active' : overlay}">
       <div class="modal-background " style="background: rgba(0,0,0,0.6)"></div>
        <div class="modal-content">
           <progress class="progress is-normal has-background-warning-dark" max="20">20%</progress>
        </div>
       </div>
       <transition name='slide-fade' mode="out-in">
      <router-view />
      </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import {mapState} from 'vuex'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState(['overlay'])
  }
}
</script>


<style lang="scss">
 body {
  background-color: hsla(0, 0%, 100%, 0.685);
}
.slide-fade-enter-active, .slide-fade-leave-active  {
  transition: all .5s ease;
}
 
.slide-fade-enter, .slide-fade-leave-to{
opacity: 0;
}
  

</style>