<template>
  <div class="h-full max-h-full flex flex-col gap-3">
    <div class="shrink-0 text-xl font-bold">
      Resultats
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <div class="flex flex-col gap-2">
        <div
            v-for="place in places"
            :key="place.id"
            class="border rounded-md p-2 flex flex-col"
        >
          <div class="flex flex-row gap-1" @click="fetchPlace( {id: place.id} )">
            <span class="w-6 h-6 rounded-md shrink-0 bg-red-400 text-white p-1 flex items-center justify-center">
              <font-awesome-icon :icon="['fal','map-marker-alt']" size="xs" fixed-width></font-awesome-icon>
            </span>
            <h1
                class="font-medium text-md"
            ># {{ place.id }} {{ place.name }}</h1>
          </div>
          <div class="flex flex-row">
            <div class="flex-1" v-html="place.address"></div>
            <div class="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ResultList',
  computed: {
    ...mapGetters({ places: 'places/getPlacesList' }),
  },
  methods: {
    ...mapActions({ fetchPlace: 'places/fetchPlace' }),
  }
}
</script>
