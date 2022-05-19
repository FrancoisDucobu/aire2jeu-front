import apiClient from "../../../utils/apiClient";

export default {
  async fetchPlacesList({ commit }, payload) {
    if (payload.long && payload.lat) {
      await apiClient
        .get(`/api/place?longitude=${payload.long}&latitude=${payload.lat}`)
        .then(async (response) => {
          if (response.status === 200 && response.data.data ) {
            commit("setPlacesList", {
              placesList: response.data.data,
            });
            if (payload.successCallback) {
              payload.successCallback();
            }
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    } else if (payload.keyword) {
      await apiClient
        .get(`/api/place?keyword=${payload.keyword}`)
        .then(async (response) => {
          if (response.status === 200 && response.data.success) {
            commit("setMunicipalitiesList", {
              municipalitiesList: response.data.data,
            });
            if (payload.successCallback) {
              payload.successCallback();
            }
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    }
  },

  async fetchPlace({ commit }, payload) {
    console.log( 'fetchPlace',payload );
    await apiClient
      .get(
        `/api/place/${payload.id}`
      )
      .then(async (response) => {
        if (response.status === 200 && response.data.success) {
          commit("setPlace", { place: response.data.data });
          if (payload.successCallback) {
            payload.successCallback();
          }
        }
      })
      .catch((reason) => {
        console.error(reason);
      });
  },
};
