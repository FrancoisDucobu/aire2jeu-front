<template>
  <div class="p-2 h-full max-h-full flex flex-col">
    <div class="shrink-0">
      <TopBar />
    </div>
    <div class="max-h-full h-full overflow-scroll">
      <ResultList />
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
