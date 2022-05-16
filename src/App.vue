<template>
  <div class="h-screen flex">
    <div class="w-2/3">
      <MainMap />
    </div>
    <div class="w-1/3">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainMap from "@/components/map/MainMap";

export default {
  name: 'App',
  components: {
    MainMap,
    HelloWorld
  }
}
</script>
