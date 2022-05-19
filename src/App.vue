<template>
  <div class="h-screen max-h-screen overflow-hidden flex">
    <div class="w-2/3">
      <MainMap />
    </div>
    <div class="w-1/3">
      <RightPanel />
    </div>
  </div>
</template>

<script>
import RightPanel from './components/RightPanel.vue'
import MainMap from "@/components/map/MainMap";

export default {
  name: 'App',
  components: {
    MainMap,
    RightPanel
  }
}
</script>
