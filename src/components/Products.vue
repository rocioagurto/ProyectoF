<template>
  <div class="container">
  <!-- Header -->
    <section class="hero columns is-multiline">
      <div class="hero-body column is-12-mobile is-6-tablet is-4-desktop" >
        <div class="hero-title " >
          <h1 class="title has-text-white-bis is-uppercase is-size-3-mobile">tiendita</h1>
          <h2 class="subtitle has-text-white-bis is-size-5 is-size-6-mobile">Encuentra lo que buscas aquí</h2>
        </div>
      <div class="is-pulled" style="display: inline-block;">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="" v-model="search">
          <span class="icon icon is-small is-left ">
            <i class="mdi mdi-magnify"></i>
          </span>
        </p>
      </div>
    </div>
    </section>
    <div class="container columns  is-multiline">
      <div class="column is-12-mobile is-6-tablet is-4-desktop" v-for="p in computedProductList" :key="p.id">
        <!-- Cards -->
        <div class="card cards-productos">
          <div class="image-card">
            <div class="image has-spacing image  is-square">
              <img alt="product logo" :src="p.data.picture">
            </div>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title is-size-5">{{ p.data.name }}</h3>
              <p class="subtitle is-size-6 mb-0">CLP {{parseInt (p.data.price )}}.-</p>
              <div class="descripcion">
                <p class="is-size-6">{{p.data.description}}</p>
              </div>
              <div class="counter">
                <button class="has-background-grey-dark has-text-white" @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button class="has-background-grey-dark has-text-white" @click="incrQty(p.id)"><i class="mdi mdi-plus"></i></button>
              </div>
              <button @click="addToCart(p)" class="button is-pulled-right has-background-warning-dark has-text-white-bis">
                <i class="mdi mdi-cart"></i>
              </button>
              <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
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
  created() {
    // Pull products from Product service
    this.$store.dispatch('getProducts')
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .cards {
    height: 30rem;
  }
}
.counter {
  display: inline-block;
}
button {
  border: none;
  text-align: center;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}
// Cards
.card-content{
  padding:0.5rem
}
.cards-productos {
  margin-bottom: 2rem;
  padding:0.8rem;
  height: 35.5rem;
  border-radius: 10px;
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.637);
  transition: all .5s;
}
.cards-productos:hover {
    transform: translateY(1rem) scale(1.03); 
}
.container .columns{
  margin-left: 0;
  margin-right: 0;
}
.descripcion{
  height: 3rem;
}
// Animacion de cards
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  60% {
    transform: translateX(5rem); }
  100% {
    opacity: 1;
    transform: translate(0); } 
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  60% {
    transform: translateX(-5rem); }
  100% {
    opacity: 1;
    transform: translate(0); }
}
// Hero section
.hero{
  background-image: url('/assets/img/mujerchaleco.jpg');
  background-size: cover;
  background-position: top;
  height: 80vh;
  width: 100%;
  text-align: center;
    .hero-body {
    margin: auto;
    margin-top: 4rem;
  }
  .hero-title .title{
    // backface-visibility: hidden;
    display: inline-block;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-out;
  }
 .hero-title .subtitle {
    display: inline-block;
    font-weight: 400;
    animation-name: moveInRight;
    animation-duration: 3s;
    animation-timing-function: ease-out; 
    margin-bottom: 1rem;
  }
}
</style>