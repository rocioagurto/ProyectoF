<template>
  <div>
   <section class="hero is-small  is-white ">
     <img src="assets/img/ropa.jpg" alt="">
    <div class=" seccion2 container columns is-multiline">
     <div class=" column is-12-mobile is-12-tablet is-4-desktop ">
       <div class=" hero-body has-text-justified mt-2">
        <h1 class="title has-text-centered mb-5 has-text-weight-normal is-size-5-mobile">Visión</h1>
        <h3 class="text-izq subtitle has-text-weight-light is-size-6-mobile">
         Ser una empresa  líder y reconocida en la venta de ropa Femenina, lograr también extendernos y crear  nuestras cadenas de almacenes,   proporcionando cada día más un servicio de excelencia a nuestros clientes y que al mismo tiempo nos permitan competir en el mercado nacional con los mejores precios del mercado.
        </h3>
       </div>
      </div>
      <div class="column is-12-mobile is-6-tablet is-4-desktop ">
       <div class="hero-body has-text-justified mt-2 ">
        <h1 class="title has-text-centered mb-5 has-text-weight-normal is-size-5-mobile">Misión</h1>
        <h3 class="text-medio subtitle has-text-weight-light is-size-6-mobile">
         Ofrecer a nuestros clientes  productos de calidad, a precios cómodos  que cumplan con sus necesidades y exigencias, abarcando sus gustos de acuerdo a su estilo de ver y vivir la vida.
        </h3>
       </div>
      </div>
      <div class="column is-12-mobile is-6-tablet is-4-desktop ">
       <div class="hero-body has-text-justified mt-2">
        <h1 class="title has-text-centered mb-5 has-text-weight-normal is-size-5-mobile">Objetivos</h1>
        <h3 class="text-der subtitle has-text-weight-light is-size-6-mobile">
        Ofrecer ropa de mejor calidad que satisfaga las  necesidades y gustos del mercado potencial, vender ropa a la moda que cumpla con los requerimientos de estilo en el segmento  del mercado.
        </h3>
       </div>
      </div>
    </div>
    </section>
     <section class="container mb-1">
      <div class="columns is-multiline">
       <div class="column is-12-mobile is-6-tablet is-4-desktop">
        <div class=" story card-image ">
         <figure class="story__shape image is-5by3">
         <img src="/assets/img/feliz.jpg" class="story__img">
          <figcaption class="story__caption izq is-italic is-size-6-mobile">"Es imposible imaginar una mujer de los tiempos modernos que no aspire a la libertad."</figcaption> 
         </figure>
        </div>
       </div>
       <div class="column is-12-mobile is-6-tablet is-4-desktop">
        <div class="story card-image">
          <figure class="story__shape image is-5by3">
            <img src="assets/img/mujeres.jpg" class="story__img">
             <figcaption class="story__caption medio is-italic is-size-6-mobile">"Mujeres, no os preocupéis por vuestra apariencia. Lo que te hace diferente o rara es tu mayor fuerza."</figcaption>
          </figure>
        </div>
       </div>
       <div class="column is-12-mobile is-12-tablet is-4-desktop">
        <div class=" story card-image">
         <figure class="story__shape image is-5by3">
          <img src="assets/img/audaz.jpg" class="story__img">
           <figcaption class="story__caption der is-italic is-size-6-mobile mb-6">"Tengo derecho a vestirme como yo quiera porque me visto para mí y no para incitar a la sexualidad de nadie."</figcaption>
         </figure>
        </div>
       </div>
      </div> 
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 h1 {
 font-family: 'Raleway', sans-serif;
 font-size: 2rem;
 font-weight: 200;
}
h3{
 font-size:1.3rem
}
// Animacion seccion 2 / parrafos Vision-mision-objetivos
.text-izq{
 animation-name: moveDerecha;
 animation-duration: 1.2s;
 animation-timing-function: ease-out;
}
.text-medio{
 animation-name: moveAbajo;
 animation-duration: 1.2s;
 animation-timing-function: ease-out;
}
.text-der{
 animation-name: moveIzquierda;
 animation-duration: 1.2s;
 animation-timing-function: ease-out;
}
@keyframes moveDerecha {
 0% {
 opacity: 0;
 transform: translateX(-9rem); }

 100% {
 opacity: 1;
 transform: translate(0); } 
}
@keyframes moveAbajo {
 0% {
 opacity: 0;
 transform: translateY(-7rem); }

 100% {
 opacity: 1;
 transform: translate(0); } 
}
@keyframes moveIzquierda {
 0% {
 opacity: 0;
 transform: translateX(9rem); }

 100% {
 opacity: 1;
 transform: translate(0); } 
}
.seccion2{
margin: 0 auto;
}
// Animacion seccion 3 
.story__shape {
  position: relative; 
}
.story__img {
  transition: all .5s; 
}
.story__caption {
  text-align: center;
  color:#fff;
  opacity: 0;
}
.story:hover .story__caption {
  opacity: 1;
  transition: all 1s;
  transform: translateY(-6rem)    
}
.story:hover .story__img{
  opacity: 1;
  transition: all 2s;
  filter: blur(8px) brightness(80%); 
}
</style>

