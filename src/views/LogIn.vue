<template>
  <v-container
  fluid
  class="mx-0 px-0 amber accent-3" style="min-height: 100vh;">
    <v-row>
      <v-col
        lg="6"
        offset-lg="3"
        md="8"
        offset-md="2"

        class="px-10 px-md-0">
        <p class="text-center text-h3 pt-5 deep-purple--text text--darken-4">Connexion</p>

          <form @submit.prevent="submit">

              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show3 ? 'text' : 'password'"
              name="password"
              label="Mot de passe"
              class="input-group--focused"
              @click:append="show3 = !show3"
            ></v-text-field>
            <v-container class="text-center">
              <v-btn
              rounded
                class="mr-4 deep-purple darken-4 white--text "
                type="submit"
              >
                Se connecter
              </v-btn>
            </v-container>


          </form>

          <hr class="my-10 deep-purple darken-4">

          <v-container class="text-center">
            <div class="text-h6 font-weight-normal deep-purple--text text--darken-4">
              Vous n'avez pas encore de compte ? Crééez en un et rejoignez notre merveilleuse communauté !
            </div>
            <router-link :to="'/signup'">
              <v-btn
              rounded
                class="mr-4 deep-purple darken-4 white--text mt-6 "
                type="submit"
              >
                créer un compte
              </v-btn>
            </router-link>

          </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data: () => ({

      email: '',
      show3: false,

      password: ''
    }),

    methods: {
      submit () {
        this.$store.dispatch('logUser');
        this.$router.push('/');
      },
    },
  }
</script>
