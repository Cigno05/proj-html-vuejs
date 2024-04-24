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
                <div class="row cards" >
                    <CardPrice />
                </div>

                <!-- <div class="row cards">
                    <div class="col p-4">
                        <div class="card-pricing text-center py-4">
                            <span class="number-bg">40</span>
                            <div class="card-title">
                                <h3 class="bold">Designing</h3>
                                <h6>PROCESS</h6>
                            </div>
                            <div class="card-body">
                                <div class="card-price">
                                    <h1 class="price"><span class="dollar">$</span>40</h1>
                                    <h6 class="gray-text">Per Month</h6>
                                </div>
                                <div class="card-specs pb-3">
                                    <h6><span class="bold">Creative </span><span class="gray-text">Design Enabled</span>
                                    </h6>
                                    <h6><span class="bold">Vibrant </span><span class="gray-text">Color Usage</span>
                                    </h6>
                                    <h6><span class="bold">Eye </span><span class="gray-text">Catching Design</span>
                                    </h6>
                                    <h6><span class="bold">Extreme </span><span class="gray-text">Typography</span></h6>
                                    <h6><span class="bold">Exceptional </span><span class="gray-text">Design</span></h6>
                                </div>
                                <div>
                                    <button class="btn btn-red">Order now <font-awesome-icon
                                            :icon="['fas', 'right-long']" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col p-4">
                        <div class="card-pricing text-center py-4 gradient-salmon-bg">
                            <span class="number-bg">60</span>
                            <div class="card-title">
                                <h3 class="bold">Designing</h3>
                                <h6>PROCESS</h6>
                            </div>
                            <div class="card-body">
                                <div class="card-price">
                                    <h1 class="price"><span class="dollar">$</span>60</h1>
                                    <h6>Per Month</h6>
                                </div>
                                <div class="card-specs pb-3">
                                    <h6><span class="bold">Creative </span>Design Enabled</h6>
                                    <h6><span class="bold">Vibrant </span>Color Usage</h6>
                                    <h6><span class="bold">Eye </span>Catching Design</h6>
                                    <h6><span class="bold">Extreme </span>Typography</h6>
                                    <h6><span class="bold">Exceptional </span>Design</h6>
                                </div>
                                <div>
                                    <button class="btn-white">Order now <font-awesome-icon
                                            :icon="['fas', 'right-long']" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col p-4">
                        <div class="card-pricing text-center py-4">
                            <span class="number-bg">80</span>
                            <div class="card-title">
                                <h3 class="bold">Designing</h3>
                                <h6>PROCESS</h6>
                            </div>
                            <div class="card-body">
                                <div class="card-price">
                                    <h1 class="price"><span class="dollar">$</span>80</h1>
                                    <h6 class="gray-text">Per Month</h6>
                                </div>
                                <div class="card-specs pb-3">
                                    <h6><span class="bold">Creative </span><span class="gray-text">Design Enabled</span>
                                    </h6>
                                    <h6><span class="bold">Vibrant </span><span class="gray-text">Color Usage</span>
                                    </h6>
                                    <h6><span class="bold">Eye </span><span class="gray-text">Catching Design</span>
                                    </h6>
                                    <h6><span class="bold">Extreme </span><span class="gray-text">Typography</span></h6>
                                    <h6><span class="bold">Exceptional </span><span class="gray-text">Design</span></h6>
                                </div>
                                <div>
                                    <button class="btn btn-red">Order now <font-awesome-icon
                                            :icon="['fas', 'right-long']" /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> -->

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

<style lang="scss" scoped>

</style>