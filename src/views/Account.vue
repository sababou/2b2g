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
        <p class="text-center text-h3 pt-5 deep-purple--text text--darken-4">Mon compte</p>
        <validation-observer
          ref="observer"
        >
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Nom complet"
                required
              ></v-text-field>


            </validation-provider>

            <validation-provider>
              <v-file-input
                truncate-length="27"
                label="Photo de profil"
                required
              ></v-file-input>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 10,
                regex: '^0\\d{9}$'
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Numéro de téléphone"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>








                      <v-text-field
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="password"
                        label="Mot de passe"
                        hint="Minimum 8 caractères"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
                      ></v-text-field>



                      <v-text-field
                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show4 ? 'text' : 'password'"
                        name="password-confirmation"
                        label="Confirmation mot de passe"
                        hint="Minimum 8 caractères"
                        @click:append="show4 = !show4"
                      ></v-text-field>








            <v-btn
              class="mr-4 deep-purple darken-4 white--text"
              type="submit"
            >
              Mettre à jour
            </v-btn>
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
      name: 'John Doe',
      phoneNumber: '0622006611',
      email: 'johndoe@johnnymail.com',
      select: null,
      items: [
        'Prêter',
        'Emprunter',
        'Prêter et emprunter',
        'Donner',
      ],
      checkbox: null,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Obligatoire.',
          min: v => v.length >= 8 || 'Minimum 8 caractères',
          passwordMatch: () => (
            `Les deux mots de passe ne correspondent pas`
          ),
        },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>
