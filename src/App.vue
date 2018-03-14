<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="sideNav"
      fixed
      temporary
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dense clipped-left="true">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">
          Guidatour
        </router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-spacer ></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="item in menuItems"
          :key="item.title"
          
        >
        <v-btn
          flat
          @click="activePage(item.title)"
          router
          :to="item.link"
          
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>

      </router-view>
      <app-footer></app-footer> 
    </main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import AppFooter from '@/components/AppFooter'
// Helpers
import colors from 'vuetify/es5/util/colors'

export default {
  data () {
    return {
      sideNav: false,
      mActivePage:'',
      menuItems: [
        { icon: 'home' , title: 'Home', link:'/' , isActive: true},
        { icon: 'flight' , title: 'Travel' , link: '/travel' , isActive: false},
        { icon: 'restaurant_menu' , title: 'Restaurants' , link:'/restaurants' , isActive: false},
        { icon: 'location_city' , title: 'Hotels' , link: '/hotels' , isActive: false},
        { icon: 'face' , title: 'Sign Up' , link: '/signup' , isActive: false},
        { icon: 'lock_open' , title: 'Log In' , link: '/login' , isActive: false},
      ]
    }
  },
  methods: {
    activePage(title) 
    {
      this.mActivePage = title;
      for(var i = 0; i < 6; i++)
      {
        if(title !== 'Log in' && title !== 'Sign Up')
        {
          if(this.menuItems[i].title !== title){
            //console.log("This is it " + this.menuItems[i].isActive)
            this.menuItems[i].isActive = false;
          }
          else {
            this.menuItems[i].isActive = true
            console.log(this.menuItems[i].title)
          }
        }
      }
    }
  },
  components: {AppFooter}
}

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2, // #E53935
    secondary: colors.grey.lighten1, // #FFCDD2
    accent: colors.red.accent2, // #3F51B5
    info: colors.blue.lighten1
  }
})
</script>
