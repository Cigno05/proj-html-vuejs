<template>
    <MainWeDo />
    <MainGrow />
    <MainLatestWork />
    <MainPricing />
    <MainLatestPost />
    <MainPeople />
    <MainSponsor />

</template>

<script>
import MainWeDo from './MainWeDo.vue';
import MainGrow from './MainGrow.vue';
import MainLatestWork from './MainLatestWork.vue';
import MainPricing from './MainPricing.vue';
import MainLatestPost from './MainLatestPost.vue';
import MainPeople from './MainPeople.vue';
import MainSponsor from './MainSponsor.vue'

export default {
    components: {
        MainWeDo,
        MainGrow,
        MainLatestWork,
        MainPricing,
        MainLatestPost,
        MainPeople,
        MainSponsor,
    },
}
</script>


<style lang="scss" scoped></style>