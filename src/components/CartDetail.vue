<template>
  <div class="modal" v-bind:class="{'is-active':  showModal}">
    <div class="modal-background"></div>
      <div class="modal-card">
      <!-- Cabecera ventana modal -->
        <header class="modal-card-head">
          <p class="modal-card-title">Estos son tus productos</p>
          <button class="delete" aria-label="close" @click="showModal=false"></button>
        </header>
        <!-- Cuerdo de la ventana modal -->
        <section class="modal-card-body">
          <div>
            <ul>
             <li v-for="p in $store.getters.shoppingCart.list" :key="p.id">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <!-- imagem del producto-->
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="p.data.picture" alt="Placeholder image">
                      </figure>
                    </div>
                    <!-- Nombre y precio del producto en el carrito -->
                    <div class=" media-left media-right"> 
                      <p class="title is-5">{{ p.data.name }}</p>
                      <p class="subtitle is-6">CLP {{ p.data.price  * p.qty }}.-</p>
                    </div>
                    <!-- Valor del producto por la cantidad de productos -->
                    <p>
                      {{ p.qty }} x CLP {{ parseInt (p.data.price * p.qty )}} &nbsp;
                    </p>
                    <!-- Boton borrar producto del carrito -->
                    <button class="button has-background-danger	has-text-white is-small" @click="$store.dispatch('removeFromCart', p.id)">
                      <span class="icon is-small is-left">
                        <i class="mdi mdi-18px mdi-delete"></i>
                      </span>
                    </button>
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
              <p class="title is-4">Total: CLP {{ $store.getters.shoppingCart.total }}</p>
            </div>
            <div>
              <button  class="button has-background-grey-darker has-text-white :is-loading" @click="$store.dispatch('clearCart')">
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
        <!-- Content ... -->
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