<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <v-text-field label="Search" v-model="search" @keyup="filterRest">      
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <div>
         <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredRestaurants" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.img"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="headline">{{item.title}}</div>
                    <span class="grey--text">{{item.title}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="primary">Details</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
        </div>
    </v-container>
  </div>
</template>

<script>

export default {
  data: () => ({
    filteredRestaurants: [
      {title: 'Martin Berasategui', cuisine: 'Italian', img: require('@/assets/Restaurants/r1.jpg'), location:'Spain'},
      {title: 'Maison Lameloise', cuisine: 'Continental', img: require('@/assets/Restaurants/r2.jpeg'), location:'France'},
      {title: 'Alacarte', cuisine: 'Italian', img: require('@/assets/Restaurants/r3.jpeg'), location:'United Kingdom'},
      {title: 'Xiang Chui', cuisine: 'Chinese', img: require('@/assets/Restaurants/r4.jpeg'), location:'China'}
    ],
    restaurantsList: [
      {title: 'Martin Berasategui', cuisine: 'Italian', img: require('@/assets/Restaurants/r1.jpg'), location:'Spain'},
      {title: 'Maison Lameloise', cuisine: 'Continental', img: require('@/assets/Restaurants/r2.jpeg'), location:'France'},
      {title: 'Alacarte', cuisine: 'Italian', img: require('@/assets/Restaurants/r3.jpeg'), location:'United Kingdom'},
      {title: 'Xiang Chui', cuisine: 'Chinese', img: require('@/assets/Restaurants/r4.jpeg'), location:'China'}
    ],
    search:undefined
  }),
    methods:{
      test(){console.log('Hello')},
      filterRest(){
        this.filteredRestaurants = this.restaurantsList.filter((item) => {
          if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }
          else if (item.location.toLowerCase().includes(this.search.toLowerCase())) 
          {
            return true;
          }
        })
      }
    },
    watch:{
      search: function(val,oldVal)
      {
        console.log('Change detected')
      }
    }
}

</script>