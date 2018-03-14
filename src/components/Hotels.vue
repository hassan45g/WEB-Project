<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <v-text-field label="Search" v-model="search" @keyup="filterHotel">      
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <div>
         <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredHotels" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.img"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="headline">{{item.title}}</div>
                    <span class="grey--text">{{item.star}} star Hotel</span><br>
                    <span class="grey--text">{{item.location}}</span>
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
    filteredHotels: [
      {title: 'Pearl Continental' , star: 5 , img: require('@/assets/Hotels/h1.jpg') , location:'Pakistan'},
      {title: 'Burj Khalifa' , star: 7 , img: require('@/assets/Hotels/h2.jpg') , location:'Cambodia' },
      {title: 'Shinta Mani Angkor' , star: 4 , img: require('@/assets/Hotels/h3.jpg') , location:'Cambodia' },
      {title: 'Golden Temple' , star: 5 , img: require('@/assets/Hotels/h5.jpg') , location:'England' },
      {title: 'La Maison' , star: 5 , img: require('@/assets/Hotels/h4.jpg') , location:'France' }
    ],
    hotelsList: [
      {title: 'Pearl Continental' , star: 5 , img: require('@/assets/Hotels/h1.jpg') , location:'Pakistan'},
      {title: 'Burj Khalifa' , star: 7 , img: require('@/assets/Hotels/h2.jpg') , location:'Cambodia' },
      {title: 'Shinta Mani Angkor' , star: 4 , img: require('@/assets/Hotels/h3.jpg') , location:'Cambodia' },
      {title: 'Golden Temple' , star: 5 , img: require('@/assets/Hotels/h5.jpg') , location:'England' },
      {title: 'La Maison' , star: 5 , img: require('@/assets/Hotels/h4.jpg') , location:'France' }
    ],
    search:undefined
  }),
    methods:{
      test(){console.log('Hello')},
      filterHotel(){
        this.filteredHotels = this.hotelsList.filter( (item) => 
        {
          if (item.title.toLowerCase().includes(this.search.toLowerCase())) 
          {
            return true;
          }
          else if (item.location.toLowerCase().includes(this.search.toLowerCase())) 
          {
            return true;
          }
          else if (item.star == this.search) 
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