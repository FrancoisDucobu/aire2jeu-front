<template>
  <h1 class="text-3xl font-bold underline">
    <font-awesome-icon :icon="['fas', 'users']" ></font-awesome-icon>
    Hello world!
  </h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
