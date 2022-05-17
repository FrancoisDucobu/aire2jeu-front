import axios from 'axios'
import store from '../store'
// import {helper} from './helper'
// import {i18n}  from '../i18n.js'
// import Bugsnag from "@bugsnag/js";

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true
})

apiClient.interceptors.request.use(function (config) {
  config.headers.common['Authorization'] = store.getters['auth/getUserToken']
  return config
})

apiClient.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Bugsnag.notify(error)
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // case 419:
        window.location.href = '/connect'
        break
      case 422:
        // helper.toastify('des erreurs sont présentes dans le formulaire', {className: 'toastify-content warning'})
        store.commit('auth/setErrors', error.response.data.errors)
        return Promise.reject(error)
      case 404:
        // helper.toastify('la resource que vous rechercher est inexistante ', {className: 'toastify-content danger'})
        break
      case 500:
        // helper.toastify('erreur serveur', {className: 'toastify-content danger'})
        return Promise.reject(error)
      default:
        // alert(error.response.messageerror)
        return Promise.reject(error)
    }
  } else {
    // helper.toastify('erreur serveur', {className: 'toastify-content danger'})
    return Promise.reject(error)
  }
})

export default apiClient
