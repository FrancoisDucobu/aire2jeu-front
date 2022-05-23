<template>
  <div class="h-full max-h-full flex flex-col gap-3">
    <div v-if="loading || place === null">
      Loading
    </div>
    <div v-else-if="error !== null">
      {{ error }}
    </div>
    <div
        v-else
        class="flex flex-row items-center gap-2"
    >
      <div class="w-6 h-6 rounded-md bg-blue-400 flex items-center justify-center text-white" @click="$router.push({ name: 'place_index'})">
        <font-awesome-icon :icon="['fal','angle-left']"></font-awesome-icon>
      </div>
      <div class="flex-1 text-xl font-bold">
        Place {{ place.id }}
      </div>
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <div class="flex flex-col gap-2">

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ViewPlace',
  data() {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    ...mapGetters({ place: 'places/getPlace' }),
  },
  methods: {
    ...mapActions({ fetchPlace: 'places/fetchPlace' }),
  },
  mounted() {
    try {
      this.loading = true
      this.error = null
      this.fetchPlace({
        id: this.$route.params.place_id,
        successCallback: () => {
          this.loading = false
          console.log(this.place);
        }
      });
    } catch (error) {
      this.error = error.toString()
    }
  },
}
</script>
