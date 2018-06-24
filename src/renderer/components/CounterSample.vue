<template>
  <button @click="count()">Count: {{this.$store.state.Counter.main}}</button>
</template>

<script>
  export default {
    name: 'counter-sample',
    methods: {
      count () {
        this.$store.dispatch('someAsyncTask')
      }
    }
  }
</script>

<style>
</style>
