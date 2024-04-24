<template>
    <div>
        <MainService />
        <FooterLinks />
    </div>
</template>

<script>
import MainService from './MainService.vue';
import FooterLinks from './FooterLinks.vue'


    export default {
        components: {
            MainService,
            FooterLinks,
            
        },
    }
</script>

<style lang="scss" scoped>

</style>