<template>
  <v-app id="inspire">
    <v-app-bar app v-if="$store.state.metadata.logged == 1"
    color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >
        <router-link :to="'/'">
          <v-img
            src="@/assets/logo.png"
            height="64px"
            contain
            width="50%"
          >  </v-img>
        </router-link>
      </v-toolbar-title>

      <v-row class="my-auto">
        <v-col
        cols="6"  class="d-none d-md-block">
        <div>
          <v-text-field
            placeholder="Recherchez un livre"
            v-model="search_navbar"
          >


            <v-btn

            style="margin-top: -7px; margin-right: -10px;"
            slot="prepend"
            icon
            class="deep-purple--text text--darken-4"
            @click="submitSearch()"
            >
            <v-icon

            >
              mdi-magnify
            </v-icon>
          </v-btn>

          </v-text-field>

        </div>

        </v-col>
        <v-col
        cols="6"
        class="text-right">
          <v-icon  @click="rightdrawer = !rightdrawer" class=" deep-purple--text text--darken-4 mt-n2 mt-md-0" style="font-size:2.5rem;">mdi-account-circle</v-icon>
        </v-col>
      </v-row>



    </v-app-bar>

    <v-app-bar app v-if="$store.state.metadata.logged != 1"
    color="white">

      <v-toolbar-title>
        <router-link :to="'/'">
          <v-img
            class="ml-8 d-none d-md-block"
            src="@/assets/logo.png"
            height="64px"
            contain
            width="50%"
          >  </v-img>
        </router-link>
      </v-toolbar-title>

      <v-row class="my-auto">
        <v-col
        class="d-flex"
        >
          <div class="d-none d-lg-inline-block px-4 text-body-1 ml-auto mt-1" @click="scrollMeTo('how_it_works')">Comment ça marche</div>
          <div class="d-none d-lg-inline-block px-4 text-body-1 mt-1" @click="scrollMeTo('zones')">Zones de rencontre</div>
          <div class="d-none d-lg-inline-block px-4 text-body-1 mt-1" @click="scrollMeTo('FAQ')">FAQ</div>
          <div class="d-inline-block px-4 text-body-1 mt-1 ml-auto ml-lg-0 mr-2 mr-lg-5">


            <router-link to="/login">
              <v-btn
                style="margin-top: -5px;"
                rounded
                class="deep-purple darken-3 white--text font-weight-light d-none d-md-block"
              >Se connecter</v-btn>
            </router-link>



            <router-link to="/login">
              <v-btn
                style="margin-top: -10px;"
                rounded
                class="deep-purple darken-3 white--text font-weight-light d-md-none"
              >Se connecter</v-btn>
            </router-link>


          </div>
        </v-col>
      </v-row>



    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      style="position:fixed; top:0; left:0; z-index: 15"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>Accueil</v-list-item-title>
              <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link to="/search">
            <v-list-item>
              <v-list-item-title>Recherche</v-list-item-title>
              <v-list-item-icon><v-icon>mdi-magnify</v-icon></v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link to="/add_book" v-if="$store.state.metadata.logged != null">
            <v-list-item>
              <v-list-item-title>Ajouter Livre</v-list-item-title>
              <v-list-item-icon><v-icon>mdi-upload</v-icon></v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link to="/message" v-if="$store.state.metadata.logged != null">
            <v-list-item>
              <v-list-item-title>Messages</v-list-item-title>
              <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
            </v-list-item>
          </router-link>



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-navigation-drawer
      v-model="rightdrawer"
      absolute
      right
      temporary
      style="position:fixed; top:0; right:0; z-index: 15"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

        <router-link to="/user" v-if="$store.state.metadata.logged != null">
        <v-list-item>
          <v-list-item-title>Mon Profil</v-list-item-title>
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
        </v-list-item>
        </router-link>
        <router-link to="/account" v-if="$store.state.metadata.logged != null">
        <v-list-item>
          <v-list-item-title>Mon Compte</v-list-item-title>
          <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
        </v-list-item>
        </router-link>
        <router-link to="/" v-if="$store.state.metadata.logged != null">
          <v-list-item @click="logout">
            <v-list-item-title>Déconnexion</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
          </v-list-item>
        </router-link>


          <router-link to="/login" v-if="$store.state.metadata.logged == null">
          <v-list-item>
            <v-list-item-title>Connexion</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-login</v-icon></v-list-item-icon>
          </v-list-item>
          </router-link>
          <router-link to="/signup" v-if="$store.state.metadata.logged == null">
          <v-list-item>
            <v-list-item-title>Inscription</v-list-item-title>
            <v-list-item-icon><v-icon>mdi-account-plus</v-icon></v-list-item-icon>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>

      <router-view></router-view>


    </v-main>

    <v-container
      id="app_footer"
      class="white mx-0"
      fluid
    >
    <v-row class="py-8">
      <v-col cols="12" lg="3">
        <p class="px-4 px-lg-15">Comment ça marche ?</p>
        <p class="px-4 px-lg-15">Zones de rencontre</p>
        <p class="px-4 px-lg-15">FAQ</p>
      </v-col>
      <v-col cols="12" lg="3">
        <p class="px-4 px-lg-15">Nous contacter</p>
        <p class="px-4 px-lg-15">Nous trouver</p>
      </v-col>
      <v-col cols="12" lg="3">

      </v-col>
      <v-col cols="12" lg="3">
        <p class="px-4 px-lg-15">Politique de confidentialité</p>
        <p class="px-4 px-lg-15">Conditions générales d'utilisation</p>
        <p class="px-4 px-lg-15">Presse</p>
      </v-col>
    </v-row>
    <v-row><v-col class="text-center"><hr class="mb-5">Site réalisé par NJS Agency <br>&copy; Too Book To Go</v-col></v-row>

    </v-container>
  </v-app>
</template>

<style>
  a{
    text-decoration: none;
  }
</style>

<script>


export default {
  name: 'App',


  data: () => ({
    drawer: false,
    rightdrawer: false,
    group: null,
    search_navbar: ""
  }),
  watch: {
      $route (to, from){
        console.log(from)
        console.log(to)
        if(to.path != "/search"){
          this.search_navbar = ""
        }
        if(to.path == "/message"){
          document.querySelector("#app_footer").classList.add("d-none");
          setTimeout(function(){
            window.scrollTo(0,document.body.scrollHeight);
          }, 400);
        }else{
          document.querySelector("#app_footer").classList.remove("d-none");
        }
        setTimeout(function(){
          window.scrollTo(0, 0);
        }, 250);

      },
      group () {
        this.drawer = false
        this.rightdrawer = false
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('logoutUser');
        window.location.href = "/";
      },
      scrollMeTo(refName) {
        var element = document.querySelector("[data-ref='"+refName+"']");
        if(element){
          var topElem = element.offsetTop;

          window.scrollTo({top: topElem,
            left: 0,
            behavior: 'smooth'});
        }

      },
      submitSearch(){
        this.$router.push('/search');
        setTimeout(function(){

          setTimeout(function(){
            document.querySelector("#container_results").classList.remove("d-none");
          }, 200);

          document.querySelector("#container_results").classList.add("d-none");

        }, 200);

      }
    }
};
</script>
