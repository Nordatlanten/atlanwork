/* eslint-disable sort-keys */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
      big: false,
      floatUp: false,
      number: 1,
      githubIcon: require('../assets/github/GitHub-Mark-Light-120px-plus@0,5x.png'),
      linkedinIcon: require('../assets/linkedin/LI-In-Bug@0,1x.png')
  },
  
  mutations: {
    toggleBig(state){
      state.big = true
    },

    toggleFloatUp(state){
      state.floatUp = true
    }
  },
})