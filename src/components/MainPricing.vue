<template>
    <div class="gradient-blue-bg-ht">
        <div class="container-lg pt-4">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h6 class="salmon-text">Price List</h6>
                    <h3><span class="bold">Our </span>Pricing</h3>
                    <h6>When, while the lovely valley teems with vpour around meand the upper surface</h6>
                </div>
            </div>
            <div class="container">
                <div class="row cards">
                    <CardPrice />
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import CardPrice from './CardPrice.vue';


export default {
    components: {
        CardPrice,
    },


}
</script>

<style lang="scss" scoped></style>