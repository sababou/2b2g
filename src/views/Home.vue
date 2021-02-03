<template>
  <v-container
  fluid
  style="padding: 0px !important"
  >
    <v-container
    fluid
     class="amber accent-3">

     <v-container v-if="$store.state.metadata.logged== null"
     fluid
     >

      <v-img
      class="d-md-none"
      src="@/assets/landing_phone.png"
      style="position-relative">


      </v-img>

      <div class="d-md-none amber accent-3 pt-6" style="margin-top: -200px; position: sticky; z-index: 2;">
        <p class="text-h3 font-weight-bold px-8 deep-purple--text text--darken-4">Donnons une seconde vie à nos livres !</p>
        <p style="line-height: 1.1;" class="white--text text-h6 font-weight-bold px-8">Prêtez, empruntez, échangez des livres en un clic avec des personnes qui partagent les mêmes passions que vous.</p>

        <div class="text-center pb-4 pt-2">
          <router-link :to="'/signup'">
            <v-btn
              rounded
              class="deep-purple darken-3 white--text"
            >Participer à l'aventure</v-btn>
          </router-link>
        </div>

      </div>

      <v-img
      class="d-none d-md-block"
      src="@/assets/landing.png"
      style="position-relative">

        <router-link :to="'/signup'">
        <v-btn
          rounded
          class="deep-purple darken-3 white--text"
          style="position: absolute; top: 365px; left: 115px;"
        >Participer à l'aventure</v-btn>
        </router-link>

      </v-img>

     </v-container>


      <v-container  v-if="$store.state.metadata.logged != null">
      <v-row  v-if="$store.state.metadata.logged != null">
        <v-col
          cols="12"

        >
          <div class="d-md-none">
            <v-img
              src="@/assets/images/home_phone.jpg"
              style="position-relative"
              contain
            ></v-img>

            <div class="d-md-none deep-purple darken-4 pt-6 pb-5" style="margin-top: -30px; position: sticky; z-index: 2;">
              <p class="text-h3 font-weight-bold px-8 white--text">Donnons une seconde vie à nos livres !</p>
              <p style="line-height: 1.1;" class="white--text text-h6 font-weight-bold px-8">Prêtez, empruntez, échangez des livres en un clic avec des personnes qui partagent les mêmes passions que vous.</p>

              <div class="text-center pb-4 pt-4">
                <router-link :to="'/add_book'">
                  <v-btn
                    rounded
                    class="amber accent-3 deep-purple--text text--darken-4"
                  >Commencer à prêter</v-btn>
                </router-link>
              </div>

            </div>

          </div>

          <v-img
            src="@/assets/images/home.jpg"
            style="position-relative"
            contain
            class="d-none d-md-block"
          >

          <router-link :to="'/add_book'">
            <v-btn
              rounded
              class="amber accent-3 d-none d-lg-block"
              style="position: absolute; bottom: 110px; right: 70px;"
            >Commencer à prêter</v-btn>

            <v-btn
              rounded
              class="amber accent-3 d-none d-md-block d-lg-none"
              style="position: absolute; bottom: 60px; right: 70px;"
            >Commencer à prêter</v-btn>

          </router-link>

          </v-img>
        </v-col>
      </v-row>


        <template v-for="category in $store.state.categories">
          <v-row v-if="category.id==1" :key="category.id">
            <v-col
              :key="category.id"
              class="mt-7 mt-lg-12"
              cols="12"
            >
              <h3 class="deep-purple--text text--darken-4 text-h3 font-weight-bold py-4 py-lg-7">Favoris</h3>
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


        <v-container>
          <v-row>
            <v-col>
              <h3 class="deep-purple--text text--darken-4 text-h3 font-weight-bold pt-15 pb-4">Rechercher par genre</h3>
            </v-col>
          </v-row>
          <v-row class="my-5 d-none d-md-flex">
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Aventure</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Horreur</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Sc.Fiction</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Gore</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Policier</div></v-sheet>
            </v-col>
          </v-row>
          <v-row class="my-5 d-none d-md-flex">
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Fantaisie</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Bio</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Histoire</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Santé</div></v-sheet>
            </v-col>
            <v-col>
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-h5 font-weight-bold" width="140" height="140" fill-height><div class="mx-auto my-auto">Guerre</div></v-sheet>
            </v-col>
          </v-row>

          <v-row class="my-5 d-md-none">
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Aventure</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Horreur</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Sc.Fiction</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Gore</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Policier</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Fantaisie</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Bio</div></v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet @click="submitSearch()" class="rounded-circle deep-purple search-gender darken-4 mx-auto d-flex white--text text-body-2 font-weight-normal" width="80" height="80" fill-height><div class="mx-auto my-auto">Histoire</div></v-sheet>
            </v-col>

          </v-row>
        </v-container>


      <v-row>
        <template v-for="category in $store.state.categories">
          <v-col
            :key="category.id"
            class="mt-7 mt-lg-12"
            cols="12"
          >
            <h3 class="deep-purple--text text--darken-4 text-h3 font-weight-bold py-4 py-lg-7">{{category.name}}</h3>
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

          <v-col
            :key="category.id"
            cols="12"
          >
            <h5 class="black--text text--darken-4 text-h5 font-weight-bold py-3 text-right">Voir plus</h5>
          </v-col>

        </template>
      </v-row>
      </v-container>
    </v-container>
    <v-container  v-if="$store.state.metadata.logged== null"
      class="deep-purple darken-4 mx-0"
      fluid
    >
    <v-row>
      <v-col class="white--text pb-15">
        <h1 class=" text-center text-h3 font-weight-bold py-10" data-ref="how_it_works">Comment ça marche ?</h1>
        <p class="px-4 px-lg-15">Too Book To Go est une plateforme d'échange, de prêt et d'emprunt de livres. Partagez vos livres avec vos amis, votre famille, vos proches et éventuellement avec d'autres personnes qui partagent les mêmes passions que vous. Il vise à faciliter le suivi de vos livres lors des prêts/emprunts.</p>
        <p class="px-4 px-lg-15 py-5 text-h5 text-center font-weight-bold">Découvrez notre vidéo de présentation pour comprendre la philosophie<br />Too Book To Go et l'adopter !</p>
        <v-container >
        <v-img
          src="@/assets/video.png"
          style="width: 80%; margin-left: 10%"

        >



        </v-img>
        </v-container>
      </v-col>
    </v-row>

    </v-container>

    <v-container  v-if="$store.state.metadata.logged== null"
      class="white mx-0"
      fluid
    >
      <v-row class="px-4 px-lg-15 py-8">
        <v-col class="px-4 px-lg-15 py-8 d-none d-lg-block">
          <v-img
          src="@/assets/map.png"
          class="d-none d-lg-block">
          </v-img>
        </v-col>
        <v-col class="px-4 px-lg-15 py-8">
          <p class="text-h3 font-weight-bold deep-purple--text text--darken-4" data-ref="zones">Nos zones de rencontre</p>
          <p>Too Book To Go met à disposition de nombreux points de rencontres ou de dépôts où les livres sont en sécurité en attendant d'être récupérés par le prochain lecteur ! <br>Une bibliothèque, un café, un arrêt de bus, un commerçant... Les options sont nombreuses ! Alors n'attendez plus et lancez vous dans l'aventure Too Book To Go.</p>
          <p class="text-h4 pt-10 deep-purple--text text--darken-4">Trouvez la zone de rencontre la plus proche de vous !</p>
          <v-text-field
            label="Votre ville"
            outlined
            clearable

          >
            <template v-slot:append-outer>
              <v-avatar color="deep-purple darken-4" style="margin-top: -20px;" size="60">
                <v-icon dark class="text-h4">
                  mdi-magnify
                </v-icon>
              </v-avatar>
            </template>
          </v-text-field>

          <v-img
          src="@/assets/map.png"
          class="d-lg-none">
          </v-img>

        </v-col>
      </v-row>
    </v-container>

    <v-container  v-if="$store.state.metadata.logged== null"
      class="deep-purple darken-4 mx-0 py-0"
      fluid
    >
    <v-row>
      <v-col>
        <v-container>
          <v-row class=" pt-6 pb-15">
            <v-col
            :cols="12"
              :lg="6"

             class="white--text py-12">
              <h2 class="text-h3 py-10 font-weight-medium">Devenez Ambassadeur !</h2>
              <p>Vous dévorez autant de livres qu'il ya de secondes dans une année ? <br> Devenez Ambassadeur et partagez votre plaisir de lire avec d'autres ! <br> Votre rôle est varié : accompagner les petits nouveaux, donnez votre avis sur une grande variété de livres, et surtout, animer les évènements Too Book To Go. De grands salons aux groupes en petit commité, il y en a pour tous les goûts.</p>
              <p class="text-h5 pt-6 font-weight-bold">Pour participer à l'aventure Too Book To Go, <br> Devenez Ambassadeur et aidez nous à partager notre mission !</p>

              <router-link :to="'/signup'"><v-btn
                rounded
                class="amber accent-3 mt-8 d-none d-lg-block"
              >Rejoindre l'équipe</v-btn>
              </router-link>

              <div class="text-center  d-lg-none">
                <router-link :to="'/signup'"><v-btn
                  rounded
                  class="amber accent-3 mt-8"
                >Rejoindre l'équipe</v-btn>
                </router-link>
              </div>


            </v-col>
            <v-col class="py-15 px-15 x-lg-0">
              <v-img
                src="@/assets/reading.svg"
                contain
              >
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>



    </v-container>

    <v-container  v-if="$store.state.metadata.logged== null"
      class="amber accent-3"
      fluid
    >
      <v-row class="px-4 px-lg-15 pb-15">

        <v-col class=""
        :cols="12"
        :lg="8"
        :offset-lg="2">
          <h2 class="text-h3 text-center py-15 deep-purple--text text--darken-4 font-weight-bold">Foire aux Questions</h2>
          <div data-ref="FAQ"></div>
          <template>
            <v-row justify="center">
              <v-expansion-panels accordion>

                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Too Book To Go c'est quoi ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Too Book To Go est une plateforme d’échange, de prêt et d’emprunt de livres. Partagez vos livres avec vos amis, votre famille, vos proches et éventuellement avec d’autres personnes qui partagent les mêmes passions que vous. Il vise à vous faciliter le suivi de vos livres lors des prêts/emprunts.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Quelles sont les règles de 2B2G ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Les règles les plus importantes sont le respect des autres, le respect des livres et le respect des engagements qu’on a pris vis-à-vis des autres utilisateurs : Si vous empruntez un livre, il faudra le rendre dans le même état qu’il vous a été donné, sans l’abimer ni le perdre. Il faut également le rendre au plus tard le jour de la date limite du prêt.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">À qui 2B2G est-il destiné ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Aux amateurs de lecture, aux personnes disposant de livres qu’ils souhaiteraient déstocker, aux personnes voulant échanger un livre contre un autre pour une période donnée.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Puis-je lire des livres sur Too Book To Go?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Non, il n’est pas possible de lire un livre sur Too Book To Go. Cependant, vous trouverez le résumé du livre.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment s'inscrire ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il suffit de remplir un formulaire d’inscription en <ins><router-link :to="'/signup'">cliquant ici</router-link></ins>. Il vous faudra juste une adresse électronique valable.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment gérer mes livres sur Too Book To Go?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il y a une page prévue pour ajouter un livre que vous voulez prêter. Vous disposez également d’une page « mon profil » où vous pouvez suivre l’état d’un livre que vous avez prêté/emprunté.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
              <v-expansion-panel>
                <v-expansion-panel-header class="font-weight-bold">Comment prêter un livre ?</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Il suffit  de l’ajouter via la page "Ajouter un livre". Une fois que votre livre intéresse quelqu’un, celui-ci vous envoie une demande que vous recevrez sur votre messagerie, et vous conviendrez du mode de prêt qui vous conviendra : Envoi par poste ou échange de main à main.
                  </v-expansion-panel-content>
              </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment emprunter un livre ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il suffit de rechercher un livre qui vous plait. Une fois trouvé, vous demandez à emprunter ce livre à son propriétaire, qui recevra un message l’informant de votre demande. Vous pourrez à partir de là décider du mode d’emprunt qui vous convient à tous les deux (vous et le prêteur) c’est-à-dire envoi par poste ou échange de main à main.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Puis-je ajouter des magazines, annuaires, catalogues... etc sur Too Book To Go?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Non, Too Book To Go est destinée uniquement aux livres qui n’ont pas pour vocation principale la publicité et la médiatisation.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment savoir si quelqu'un a trouvé un livre que j'ai mis sur le site ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il n’est pas possible de savoir si quelqu’un a trouvé un livre suite à une recherche, sauf si celui-ci vous envoie une demande d’emprunt, que vous recevrez dans votre messagerie.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Je souhaite me connecter avec un proche sur Too Book To Go comment faire ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Afin d'envoyer un premier message à une personne, vous devez consulter l'un de ses livres. Une fois un échange établi entre vous, vous pourrez le recontacter directement grâce à la page "Messages".
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment prêter un livre à un proche qui n'est pas inscrit sur Too Book To Go?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il faut que votre proche s’inscrive sur Too Book To Go ou bien vous pourrez le lui prêter directement sans passer par Too Book To Go mais dans ce cas, vous ne bénéficierez pas du suivi de votre livre.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment puis-je suivre les demandes de prêts et les emprunts ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Vous recevrez une demande d’emprunt dans votre messagerie. Une fois que vous avez prêté votre livre, vous pourrez suivre son état depuis la page « Mon Profil ». Si vous empruntez un livre, alors vous le verrez également dans la rubrique « Livres empruntés » de la page du profil.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">L'un de mes livres a été perdu, ne m'a pas été rendu ou a été détérioré, que dois-je faire ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il est possible de souscrire à une assurance qui pourra vous rembourser votre livre.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Je souhaite supprimer mon compte</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Il est possible de supprimer votre compte depuis la page « mon compte » tout en bas de la page, vous trouverez un lien en couleur rouge qu’il faudra suivre afin de supprimer votre compte. Attention, cette action est irréversible, et les données (suivi des livres en cours… etc) seront perdues définitivement.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment mes données personnelles sont-elles gérées ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Vos données personnelles resteront sur le site Too Book To Go et ne seront pas transmises à des tiers. Nous devons cependant traiter vos données afin d’établir certaines statistiques et d’éviter notamment les fraudes, afin de vous garantir la meilleure qualité de notre service.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment sont organisés les livres ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Les livres sont organisés par catégorie, auteur et notes des utilisateurs. Vous pouvez utiliser les filtres de recherche afin de filtrer vos résultats selon les critères de votre choix.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Comment trouver les livres ajoutés récemment ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Les livres ajoutés récemment sont mis en vedette dans la rubrique « nouveautés » dans l’accueil de la plateforme.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">J'aimerais rencontrer des personnes de Too Book To Go, est-ce que c'est possible ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Si vous êtes connecté à une personne, vous pourrez lui envoyer des messages. Vous pourrez ainsi la rencontrer si vous êtes tous les deux d’accord pour vous rencontrer.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">J'ai des commentaires/suggestions à faire sur l'interface et/ou le produit, comment procéder ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Contactez-nous par mail à : contact@toobooktogo.com .
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <hr>
                <v-expansion-panel>
                  <v-expansion-panel-header class="font-weight-bold">Je suis un auteur de livres. Est-ce que Too Book To Go ne réduirait pas mes ventes ?</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Non, Too Book To Go ne réduira pas vos ventes car le prêt a lieu de toutes les façons, avec ou sans nous. Il y a également des bibliothèques disposant de votre livre et qui prêtent ce livre à leurs membres, sans pour autant réduire vos ventes. Quelqu’un qui voudra acheter votre livre l’achètera et ne l’empruntera pas ni d’une bibliothèque ni d’un proche.
                  </v-expansion-panel-content>
                </v-expansion-panel>


              </v-expansion-panels>
            </v-row>
          </template>
        </v-col>
      </v-row>
    </v-container>

  </v-container>



</template>

<script>
import Book from '../components/Book.vue'

export default {
  components:{
    Book
  },
  methods: {
    submitSearch(){
      this.$router.push('/search');
      setTimeout(function(){

        setTimeout(function(){
          document.querySelector("#container_results").classList.remove("d-none");
          window.scrollTo(0, 0);
        }, 200);

        document.querySelector("#container_results").classList.add("d-none");

      }, 200);

    }
  }
}
</script>

<style lang="css" scoped>
  .search-gender{
    cursor: pointer;
  }


</style>
