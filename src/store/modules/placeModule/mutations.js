export default {
  setPlacesList(state, payload) {
    state.placesList = payload.placesList;
  },
  setMunicipality(state, payload) {
    state.place = payload.place;
  },
};
