<template>
  <div class="h-full max-h-full flex flex-col gap-3">
    <div class="shrink-0 text-xl font-bold">
      Resultats
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <div class="flex flex-col gap-2">
        <template
            v-for="place in places"
            :key="place"
        >
          <BadgePlace
              :place="place"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BadgePlace from "@/components/Place/components/BadgePlace";

export default {
  name: 'ResultList',
  components: {BadgePlace},
  computed: {
    ...mapGetters({ places: 'places/getPlacesList' }),
  },
  methods: {
    ...mapActions({ fetchPlace: 'places/fetchPlace' }),
  }
}
</script>
