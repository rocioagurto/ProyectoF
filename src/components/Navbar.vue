<template>
  <nav class="navbar has-background-danger pb-2 pt-2" role="navigation" aria-label="main navigation">
  <!-- style="background-color: lightpink;" -->
    <div class="container">
    <!-- Brand -->
    <div class="navbar-brand ">
      <router-link to="/" class="navbar-item has-text-white" style="font-size: 26px;">
        {{ brand }}
      </router-link>
      <a role="button"
      class="navbar-burger burger" aria-label="menu" aria-expanded="false"
      data-target="navbarMenu"
      :class="{'is-active' : displayMenu}"
      @click="displayMenu = !displayMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!--  -->
    <div id="navbarMenu" class="navbar-menu" :class="{'is-active' : displayMenu}" >
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <a data-testId='cart' class="navbar-item" @click="showCart">
            <span class="icon">
              <i class="mdi mdi-cart "></i>
              <span
              class="tag is-primary "
              v-if="$store.getters.shoppingCart.list.length > 0">
                {{ $store.getters.shoppingCart.list.length }}
              </span>
            </span>
          </a>
          <router-link v-if="!isLoggedIn" to="/login" class="navbar-item ">
            Login
          </router-link>
          <div v-else class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> <span class="icon">
                  <i class="mdi mdi-32px mdi-account has-text-white"></i>
                </span>Hola! {{getCurrentUser ? getCurrentUser.email : ''}}
            </a>

            <div class="navbar-dropdown">
              <router-link class="navbar-item color-letra" to="/create" @click="displayMenu = !displayMenu"> Crear producto</router-link>
              <a class="navbar-item color-letra">
                Preferencias
              </a>
              <a  class="navbar-item color-letra" @click="showCart">
                Ver Carrito
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item color-letra" @click="logout">
                Cerrar Sesión
              </a>
              
            </div>
          </div>
        </div>
      </div>
    <!--  -->
    </div> <!-- container -->
  </nav>
</template>


<script>
import Firebase from 'firebase';

export default {
  name: '',
  components: {},
  props: {
    brand: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      displayMenu: false,
    }
  },
  methods: {
    showCart(event) {
      event.preventDefault();
      this.$store.dispatch('updateShowCart', true)
    },
    logout() {
      Firebase.auth().signOut().then(()=>{
        this.$router.push('login')
        this.$store.dispatch('updateUser', false)
        
      })
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    getCurrentUser(){
       return Firebase.auth().currentUser ? Firebase.auth().currentUser : ''
    }
  },
  watch: {},
  created() {
   
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>



</style>