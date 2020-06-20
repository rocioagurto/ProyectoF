<template>
  <div class="container">
    <!-- Header -->
    <section class="hero columns is-multiline">
      <div class="hero-body column is-12-mobile is-6-tablet is-4-desktop" >
        <h1 class="hero-title has-text-white-bis" >
          <span class="heading-title">tiendita</span>
          <span class="heading-subtitle">Encuentra tus productos aquí</span>
        </h1>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="" v-model="search">
          <span class="icon icon is-small is-left ">
            <i class="mdi mdi-magnify"></i>
          </span>
        </p>
      </div>
    </section>
    <div class="container columns  is-multiline">
      <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen" v-for="p in computedProductList" :key="p.id">
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
              <p class="subtitle is-size-6 ">CLP {{parseInt (p.data.price * p.qty)}}.-</p>
              <div class="descripcion">
              <p class="is-size-6">{{p.data.description}}</p>
              </div>
              <div class="counter">
                <button @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button @click="incrQty(p.id)"><i class="mdi mdi-plus"></i></button>
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
  width: 27rem;
  height: 42rem;
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
  height: 4rem;
}
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
.hero{
  background-image: url('https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_960_720.jpg');
  background-size: cover;
  background-repeat: none;
  background-position: top;
  height: 80vh;
  width: 100%;
  text-align: center;
}
.hero-body{
  margin: auto;
  margin-top: 4rem;
}
.hero-title{
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  
}
.heading-title{
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  animation-name: moveInLeft;
  animation-duration: 3s;
  animation-timing-function: ease-out;
}
.heading-subtitle {
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    animation-name: moveInRight;
    animation-duration: 3s;
    animation-timing-function: ease-out; 
    margin-bottom: 1rem;
}
</style>