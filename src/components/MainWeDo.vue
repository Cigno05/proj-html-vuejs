<template>
    <div>

        <div class="container-lg pt-4">
            <div class="row text-center mb-4">
                <h6 class="salmon-text">Our Servers</h6>
                <h3><span class="bold">What </span>We Do</h3>
                <h6>When, while the lovely valley teems with vpour around meand the</h6>
            </div>
            <div class="row">
                <CardWeDo />
            </div>

            <div class="text-center pb-4 pt-4">
                <button class="btn-red">View All Service</button>
            </div>
        </div>
    </div>
</template>

<script>
import CardWeDo from './CardWeDo.vue';

export default {
    components: {
        CardWeDo,
    },

}
</script>


<style lang="scss" scoped>
.card {
    height: 400px;
    width: 250px;
    padding: 30px;
    border: none;

    img {
        padding: 24px;
        width: 200px;
        height: 200px;
    }

    h5 {
        font-size: 14px;
    }
}
</style>