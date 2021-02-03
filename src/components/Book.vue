<template>
  <router-link :to="'/book/'+book_id">
    <v-card

      class="mx-auto"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="500"
          class="d-md-none"

        :src="require('../assets/images/book_covers/'+book_id+'.jpg')"
      ></v-img>

      <v-img
        height="620"
          class="d-none d-md-block d-lg-none"
        :src="require('../assets/images/book_covers/'+book_id+'.jpg')"
      ></v-img>

      <v-img
        height="360"
        class="d-none d-lg-block"

        :src="require('../assets/images/book_covers/'+book_id+'.jpg')"
      ></v-img>



      <v-card-title><span class="text-h5 font-weight-medium">{{title}}</span>
      <v-icon class="ml-auto">mdi-heart-outline</v-icon>
      </v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0 pb-1"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>

          <div class="grey--text ml-4 text-body-1">
            4.5 (413)
          </div>


        </v-row>

        <div class="my-4 subtitle-1">
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
           <span class="text-body-1 ml-3">{{findUser(owner).name}}</span>
        </div>

      </v-card-text>







    </v-card>
  </router-link>
</template>

<script>
  export default {
    name: 'Book',

    data: () => ({
      //
    }),
    props: [
      'owner','title','rated','picture', 'book_id'
    ],
    methods: {
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
