<template>
  <div class="container">
    <!-- Header -->
    <section class="hero is-primary is-light is-bold mt-3" style="background: hsl(171, 100%, 41%)">
      <div class="hero-body ">
        <div class="container">
          <div style="display: inline-block;">
            <h1 class="title">
              Nuestros Productos
            </h1>
            <h2 class="subtitle">
              Moda a tu alcance
            </h2>
          </div>
          <div class="is-pulled-right" style="display: inline-block;">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="text" placeholder="" v-model="search">
                <span class="icon is-small is-left">
                  <i class="mdi mdi-magnify"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="columns is-multiline  mt-2">
      <div class="column is-12-mobile is-6-tablet is-4-desktop" v-for="p in computedProductList" :key="p.id">
        <!-- Cards -->
        <div class="card cards-productos has-equal-height ">
          <div class="image-card">
            <div class="image has-spacing image  is-square">
              <img alt="product logo" :src="p.data.picture">
            </div>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title is-size-5">{{ p.data.name }}</h3>
              <p class="subtitle is-size-6 ">CLP {{parseInt (p.data.price * p.qty)}}.-</p>
              <div class="descripcion">
              <p class="is-size-6">{{p.data.description}}</p>
              </div>
              <div class="counter">
                <button @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button @click="incrQty(p.id)"><i class="mdi mdi-plus"></i></button>
              </div>
              <button @click="addToCart(p)" class="button is-pulled-right is-primary"><i class="mdi mdi-cart"></i>
              </button>
              <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
      </div> <!-- End Item  -->
    </div>
    <!--  -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
      search: '',
    }
  },
  methods: {
    incrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      this.products[idx].qty++
    },
    decrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      // console.log('decr on ', this.products[idx])
      if(this.products[idx].qty > 1) {
        this.products[idx].qty--
      }
    },
    addToCart(product) {
      // push a copy of product to the cart
      let p = JSON.parse(JSON.stringify(product))
      this.$store.dispatch('addToCart', p)
      // reset qty
      product.qty = 1
    }
  },
  computed: {
    ...mapState(['products']),
    computedProductList() {
    console.log(this.products)
      return this.products.filter(p => {
        return p.data.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  watch: {},
  created() {
    // Pull products from Product service
    this.$store.dispatch('getProducts')
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>

.counter {
  display: inline-block;
  button {
    text-align: center;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
}

.cards-productos {
  margin-bottom: 2rem;
  padding:0.8rem;
  width: 28rem;
  height: 40rem;
  border-radius: 10px;
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.452);
  transition: all .5s;
}
.cards-productos:hover {
    transform: translateY(1rem) scale(1.03); 
}
.descripcion{
  height: 4rem;
}
</style>