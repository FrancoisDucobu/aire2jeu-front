<template>
  <div class="p-4 h-full max-h-full flex flex-col gap-2">
    <div class="shrink-0">
      <TopBar />
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <router-view v-slot="{ Component }">
        <transition
            enter-active-class="delay-300 duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
        >
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
