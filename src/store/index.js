import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import authModule from './modules/authModule/index'
import placeModule from './modules/placeModule/index'

const dataState = createPersistedState({
  paths: ['auth']
})

const store = createStore({
  modules: {
    auth: authModule,
    places: placeModule,
  },
  plugins: [dataState]
})

export default store
