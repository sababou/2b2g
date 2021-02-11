<template>
  <v-container
  fluid
  class="amber accent-3"
  style="min-height: 100vh">

    <v-container>
      <v-row class="d-md-none">
        <v-col
        cols="12" :md="6" offset-md="3" class="text-center">
          <v-text-field
            label="Votre recherche"
            prepend-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        cols="6" :md="4" offset-md="2">
          <v-select
            v-model="select"
            :items="items_genres"
            :error-messages="errors"
            label="Genres"
            data-vv-name="select"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="6" :md="4">
          <v-text-field
            label="Auteur"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
            <v-btn @click="submit()" rounded class="deep-purple darken-4 amber--text text--accent-3">Rechercher</v-btn>
        </v-col>
      </v-row>
      <div id="container_results" class="d-none">
        <v-container>
          <v-row>
            <v-col>
              <hr class="my-5 deep-purple darken-4">
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <template v-for="category in $store.state.categories">
                <v-row v-if="category.id==1" :key="category.id">

                  <v-col
                    v-for="book in category.books"
                    :key="`${category.id}${book.id}`"
                    cols="12"
                    md="6"
                    lg="3"

                  >
                    <!-- <v-sheet height="150"></v-sheet> -->
                    <Book
                    :title="book.title"
                    rated=""
                    author=""
                    :owner="book.owner"
                    :picture="book.cover"
                    :book_id="book.id"
                     />

                  </v-col>
                </v-row>
                <v-row v-if="category.id==1" :key="category.id">
                  <v-col
                    :key="category.id"
                    cols="12"
                  >
                  </v-col>



                  <v-col
                    v-for="book in category.books"
                    :key="`${book.id}${category.id}${book.id}`"
                    cols="12"
                    md="6"
                    lg="3"

                  >
                    <!-- <v-sheet height="150"></v-sheet> -->
                    <Book
                    :title="book.title"
                    rated=""
                    author=""
                    :owner="book.owner"
                    :picture="book.cover"
                    :book_id="book.id"
                     />

                  </v-col>
                </v-row>


              </template>

            </v-col>
          </v-row>
        </v-container>
      </div>


    </v-container>

  </v-container>

</template>


<script>
import Book from '../components/Book.vue'

export default {
  components:{
    Book
  },
  data: () => ({

    items_genres: [
      'Policier',
      'Comédie',
      'Romantique',
      'Cuisine',
    ],
    items_auteurs: [
      'G.G Goldman',
      'Marc Levy',
      'Voltaire',
      'Victor Hugo',
    ],
  }),

  methods: {
    submit () {
      document.querySelector("#container_results").classList.add("d-none");
      setTimeout(function(){
        document.querySelector("#container_results").classList.remove("d-none");
      }, 300)

    }
  }
}


</script>
