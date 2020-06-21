<template>
  <nav class="navbar is-transparent has-background-warning-dark pb-2 pt-2">
    <div class="container">
    <!-- Brand -->
    <div class="navbar-brand ">
      <router-link to="/" class="navbar-item has-text-white" style="font-size: 26px;">
        {{ brand }}
      </router-link>
      <a role="button"
      class="navbar-burger burger " aria-label="menu" aria-expanded="false"
      data-target="navbarMenu"
      :class="{'is-active' : displayMenu}"
      @click="displayMenu = !displayMenu">
        <span class="has-text-white" aria-hidden="true"></span>
        <span class="has-text-white " aria-hidden="true"></span>
        <span class="has-text-white " aria-hidden="true"></span>
      </a>
    </div>
    <!--  -->
    <div id="navbarMenu" class="navbar-menu " :class="{'is-active' : displayMenu}" >
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <a data-testId='cart' class="navbar-item carrito has-text-white" @click="showCart">
            <span class="icon">
              <i class="mdi mdi-cart "></i>
              <span
              class="tag has-background-grey-dark	has-text-white"
              v-if="$store.getters.shoppingCart.list.length > 0">
                {{ $store.getters.shoppingCart.list.length }}
              </span>
            </span>
          </a>
          <router-link v-if="!isLoggedIn" to="/login" class="navbar-item has-text-white">
            Login
          </router-link>
          <div v-else class="navbar-item has-dropdown is-hoverable" >
            <a class="navbar-link has-text-white "> 
               <p class="usuario"><i class="mdi mdi-32px mdi-account"></i> Hola! {{getCurrentUser ? getCurrentUser.email : ''}}</p> 
            </a>

            <div class="navbar-dropdown" style="hover:background:#000">
              <router-link class="navbar-item " to="/create" @click="displayMenu = !displayMenu"> Crear producto</router-link>
              <router-link class="navbar-item " to="/nosotros">Nosotros</router-link>
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

@media screen and (max-width: 1023px) {
 .navbar-end {
  font-size: 0.8rem;
  color: rgb(255, 255, 255);
  }
  .mdi-cart, .navbar-link p{
  color: rgb(255, 255, 255);
  font-size: 16px;
  }

  .mdi-cart:hover, .navbar-link:hover p{
    color: rgb(255, 255, 255);
    font-size: 18px;
  }
  .navbar a{
      color: rgb(255, 255, 255);
    padding-left: 1rem;
    font-size: 14px;
  }
  .navbar a:hover{
    background: rgba(0, 0, 0, 0.37);
    color: #fff;
    font-size: 1.1rem
  }
  .navbar-menu{
    background: hsl(48, 100%, 29%);
  }
}


</style>