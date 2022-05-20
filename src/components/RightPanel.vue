<template>
  <div class="p-4 h-full max-h-full flex flex-col gap-2">
    <div class="shrink-0">
      <TopBar />
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/nav/TopBar";

export default {
  name: 'RightPanel',
  components: {TopBar},
}
</script>
