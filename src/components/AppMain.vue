<template>
    <div class="gradient-white-bg">
        <MainWeDo />
    </div>

    <div class="gradient-blue-bg">
        <MainGrow />
    </div>
    
    <div class="gradient-white-bg">
        <MainLatestWork />
    </div>

    <MainPricing />

</template>

<script>
import MainWeDo from './MainWeDo.vue';
import MainGrow from './MainGrow.vue';
import MainLatestWork from './MainLatestWork.vue';
import MainPricing from './MainPricing.vue';


export default {
    components: {
        MainWeDo,
        MainGrow,
        MainLatestWork,
        MainPricing,
    },
}
</script>


<style lang="scss" scoped>

</style>