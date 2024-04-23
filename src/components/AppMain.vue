<template>
        <MainWeDo />
        <MainGrow />
        <MainLatestWork />
        <MainPricing />
        <MainLatestPost />

</template>

<script>
import MainWeDo from './MainWeDo.vue';
import MainGrow from './MainGrow.vue';
import MainLatestWork from './MainLatestWork.vue';
import MainPricing from './MainPricing.vue';
import MainLatestPost from './MainLatestPost.vue'

export default {
    components: {
        MainWeDo,
        MainGrow,
        MainLatestWork,
        MainPricing,
        MainLatestPost,
    },
}
</script>


<style lang="scss" scoped>

</style>