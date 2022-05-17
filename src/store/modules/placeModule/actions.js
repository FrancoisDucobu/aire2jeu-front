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

  async fetchMunicipality({ commit }, payload) {
    console.log( 'fetchMunicipality',payload );
    await apiClient
      .get(
        `/api.php/commune/${payload.municipalityId}?include_cities=true&include_poi=true`
      )
      .then(async (response) => {
        if (response.status === 200 && response.data.success) {
          commit("setMunicipality", { municipality: response.data.data });
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
