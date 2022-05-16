<template>
  <VMap :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import 'v-mapbox/dist/v-mapbox.css';
import mapbox from "mapbox-gl";
import { VMap } from "v-mapbox";

export default {
  components: {
    VMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiZnJhbmNvaXNkdWNvYnUiLCJhIjoiY2wzOGdsamxnMDB1ODNjbG5kMXUzdDVxeSJ9.AKfIMyioIYPZ97l5vaPTaA',
      mapStyle: 'light-v10'
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = mapbox;
  }
};
</script>

<style scoped>
.mglmap {
  height: 100vh;
  position: absolute;
  z-index: 0;
}
</style>