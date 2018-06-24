<template>
  <div>
    <input @change="select" type="file" name="file">
    <button @click="convert">変換</button>
    <p>{{this.$store.state.OutputFile.error}}</p>
  </div>
</template>

<script>
  export default {
    name: 'counter-sample',
    methods: {
      select (e) {
        e.preventDefault()
        this.$store.dispatch('select', e.target.files)
      },
      convert () {
        this.$store.dispatch('convert')
      }
    }
  }
</script>

<style>
</style>
