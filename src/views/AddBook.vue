<template>
  <v-container fluid class="mx-0 amber accent-3" style="min-height: 100vh;">
    <v-row>
      <v-col lg="6"
       offset-lg="3"
       md="8"
       offset-md="2"
       class="px-7">
        <p class="text-center text-h3 pt-5  deep-purple--text text--darken-4">Ajouter Livre</p>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">
            <validation-provider
              name="Title"
            >
              <v-text-field
                v-model="title"
                label="Titre"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              name="Author"
            >
              <v-text-field
                v-model="author"
                label="Auteur"
                required
              ></v-text-field>
            </validation-provider>


            <validation-provider
              name="Description"
            >
              <v-text-field
                v-model="description"
                label="Description (état du livre, votre avis...)"

                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                label="Catégorie"
                data-vv-name="select"
                required
              ></v-select>
            </validation-provider>

            <validation-provider>
              <v-file-input
                truncate-length="27"
                label="Photo de couverture"
                required
              ></v-file-input>
            </validation-provider>
            <validation-provider>
              <v-file-input
                truncate-length="27"
                label="Photo du résumé"
                required
              ></v-file-input>
            </validation-provider>

            <router-link :to="'/'">
              <v-btn
                class="mr-4 deep-purple darken-4 white--text"
                type="submit"
                :disabled="invalid"
                @click="submit"
              >
                Ajouter Livre
              </v-btn>
            </router-link>


            <v-btn @click="clear">
              Effacer
            </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: 'Ce champ doit avoir {length} chiffres. ({_value_})',
  })

  extend('required', {
    ...required,
    message: 'Ce champ ne peut pas être vide',
  })

  extend('max', {
    ...max,
    message: 'Ce champ ne doit pas avoir plus que  {length} caractères',
  })

  extend('regex', {
    ...regex,
    message: 'Ce numéro de téléphone n\'est pas valide',
  })

  extend('email', {
    ...email,
    message: 'L\'email doit être valide',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      title: '',
      author: '',
      description: '',
      abstract: '',
      picture: '',
      select: null,
      items: [
        'Policier',
        'Comédie',
        'Romantique',
        'Cuisine',
      ],
      checkbox: null
    }),

    methods: {
      submit () {
        this.$store.dispatch('addBook', 2, "Best Recettes", "L'auteur ;)", 1, "!!!", "hahaha", 1)
        console.log(this.$store.state);
      },
      clear () {
        this.title = ''
        this.author = ''
        this.description = ''
        this.abstract = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>
