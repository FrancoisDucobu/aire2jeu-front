<template>
  <div class="shrink-0">
    Résultat de la recherche
  </div>
  <div class="flex" v-if="places.length > 0">
    <div class="flex-1 flex flex-col h-auto overflow-y-scroll">
      <div v-for="place in places" :key="place.id">
        TEST {{ place.id }}
      </div>
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