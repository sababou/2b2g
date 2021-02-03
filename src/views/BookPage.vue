<style>
.tag-book{
  color: #311b92;
  transition: .5s all;
  cursor: pointer;
}
.tag-book:hover{
  background-color:  #311b92;
  color: white !important;
}
</style>
<template>

  <v-container
  class="amber accent-3 px-0 py-10"
  fluid
  >


    <v-container
      class="white mx-0"
      fluid
    >
      <v-container>
        <v-row class="d-md-none">
          <v-col>


              <div class="text-h5 font-weight-bold d-flex">A Game of Thrones <v-icon class="ml-auto mr-lg-10 black--text text-h4" style="margin-top: -7px;">mdi-heart</v-icon></div>
              <div class="text-h6 font-weight-light">George R.R Martin</div>
              <div class="d-flex">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="25"
                  class="d-inline-block"
                >
                </v-rating>
                <div class="mt-1  text-body-1 ml-2 font-weight-normal">4.5</div>
              </div>
              <div class="mt-2">
                <div class="d-inline-block mr-4  tag-book" style="border-radius: 6px; border: 2px solid #311b92 ; padding: 2px 12px 2px 12px;">Fantastique</div>
                <div class="d-inline-block  tag-book" style="border-radius: 6px; border: 2px solid #311b92 ; padding: 2px 12px 2px 12px;">Médiéval</div>
              </div>

              <div><hr class="mt-8 mb-3 deep-purple darken-4"></div>


          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" :lg="6">
            <v-row>
              <v-col
              cols="12"
              :md="6">
                <p class="text-h6 font-weight-bold">Couverture</p>
                <v-img
                :src="require('../assets/images/book_covers/'+$route.params.book_id+'.jpg')"
              ></v-img>


              </v-col>
              <v-col
              cols="12"
              :md="6">
                  <p class="text-h6 font-weight-bold">Résumé</p>
                <v-img
                :src="require('../assets/images/book_abstracts/1.png')"
              ></v-img>
            </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" :md="10" :lg="6" offset-md="1" offset-lg="0" class="pt-11 px-4 px-lg-15">

            <div class="d-none d-md-block">



              <div class="text-h5 font-weight-bold d-flex">A Game of Thrones <v-icon class="ml-auto mr-lg-10 black--text text-h4" style="margin-top: -7px;">mdi-heart</v-icon></div>
              <div class="text-h6 font-weight-light">George R.R Martin</div>
              <div class="d-flex">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="25"
                  class="d-inline-block"
                >
                </v-rating>
                <div class="mt-1  text-body-1 ml-2 font-weight-normal">4.5</div>
              </div>
              <div class="mt-2">
                <div class="d-inline-block mr-4  tag-book" style="border-radius: 6px; border: 2px solid #311b92 ; padding: 2px 12px 2px 12px;">Fantastique</div>
                <div class="d-inline-block  tag-book" style="border-radius: 6px; border: 2px solid #311b92 ; padding: 2px 12px 2px 12px;">Médiéval</div>
              </div>

            </div>

            <div><hr class="mt-8 mb-3 deep-purple darken-4"></div>



            <div class="d-flex">
              <v-avatar>
                <img
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  alt="John"
                  style="max-height: 35px; max-width: 35px;"
                >
              </v-avatar>
               <span class="text-body-1 ml-1 my-auto">John Doe</span>

            </div>
            <div class="text-body-2" style="margin-top: -12px; margin-left: 52px;">
              <v-icon class="ml-auto text-h4 font-weight-light float-right mr-7" style="margin-top: -25px;">mdi-chevron-right</v-icon>
              <div>135 pts — Ambassadeur</div>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <div class="d-flex mt-1 "><v-icon class="deep-purple--text text--darken-4">mdi-map-marker-outline</v-icon> <div class="my-auto">Lyon</div></div>
            </div>
            <div class="mt-4">
              <p class="text-body-1 font-weight-medium mb-2">Avis du lecteur</p>
              <p class="text-body-2">Un classique à ne pas rater, les surprises ne s'arrêtent pas et malheureusement les déceptions non plus... Du coup, un coup de coeur particulier pour la mère des dragons ! Je n'en dis pas plus, venez découvrir...</p>
            </div>
            <div>
              <hr class="deep-purple darken-4">
            </div>
            <div class="d-flex d-md-none justify-space-around">
              <div style="width: 36%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      color="deep-purple"
                      v-model="date"
                      label="Date d'emprunt"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
              <div style="width: 36%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Date de remise"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
            </div>



            <div class="d-none d-md-flex justify-space-around">
              <div style="width: 26%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      color="deep-purple"
                      v-model="date"
                      label="Date d'emprunt"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
              <div style="width: 26%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Date de remise"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>
            </div>






            <div class="text-center">
              <div class="my-4">

                <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          rounded class="deep-purple darken-4 white--text"
        >
          Demander l'emprunt
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Votre demande a bien été envoyée.
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Fermer
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
              </div>
              <div class="my-4">
                <router-link :to="'/message'">
                  <v-btn rounded class="amber accent-3 deep-purple--text text--darken-4">Envoyer un message</v-btn>
                </router-link>
              </div>
            </div>




          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container>
      <template v-for="category in $store.state.categories">
        <v-row v-if="category.id==1" :key="category.id">
          <v-col
            :key="category.id"
            class="mt-12"
            cols="12"
          >
            <h3 class="deep-purple--text text--darken-4 text-h3 font-weight-bold py-7">Bibliothèque du membre</h3>
          </v-col>



          <v-col
            v-for="book in category.books" class="px-7"

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

          <v-col
            v-for="book in category.books" class="px-7"
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
        <v-row  v-if="category.id==1" :key="category.id">
          <v-col class="d-flex">
            <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
          </v-col>
        </v-row>

      </template>
    </v-container>

    <v-container>
      <template v-for="category in $store.state.categories">
        <v-row v-if="category.id==1" :key="category.id">
          <v-col
            :key="category.id"
            class="mt-12"
            cols="12"
          >
            <h3 class="deep-purple--text text--darken-4 text-h3 font-weight-bold py-7">Livres similaires</h3>
          </v-col>



          <v-col
            v-for="book in category.books" class="px-7"
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

          <v-col
            v-for="book in category.books" class="px-7"
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
        <v-row  v-if="category.id==1" :key="category.id">
          <v-col class="d-flex">
            <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
          </v-col>
        </v-row>

      </template>
    </v-container>
  </v-container>

</template>

<script>
import Book from '../components/Book.vue'
export default {
  components:{
    Book
  },
  data () {
      return {
        dialog: false,
      }
    },
  methods: {
    findBook : function(bookId){
      var book = null
      let books = this.$store.state.books
      books.forEach(function(item){
        if(item.id == bookId){
          book = item;
        }
      })
      return book;
    },
    findUser : function(userId){
      var user = null
      let users = this.$store.state.users
      users.forEach(function(item){
        if(item.id == userId){
          user = item;
        }
      })
      return user;
    }
  }
}
</script>
