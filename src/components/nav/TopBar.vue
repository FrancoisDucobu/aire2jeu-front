<template>
  <div class="flex flex-row">
    <div class="flex-1">
      <div class="text-3xl font-bold font-sans">Aire de jeux</div>
    </div>
    <div class="shrink-0">
      <div class="rounded-md border border-indigo-200 p-1 flex flex-row items-center text-base gap-2">
        <div class="w-8 h-8 rounded-full border flex justify-center items-center border-gray-200">FD</div>
        Francois Ducobu
        <div class="mr-1">
          <font-awesome-icon :icon="['fal', 'angle-down']"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
}
</script>
