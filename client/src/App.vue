<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import MainLayout from './layouts/mainLayout'

export default {
  name: 'App',
  components: {
    MainLayout,
  }
}
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
</style>
