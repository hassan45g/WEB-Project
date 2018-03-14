<template>
  <v-container fluid class="container">
    <v-slide-y-transition mode="in-out">
      <v-layout column >

        <div style="width: 100%;">
          <v-parallax :src="require('@/assets/image2.jpeg')" height="500">
            <div class="content">
              <blockquote>
                <h1 class="display-3 white--text">Welcome To GuidaTour</h1>
                <img src="@/assets/logo.png" alt="Guidatour">
                <footer>
                  <small class="display-1 white--text">
                    
                  </small>
                </footer>
              </blockquote>
            </div>
          </v-parallax>
        </div>
        <div>
          
            <v-card flat tile>
              <v-card-title class="info white--text">
                <strong class="subheading">Get The best deals on Hotels, Restaurants and Travel</strong>
                <v-spacer></v-spacer>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  icon
                  dark
                  class="mx-3"
                >
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="grey lighten-3">
                <v-layout>
                  <v-flex
                    v-for="(col, i) in rows"
                    :key="i"
                    xs3
                  >
                    <span class="body-2" v-text="col.title.toUpperCase()"/>
                    <div
                      v-for="(child, i) in col.children"
                      :key="i"
                      v-text="child"
                    />
                  </v-flex>
                  
                </v-layout>
              </v-card-text>
            </v-card>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>
  /* {
    background-image: url('http://www.gritfx.com/FREE_photos/0048.JPG');
    height: 500px;
  }
*/ div .content{
    color: aqua;
    align-content: center;
    text-align: center;
    padding: 20px;
    margin: auto;
    background-size: cover;
    height:100%
  }
  .container{
    padding: 0;
    margin:0;
  }
  .para{
    height: 100%;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>


<script>
  export default {
    data: () => ({
      gradient: 'to top left',
      search:undefined
    }),
    methods:{
      test(){console.log('Hello')}
    },
    watch:{
      search: function(val,oldVal)
      {
        console.log('Change detected')
      }
    }
  }
</script>
