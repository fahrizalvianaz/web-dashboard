<script setup>
    import NavBar from '@/components/NavBarComponent.vue'
    import SideBar from '@/components/SideBarComponent.vue';
    import MainContent from '@/components/MainComponent.vue'
    // import Footer from '@/components/FooterComponent.vue  '
</script>

<template>
  <NavBar />
  <div class="flex flex-col">
    <SideBar />
    <MainContent />
  </div>
</template>

<style scoped>
</style>
