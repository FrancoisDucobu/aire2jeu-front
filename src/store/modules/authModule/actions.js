/* eslint-disable */
// import apiClient from '@u/apiClient'
// import router from '@/router'
// import Bugsnag from "@bugsnag/js";
// noinspection NpmUsedModulesInstalled
import axios from "axios";
import apiClient from "../../../utils/apiClient";
// import { Storage } from '@capacitor/storage'

export default {
  async login({ commit, dispatch }, payload) {
    console.log("payload", payload);
    await axios
      .create({
        baseURL: payload.loginData.url,
        responseType: "json",
      })
      .get("/api.php/auth" + "?access_token=" + payload.loginData.access_token)
      .then(async (response) => {
        if (response.status === 200 && response.data.success) {
          commit("setUserUrl", {
            url: payload.loginData.url,
          });
          commit("setUserToken", {
            token: response.data.data.token,
          });

          dispatch("refreshAuth", { successCallback: payload.successCallback });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  },

  async refreshAuth({ commit, state }, payload) {
    console.log("refreshAuth", payload);
    await apiClient
      .get("/api.php/auth")
      .then(async (response) => {
        if (response.status === 200 && response.data.success) {
          commit("setAuthUser", response.data.data);
          if (payload.successCallback) {
            payload.successCallback();
          }
        }
      })
      .catch((error) => {
        commit("setErrors", {
          errors: error.response,
        });
      });
  },
  // async logout({commit}, payload) {
  //     await commit('setAuth', {auth: {}, expiration: null, errors: []})
  //     localStorage.removeItem('vuex')
  //     router.push({name: 'login'})
  // },
  // async initPusher({commit, state}, payload) {
  //  apiClient.get('/api/getPusherKey').then(async response => {
  //      console.log("response.key", response.data.key)
  //      payload.successCallback(response.data.key)
  //  })
  //      .catch(error => {console.error(error)})
  //
  // }
};
