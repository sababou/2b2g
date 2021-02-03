<template>
  <v-container>
    <v-row>
      <v-col
      cols="12"
      md="4"
      lg="3"
       style="position: fixed; transform: translateX(-28px)"  class="d-none d-md-block">
      <v-card>
      <v-toolbar
        color="orange lighten-1"
        dark

      >

        <v-toolbar-title style=""> <v-icon class="mr-2">mdi-menu</v-icon> Conversations</v-toolbar-title>

      </v-toolbar>

      <v-list two-line
      style="padding-top: 0px; height: 75vh; overflow-y: scroll;">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            inset
          >
            {{
              item.header
            }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            inset
          ></v-divider>

          <v-list-item
            v-else
            :key="item.title"
            ripple
            style="border-top: 1px solid lightgray; cursor: pointer;" class="message-item"
            @click="getConversation(index)"
          >
            <v-list-item-avatar>
              <img :src="item.avatar">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            inset
          >
            {{
              item.header
            }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            inset
          ></v-divider>

          <v-list-item
            v-else
            :key="item.title"
            ripple
            style="border-top: 1px solid lightgray; cursor: pointer;" class="message-item"
            @click="getConversation(index)"
          >
            <v-list-item-avatar>
              <img :src="item.avatar">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

</v-col>

<v-col
cols="12"
md="4"
lg="3">

    <v-card class="d-md-none" style="position: fixed; width: 100%;  left: 0; top: 56px; z-index: 10;">

      <v-expansion-panels v-model="openedPanel" accordion style="padding: 0px;">

        <v-expansion-panel >
          <v-expansion-panel-header style="padding: 0px; position: relative;">
            <template v-slot:actions>
           <v-icon style="position: absolute; top: 0; right: 8px; height: 100%;" color="white">
             mdi-menu
           </v-icon>
         </template>
            <v-toolbar
                color="orange lighten-1"
                dark
               class="elevation-0"
              >


                <v-toolbar-title style="">Conversations</v-toolbar-title>

              </v-toolbar></v-expansion-panel-header>
          <v-expansion-panel-content style="height: 85vh; overflow: scroll;">

            <v-list two-line
            style="padding-top: 0px;">



              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  inset
                >
                  {{
                    item.header
                  }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  inset
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                  ripple
                  style="border-top: 1px solid lightgray; cursor: pointer;" class="message-item"
                  @click="getConversation(index); closeAllPanels()"
                >
                  <v-list-item-avatar>
                    <img :src="item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  inset
                >
                  {{
                    item.header
                  }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  inset
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                  ripple
                  style="border-top: 1px solid lightgray; cursor: pointer;" class="message-item"
                  @click="getConversation(index); closeAllPanels()"
                >
                  <v-list-item-avatar>
                    <img :src="item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>


          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>




  </v-card>


  </v-col>


  <v-col class="pt-10 pt-md-0 ml-md-10" style="padding-bottom: 105px;" offset-md="4">

    <div class="conversation" data-conversation="0">
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Salut, j'aimerais emprunter votre livre "L'Empire contre-attaque !".
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Salut, pas de problème !
            </v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Vous êtes disponible quel jour pour le récupérer ?
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Ce Mardi 19 vers 13h30, place du Soleil, ça vous va ?
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Très bien, à Mardi alors !
            </v-alert>
          </v-col>
        </v-row>






























        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Salut, j'aimerais emprunter votre livre "L'Empire contre-attaque !".
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Salut, pas de problème !
            </v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Vous êtes disponible quel jour pour le récupérer ?
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Ce Mardi 19 vers 13h30, place du Soleil, ça vous va ?
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Très bien, à Mardi alors !
            </v-alert>
          </v-col>
        </v-row>


























      </v-container>
    </div>

    <div class="conversation d-none" data-conversation="1">
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Salut Rodrigo, comment tu trouves ma librairie ? !".
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Excellent !
            </v-alert>
          </v-col>
        </v-row>


      </v-container>
    </div>

    <div class="conversation d-none" data-conversation="2">
      <v-container>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Salut John, j'ai de bons livres à échanger contre "Sunrise over Jupiter"
            </v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Ca vous dit ?
            </v-alert>
          </v-col>
        </v-row>


      </v-container>
    </div>


    <div class="conversation d-none" data-conversation="3">
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-alert
              border="left"
              dark
              color="deep-purple accent-4"
              elevation="2"
            >
              Salut John, j'aimerais savoir si "Harry Potter 5" est bien comme livre ?
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Je l'ai lu, il est génial !
            </v-alert>
          </v-col>
        </v-row>


      </v-container>
    </div>

    <div class="conversation d-none" data-conversation="4">
      <v-container>

        <v-row>
          <v-col cols="10" offset="2">
            <v-alert
              border="right"
              colored-border
              color="amber accent-4"
              elevation="2"
            >
              Salut ;)
            </v-alert>
          </v-col>
        </v-row>


      </v-container>
    </div>




  <v-form>
    <v-container fluid style="position: fixed; bottom: 0; right: 0; " class="">
      <v-row>
        <v-col style="z-index: 9;" cols="12" :md="7" offset-md="4" class="pl-md-15 white">
          <v-text-field
            :append-outer-icon="'mdi-send'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            outlined
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

  </v-col>

</v-row>
  </v-container>

</template>

<style>
.message-item{
  transition: .5s all;
}
.message-item:hover{
  background-color: lightgray;
}
</style>


<script>
  export default {
    data () {
      return {
        openedPanel: null,
        password: 'Password',
     show: false,
     message: 'Hey!',
     marker: true,
     iconIndex: 0,
     icons: [
       'mdi-emoticon',
       'mdi-emoticon-cool',
       'mdi-emoticon-dead',
       'mdi-emoticon-excited',
       'mdi-emoticon-happy',
       'mdi-emoticon-neutral',
       'mdi-emoticon-sad',
       'mdi-emoticon-tongue',
     ],
        items: [

          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: '<span class="font-weight-bold">Jane Doe</span>',
            subtitle:
              `29/01/2021 &mdash; <span class="font-weight-bold">Très bien, à Mardi alors !</span> `,
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: '<span class="font-weight-bold">Rodrigo Garcia</span>',
            subtitle:
              `27/01/2021 &mdash; <span class="font-weight-bold">Excellent !</span> `,
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: '<span class="font-weight-bold">Moustapha Jefferson</span>',
            subtitle:
              `20/01/2021 &mdash; <span class="font-weight-bold">Ca vous dit ?</span> `,
          },

          {
            avatar: 'https://picsum.photos/250/300?image=839',
            title:
              '<span class="font-weight-bold">Marion David</span>',
            subtitle:
              `10/01/2021 &mdash; <span class="font-weight-bold">Je l'ai lu, il est génial !</span> `,
          },
          {
            avatar: 'https://picsum.photos/250/300?image=145',
            title: '<span class="font-weight-bold">Luis Vuitton</span>',
            subtitle:
              `05/01/2021 &mdash; <span class="font-weight-bold">Salut ;)</span> `,
          },
        ],
      }
    },

    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      closeAllPanels () {
        this.openedPanel = null
      },
      getConversation(id){
        let convs = document.querySelectorAll('.conversation')
        console.log(convs);
        convs.forEach(function(elem){
          elem.classList.add("d-none");
        })
        document.querySelector('.conversation[data-conversation="'+id+'"]').classList.remove("d-none");
        window.scrollTo(0,document.body.scrollHeight);

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
      },
      getUsername(item){
        console.log(item);
      if(item.usr1 == this.findUser(this.$store.state.metadata.logged))
        return this.findUser(item.usr2).name
      else
        return this.findUser(item.usr1).name
      },
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
  }
</script>
