<template>
  <div class="overflow-scroll">
    <div v-for="place in places" :key="place.id">
      TEST {{ place.id }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ResultList',
  components: {},
  computed: {
    ...mapGetters({ places: 'places/getPlacesList' }),
  },
}
</script>