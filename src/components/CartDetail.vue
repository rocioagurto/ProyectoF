<template>
  <div class="modal" v-bind:class="{'is-active':  showModal}">
    <div class="modal-background"></div>
      <div class="modal-card">
      <!-- Cabecera ventana modal -->
        <header class="modal-card-head">
          <p class="modal-card-title">Estos son tus productos</p>
          <button class="delete" aria-label="close" @click="showModal=false"></button>
        </header>
        <!-- Cuerpo de la ventana modal -->
        <section class="modal-card-body">
          <div>
            <ul>
             <li v-for="p in $store.getters.shoppingCart.list" :key="p.id">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <!-- imagem del producto-->
                    <div class="media-left">
                      <figure class="image is-48x48 is-32x32-size-mobile">
                        <img :src="p.data.picture" alt="">
                      </figure>
                    </div>
                    <!-- Nombre del producto en el carrito -->
                    <div class=" media-content is-size-7-mobile is-size-5-tablet"> 
                      <p class="title is-4 is-size-7-mobile">{{ p.data.name }}</p>
                    </div>
                    <!-- Valor del producto por la cantidad -->
                    <p class="media-content is-size-7-mobile is-size-5-tablet">
                      {{ p.qty }} x CLP {{ parseInt (p.data.price * p.qty )}} &nbsp;
                      <!-- Boton Basurero -->
                      <button class="button has-background-danger has-text-white is-small" @click="$store.dispatch('removeFromCart', p.id)">
                       <span class="icon is-small is-left">
                        <i class="mdi mdi-18px mdi-delete"></i>
                       </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <!-- Total -->
        <div>
          <div>
            <div class="is-pulled-right">
              <p class="title is-4 is-size-7-mobile">Total: CLP {{ $store.getters.shoppingCart.total }}</p>
            </div>
            <div>
              <button  class="  button has-background-grey-darker has-text-white" @click="$store.dispatch('clearCart')">
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
        <!-- Botones volver y finalizar compra -->
      </section>
      <footer class="modal-card-foot">
        <button class="button has-background-warning-dark has-text-white" @click="showModal=false">Volver</button>
        <button class="button has-background-warning-dark has-text-white">Finalizar Compra</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showModal: {
      get () { return this.$store.getters.showCart },
      set (val) { this.$store.dispatch('updateShowCart', val)}
    },
  },
}
</script>

<style lang="scss" scoped>
</style>