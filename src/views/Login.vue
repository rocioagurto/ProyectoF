<template>
  <div class="container">
    <section class="hero columns is-multiline mb-0 mt-0">
        <div class="hero-body column is-12-mobile is-4-tablet is-4-desktop" >
          <div class="login-container card">
            <form class="pt-2 pb-4 px-3">
              <!-- Field email -->
              <div class="field">
                <span v-if="formHasErrors" class="has-text-danger">
                  <i class="mdi mdi-alert"></i>
                  Usuario o Contraseña incorrectos, Intente nuevamente.
                </span>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input type="email" name="email" id="email" placeholder="Email" v-model="credentials.email" class="input">
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-email"></i>
                  </span>
                </div>
              </div>
              <!-- Field password -->
              <div class="field">
                <label class="label">Contraseña</label>
                <div class="control has-icons-left has-icons-right">
                  <input type="password" name="password" id="password" placeholder="*******" v-model="credentials.password" class="input">
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-key"></i>
                  </span>
                </div>
              </div>
              <!-- field submit -->
              <div class="field">
                <button class="button has-background-warning-dark has-text-white is-fullwidth mt-4" @click="login">Acceder</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  </div>
</template>

<script>

import Firebase from 'firebase';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      formHasErrors: false
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      this.formHasErrors = this.credentials.email === '' || this.credentials.password === ''
      if(!this.formHasErrors) {
       Firebase.auth()
        .signInWithEmailAndPassword(
          this.credentials.email,
          this.credentials.password
        )
        .then(() => {
          let user = this.credentials.email
          this.$store.dispatch('updateUser', user)
          this.$router.push('/')
        })
        .catch(()=>{
          alert('Usuario no autenthicado')
        })
      }
    }
  },
}
</script>


<style lang="scss" scoped>
.hero{
  background-image: url('/assets/img/nujer.jpg');
  background-size: cover;
  background-position: top;
  height: 80vh;
  width: 100%;
  margin: 0;
  
  text-align: center;
    .hero-body{
    margin: auto;
    margin-top: 4rem;
  }
 
}
.login-container {
  border-radius: 6px;
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.637);
  
}
</style>

