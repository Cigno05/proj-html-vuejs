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

</template>

<script>
import MainWeDo from './MainWeDo.vue';
import MainGrow from './MainGrow.vue';
import MainLatestWork from './MainLatestWork.vue';


export default {
    components: {
        MainWeDo,
        MainGrow,
        MainLatestWork,
    },
}
</script>


<style lang="scss" scoped>

</style>