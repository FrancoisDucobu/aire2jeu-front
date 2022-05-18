<template>
  <div
      id="map"
      ref="mapElement"
      class="basemap"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZnJhbmNvaXNkdWNvYnUiLCJhIjoiY2wzOGdsamxnMDB1ODNjbG5kMXUzdDVxeSJ9.AKfIMyioIYPZ97l5vaPTaA',
      center: [0, 0],
      map: {},
      keyword: '',
      currentMarkers: []
    };
  },
  mounted() {
    this.search();
  },
  computed: {
    ...mapGetters({ places: 'places/getPlacesList' }),
  },
  watch: {
    places( places ){
      this.updateMarkers( places );
    }
  },
  methods: {
    ...mapActions({ processFetchPlacesListAction: 'places/fetchPlacesList' }),

    search ( successCallback ) {
      if( this.keyword && this.keyword.length ){
        this.processFetchPlacesListAction({ keyword: this.keyword, successCallback })
      } else {

        navigator.geolocation.getCurrentPosition(
            position => {
              this.center = [ position.coords.longitude, position.coords.latitude ];
              this.createMap();
              this.processFetchPlacesListAction({ long:  position.coords.longitude, lat: position.coords.latitude, successCallback })
            },
            error => {
              console.log(error.message);
            },
        )

      }
    },

    updateMarkers( markers ){

      if ( Array.isArray( this.currentMarkers ) && this.currentMarkers.length ) {
        for (var i = this.currentMarkers.length - 1; i >= 0; i--) {
          this.currentMarkers[i].remove();
        }
      }

      markers.map( marker => {
        // console.log( [marker.location.lat, marker.location.lng] );
        this.currentMarkers.push( new mapboxgl.Marker()
            .setLngLat([marker.location.lng, marker.location.lat])
            .addTo(this.map) );
      })

    },

    async createMap() {
      try {
        mapboxgl.accessToken = this.accessToken;
        this.map = new mapboxgl.Map({
          container: this.$refs['mapElement'],
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 13,
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        setTimeout( () => this.map.resize(), 250 );
      } catch (err) {
        console.log("map error", err);
      }
    }
  }
};
</script>

<style scoped>
.basemap {
  width: 100%;
  height: 100%;
}
</style>