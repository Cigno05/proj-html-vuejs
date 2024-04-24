<template>
    <div class="blue-bg">
        <div class="container-lg">
            <div class="row">
                <div class="col-6 position-relative">
                    <img src="/img/men-data.png" class="front-img z-2" alt="">
                    <img src="/img/nemoodar.png" class="back-img z-1" alt="">

                </div>
                <div class="col-6">
                    <div class="card-grow">
                        <div class="card-body">
                            <h6>Start Your Project</h6>
                            <h2 class="bold">Grow Your Business</h2>
                            <h2>With Our Strategy</h2>
                            <h6 class="blue-text">When, while the lovely valley teems with vpour around meand the
                                meridian sun
                                strikes the upper surface</h6>
                            <a href="#" class="btn btn-red me-3">Try it now</a>
                            <a href="#" class="btn btn-blue">Explore more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-lg {
    padding: 60px 120px;
    padding-bottom: 100px;
}

.card-grow {
    padding-top: 20px;
}

img {
    width: 200px;
    margin-left: 40px;

    &.front-img {
        position: absolute;
        left: 0px;
    }

    &.back-img {
        position: absolute;
        left: -30px;
        bottom: 30px;

    }
}
</style>