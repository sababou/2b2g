<template>
  <v-container
  fluid
  class="px-0 pt-0">

    <v-container
      fluid
      class="mx-0 deep-purple darken-4 white--text text-h5 text-center"

    >
      Mon profil <v-icon class="white--text ml-2">mdi-cog</v-icon>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">

          <div class="d-flex my-10">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

                 <div>135 pts — Ambassadeur</div>
                 <div class="d-flex">
                 <v-rating
                   :value="4.5"
                   color="amber"
                   dense
                   half-increments
                   readonly
                   size="22"
                   class="d-inline-block"
                 >
               </v-rating> <div class="d-inline-block text-body-1" style="margin-top: 2px; margin-left: 5px;">32 avis</div></div>
                 <div class="d-flex mt-1 "><v-icon class="deep-purple--text text--darken-4">mdi-map-marker-outline</v-icon> <div class="my-auto">Lyon</div></div>
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>



        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="mx-0 px-0 amber accent-3 deep-purple--text text--darken-4"
    >

    <v-tabs
      v-model="tab"
      class="text-center justify-center pb-3"
      align-with-title
      background-color="amber accent-3"
    >
      <v-tabs-slider class="" color="deep-purple darken-4"></v-tabs-slider>

      <v-tab
        class="deep-purple--text text--darken-4 text-h6 ml-auto"
      >
        Empruntés
      </v-tab>
      <v-tab
        class="deep-purple--text text--darken-4 text-h6"
      >
        Prêtés
      </v-tab>
      <v-tab
        class="deep-purple--text text--darken-4 text-h6"
      >
        Wishlist
      </v-tab>

      <v-tab
        class="deep-purple--text text--darken-4 text-h6"
      >
        Amis
      </v-tab>
      <v-tab
        class="deep-purple--text text--darken-4 text-h6"
      >
        Avis
      </v-tab>

      <v-tab
        class="deep-purple--text text--darken-4 text-h6 mr-auto"
      >
        Mes Livres
      </v-tab>
    </v-tabs>

      <v-tabs-items v-model="tab">

        <v-tab-item class=" amber accent-3 ">
          <v-container class="px-7 px-lg-15">
            <template v-for="category in $store.state.categories">
              <v-row v-if="category.id==1" :key="category.id">
                <v-col
                  :key="category.id"
                  cols="12"
                >
                </v-col>



                <v-col
                  v-for="book in category.books"
                  :key="`${category.id}${book.id}`"
                  cols="12"
                  md="6"
                  lg="3"
                  class="pb-md-15"
                >
                  <!-- <v-sheet height="150"></v-sheet> -->
                  <v-alert
                    text
                    outlined
                    color="red accent-4"
                    icon="mdi-arrow-left"
                    class="pa-2 mb-2"
                  >
                    Emprunté le <strong>15/01/2021</strong>
                  </v-alert>

                  <v-alert
                    text
                    outlined
                    color="green darken-3"
                    icon="mdi-arrow-right"
                    class="pa-2 mb-2"
                  >
                    À rendre <strong>le 10/03/2021</strong>
                  </v-alert>
                  <v-alert
                    text
                    outlined
                    color="deep-purple darken-4"
                    icon="mdi-account"
                    class="pa-2 mb-2"
                  >
                    John Doe
                  </v-alert>
                  <Book
                  :title="book.title"
                  rated=""
                  author=""
                  :owner="book.owner"
                  :picture="book.cover"
                  :book_id="book.id"
                   />

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
                              class="deep-purple darken-4 white--text mt-7"
                           >
                             Noter le Livre
                           </v-btn>
                         </template>
                         <v-card>
                           <v-card-title class="headline justify-center">
                             Votre avis
                           </v-card-title>
                           <div class="text-center px-2">
                             <v-rating
                                hover
                                length="5"
                                value="3"
                                size="25"
                                color="amber accent-4"
                                background-color="amber accent-4"
                                  class="mb-3"

                              ></v-rating>
                              <v-textarea
                                outlined
                                label="Commentaire"
                                value=""
                              ></v-textarea>
                           </div>
                           <v-card-actions class="text-center">
                             <v-btn
                               color="deep-purple darken-4"
                               class="white--text"
                               @click="dialog = false"
                             >
                               Envoyer
                             </v-btn>
                             <v-btn
                             class="ml-auto"
                               color="deep-purple darken-4"
                               text
                               @click="dialog = false"
                             >
                               Annuler
                             </v-btn>

                           </v-card-actions>
                         </v-card>
                       </v-dialog>
                     </v-row>
                   </template>





                   <hr class="deep-purple darken-4 d-md-none mt-7">

                </v-col>
              </v-row>
              <v-row  v-if="category.id==1" :key="category.id">
                <v-col class="d-flex">
                  <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
                </v-col>
              </v-row>

            </template>
          </v-container>
        </v-tab-item>


        <v-tab-item class=" amber accent-3 ">
          <v-container class="px-7 px-lg-15">
            <template v-for="category in $store.state.categories">
              <v-row v-if="category.id==1" :key="category.id">
                <v-col
                  :key="category.id"
                  cols="12"
                >
                </v-col>



                <v-col
                  v-for="book in category.books"
                  :key="`${category.id}${book.id}`"
                  cols="12"
                  md="6"
                  lg="3"
                  class="pb-md-15"

                >
                <v-alert
                  text
                  outlined
                  color="red accent-4"
                  icon="mdi-arrow-left"
                  class="pa-2 mb-2"
                >
                  Prêté le <strong>15/01/2021</strong>
                </v-alert>

                <v-alert
                  text
                  outlined
                  color="green darken-3"
                  icon="mdi-arrow-right"
                  class="pa-2 mb-2"
                >
                  Récupérer le <strong>10/03/2021</strong>
                </v-alert>
                <v-alert
                  text
                  outlined
                  color="deep-purple darken-4"
                  icon="mdi-account"
                  class="pa-2 mb-2"
                >
                  John Doe
                </v-alert>

                  <Book
                  :title="book.title"
                  rated=""
                  author=""
                  :owner="book.owner"
                  :picture="book.cover"
                  :book_id="book.id"
                   />


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
                              class="deep-purple darken-4 white--text mt-7"
                           >
                             Noter l'emprunteur
                           </v-btn>
                         </template>
                         <v-card>
                           <v-card-title class="headline justify-center">
                             Votre avis
                           </v-card-title>
                           <div class="text-center px-2">
                             <v-rating
                                hover
                                length="5"
                                value="3"
                                size="25"
                                color="amber accent-4"
                                background-color="amber accent-4"
                                  class="mb-3"

                              ></v-rating>
                              <v-textarea
                                outlined
                                label="Commentaire"
                                value=""
                              ></v-textarea>
                           </div>
                           <v-card-actions class="text-center">
                             <v-btn
                               color="deep-purple darken-4"
                               class="white--text"
                               @click="dialog = false"
                             >
                               Envoyer
                             </v-btn>
                             <v-btn
                             class="ml-auto"
                               color="deep-purple darken-4"
                               text
                               @click="dialog = false"
                             >
                               Annuler
                             </v-btn>

                           </v-card-actions>
                         </v-card>
                       </v-dialog>
                     </v-row>
                   </template>


                   <hr class="deep-purple darken-4 d-md-none mt-7">


                </v-col>
              </v-row>
              <v-row  v-if="category.id==1" :key="category.id">
                <v-col class="d-flex">
                  <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
                </v-col>
              </v-row>

            </template>
          </v-container>
        </v-tab-item>

      <v-tab-item class=" amber accent-3 ">
        <v-container class="px-7 px-lg-15">
          <template v-for="category in $store.state.categories">
            <v-row v-if="category.id==1" :key="category.id">
              <v-col
                :key="category.id"
                cols="12"
              >
              </v-col>



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
            <v-row  v-if="category.id==1" :key="category.id">
              <v-col class="d-flex">
                <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
              </v-col>
            </v-row>

          </template>
        </v-container>
      </v-tab-item>
      <v-tab-item class="py-5 justify-space-around text-center">
        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>

        <v-card class="d-inline-block text-left px-10 my-2 mx-2">

          <div class="d-flex my-10 black--text">
            <v-avatar
            style="height: 135px; width: 135px;">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
                style="height: 135px; width: 135px;"
              >
            </v-avatar>
            <div class="mt-2 ml-5">
               <span class="text-h5 my-auto font-weight-medium">John Doe</span>
               <div class="text-body-2" >

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
                 <div class="ml-2">9 amis</div>
               </div>
            </div>

          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-row>
          <v-col class="px-7 px-lg-15 black--text">
            <div class="rating">
              <div class="text-h6">Julien Honoré</div>
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <p>Ce fut un plaisir de lire "Le Maréchal des Logis Gibond" ! Merci beaucoup John Doe pour ce livre !</p>
            </div>
            <div class="rating">
              <div class="text-h6">Denis Alarnet</div>
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <p>Merci pour ta ponctualité ! Mo livre m'a été rendu intact, et ça m'a permis de découvrir "Il était une fois sur la Lune"</p>
            </div>
            <div class="rating">
              <div class="text-h6">Denis Alarnet</div>
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <p>Merci pour ta ponctualité ! Mo livre m'a été rendu intact, et ça m'a permis de découvrir "Il était une fois sur la Lune"</p>
            </div>
            <div class="rating">
              <div class="text-h6">Denis Alarnet</div>
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <p>Merci pour ta ponctualité ! Mo livre m'a été rendu intact, et ça m'a permis de découvrir "Il était une fois sur la Lune"</p>
            </div>
            <div class="rating">
              <div class="text-h6">Denis Alarnet</div>
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="22"
                class="d-inline-block"
              >
              </v-rating>
              <p>Merci pour ta ponctualité ! Mo livre m'a été rendu intact, et ça m'a permis de découvrir "Il était une fois sur la Lune"</p>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item class=" amber accent-3 ">
        <v-container>
          <v-row>
            <v-col class="text-center">
              <router-link :to="'/add_book'">
                <v-btn
                  rounded
                  class="deep-purple darken-3 white--text"
                >Ajouter un livre</v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="px-7 px-lg-15">
          <template v-for="category in $store.state.categories">
            <v-row v-if="category.id==1" :key="category.id">
              <v-col
                :key="category.id"
                cols="12"
              >
              </v-col>



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
            <v-row  v-if="category.id==1" :key="category.id">
              <v-col class="d-flex">
                <div class="ml-auto my-3 text-h5 font-weight-bold"><a class="black--text" href="#" style="text-decoration : none;">Voir plus</a></div>
              </v-col>
            </v-row>

          </template>
        </v-container>
      </v-tab-item>


    </v-tabs-items>

    </v-container>

  </v-container>


</template>

<style>
.rating{
  border: 1px solid #311b92;
  margin: 10px;
  padding: 15px;
  border-radius: 7px;
}
</style>

<script>
import Book from '../components/Book.vue'
  export default {
    components:{
      Book
    },
    data () {
      return {
        dialog: false,
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
