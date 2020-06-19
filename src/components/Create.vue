<template>
<div class="container">
    <div class="form">
        <div class="container titulo">
            <h1 class="mb-5">Ingrese Producto</h1>
        </div>
        <div class="field container ">
            <p class="control ">
                <input v-model="name" class="input is-primary" type="text" placeholder="Nombre del producto">
            </p>
        </div>

        <div class="field container">
            <p class="control ">
                <input v-model="price" class="input is-primary" type="number" placeholder="Ingrese Precio">
            </p>
        </div>

        <div class="field container" width="300">
            <p class="control ">
                <input v-model="picture" class="input is-primary" type="text" placeholder="Ingrese URL imagen">
            </p>
        </div>
        <div class="field">
            <div class="control">
                <textarea  v-model="description" class="textarea is-primary" placeholder="Descripcion Producto"></textarea>
            </div>
        </div>

        <div class="field container ">
            <p class="control boton">
                <button @click="createProduct" class="button  is-primary  is-fullwidth">Crear</button>
                <button  class="button is-fullwidth is-danger mt-2" v-if="edit" @click="updateProduct(id)">Actualizar</button>
            </p>
        </div>
    </div>

    
     <!-- Tabla para listar productos -->
    <div >
        <h1 class="listar mt-5 mb-5">Listado de Productos</h1>
        <table class="table mb-6  is-striped has-background-danger-light">
            <thead>
            <tr class="has-background-white-ter">
                <!-- <th> id</th> -->
                <th>Nombre Producto</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th colspan="2" class="action"></th>
            </tr>
            </thead>
            <tbody >
                <tr v-for="p in computedProductList" :key="p.id">
                <td>{{ p.data.name }}</td>
                <td>{{ p.data.price }}</td>
                <td>{{ p.data.description}}</td>
                <td ><img class="image is-64x64" :src="p.data.picture"></td>
                <td>
                    <button class="button is-primary  is-small" @click="editProduct(p.id)"> <b>Editar</b></button>
                </td>
                <td>
                    <button class="button is-danger is-small" @click="deleteProduct(p.id)"> <b>Borrar</b></button>
                </td>
                </tr>
            </tbody>
        </table>
      </div>

</div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapActions} from 'vuex'
    export default {
    data() {
        return {
            name: '',
            picture: '',
            price: '',
            description: '',
            id: undefined
        }
    },
    methods: {
        ...mapActions([ 'updateEdit']),
        createProduct(e) {
            e.preventDefault();
            let lapa = {
                name: this.name,
                picture: this.picture,
                price: this.price,
                description:this.description
            }
            axios.post('https://us-central1-tdd-g3.cloudfunctions.net/products/product', lapa,
            {headers:{'content-type' : 'application/json'}})
                .then(() => {
                    this.$store.dispatch('getProducts')
                })
                .catch(function (error) {
                    console.log(error)
                })
            },
            
            deleteProduct(id){
                let confirmation = confirm('¿Esta seguro de Eliminar el producto?')
                if(confirmation){
                    axios.delete(`https://us-central1-tdd-g3.cloudfunctions.net/products/product/${id}`, 
                    {headers:{'content-type' : 'application/json'}})
                    .then(() => {
                        alert('Procucto eliminado exitosamente')
                        this.$store.dispatch('getProducts')
                    })
                }

            },
            editProduct(id){
              this.updateEdit()
              this.findProduct(id)
              
            },
            findProduct(id){
                axios.get(`https://us-central1-tdd-g3.cloudfunctions.net/products/product/${id}`,
                {headers:{'content-type' : 'application/json'}}) 
                .then((response) => {
                    this.name = response.data.name
                    this.picture = response.data.picture
                    this.price = response.data.price
                    this.description = response.data.description 
                    this.id = id
                })
            },
            updateProduct(id){
                let lapa = {
                name: this.name,
                picture: this.picture,
                price: this.price,
                description:this.description
            }
            axios.put(`https://us-central1-tdd-g3.cloudfunctions.net/products/product/${id}`, lapa,
            {headers:{'content-type' : 'application/json'}})
                .then(() => {
                    this.name = ''
                    this.price =''
                    this.picture = ''
                    this.description = ''
                    this.id = ''
                    this.$store.dispatch('getProducts')
                })
                .catch(function (error) {
                    console.log(error)
                })
            }

        },
    computed: {
        ...mapState(["products", "edit"]),
        computedProductList(){
            return this.products
        }
    },
    mounted(){
        this.$store.dispatch('getProducts')
    },
    // updated(){
    //     this.$store.dispatch('getProducts')
    // }

    }
</script>

<style scoped>
    .form {
        width: 20rem;
        margin: 0 auto;
        margin-top: 3rem;
    }
   .table{
       margin: 0 auto;
   }
    .titulo {
        text-align: center;
        margin-bottom: 10px;
    }

    .button-crear {
        text-align: center;
        width: 15rem;
    }
     h1 {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
    } 
    textarea {
      height: 15rem;
    }
</style>