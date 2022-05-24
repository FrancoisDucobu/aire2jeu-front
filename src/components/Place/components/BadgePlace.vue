<template>
  <div
      class="border rounded-md p-2 flex flex-col"
  >
    <div class="flex flex-row gap-1" @click="$router.push({ name: 'place_view', params: { place_id: place.id } })">
            <span
                class="w-6 h-6 rounded-md shrink-0 text-white p-1 flex items-center justify-center"
                :class="`bg-[${ place.marker.bg_color }] text-[${place.marker.fg_color}]`"
            >
              <font-awesome-icon :icon="['fal', place.marker.icon ?? 'map-marker-alt' ]" size="xs" fixed-width></font-awesome-icon>
            </span>
      <h1
          class="font-medium text-md flex-1"
      ># {{ place.id }} {{ place.name }}</h1>
      <div class="shrink-0">
              <span class="bg-blue-400 text-white rounded-md text-xs px-2 py-1" v-html="cDistance">
              </span>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex-1 text-xs" v-html="place.address"></div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BadgePlace',
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cDistance(){
      return this.place.location.distance > 1000 ? ( ( Math.round( this.place.location.distance / 10 ) / 100 ).toLocaleString() + ' km' ) : ( this.place.location.distance.toLocaleString() + ' m' )
    }
  },
  methods: {
  }
}
</script>