<template>
  <div>
    <!-- <overlay :show="isLoading"/> -->
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Overlay from '../components/Overlay.vue';
export default {
  components: {
    Header,
    Footer,
    // Overlay
  },
  
};
</script>

<style>
</style>