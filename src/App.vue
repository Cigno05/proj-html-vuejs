<template>
  <div class="position-relative">
    <AppHeader />
    <AppMain />
    <AppFooter />
    <ChatWithUs />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ChatWithUs from './components/ChatWithUs.vue'


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ChatWithUs,
  },

}
</script>

<style lang="scss">
@use 'bootstrap';
@use './style/general';
</style>
