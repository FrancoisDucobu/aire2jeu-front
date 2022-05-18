<template>
  <div class="p-2 h-full flex flex-col">
    <div class="shrink-0">
      <TopBar />
    </div>
    <div class="flex-1 flex flex-col">
      <ResultList />
    </div>
    <div class="shrink-0">
      bottom
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/nav/TopBar";
import ResultList from "@/components/ResultList";
export default {
  name: 'RightPanel',
  components: {ResultList, TopBar},
}
</script>
