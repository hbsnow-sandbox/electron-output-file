<template>
  <button @click="count()">Count: {{this.$store.state.Counter.main}}</button>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'counter-sample',
    components: { SystemInformation },
    methods: {
      count () {
        console.log(this.$store.dispatch('someAsyncTask'))
      }
    }
  }
</script>

<style>
</style>
