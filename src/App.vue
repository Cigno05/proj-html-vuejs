<template>
  <div>
    <h1>App <font-awesome-icon :icon="['fas', 'house']" /></h1>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue'


  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter,
    },
    
  }
</script>

<style lang="scss" >
@use 'bootstrap';
@use './style/general';

</style>
