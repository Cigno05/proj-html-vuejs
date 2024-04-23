<template>
    <div class="white-bg">
        <div class="container-lg pt-4">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h6 class="salmon-text">Testimonial</h6>
                    <h3><span class="bold">Wath </span>People Say</h3>
                    <h6>When, while the lovely valley teems with vpour around meand the upper surface</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="card-people text-center">
                        <div class="card-img">
                            <img src="/img/people-1.png" alt="">
                        </div>
                        <div class="card-vote">
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                        </div>
                        <div class="card-text">
                            <h6 class="mb-4">When, while the lovely valley teems with vpour around meand the meridian sun
                                strikes the upper surface</h6>
                            <h6 class="bold">Michkel Anegl</h6>
                            <h6>Marketing Manager</h6>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-people text-center">
                        <div class="card-img">
                            <img src="/img/people-2.png" alt="">
                        </div>
                        <div class="card-vote">
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                        </div>
                        <div class="card-text">
                            <h6 class="mb-4">When, while the lovely valley teems with vpour around meand the meridian sun
                                strikes the upper surface</h6>
                            <h6 class="bold">Michkel Anegl</h6>
                            <h6>Marketing Manager</h6>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-people text-center">
                        <div class="card-img">
                            <img src="/img/people-3.png" alt="">
                        </div>
                        <div class="card-vote">
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                            <font-awesome-icon :icon="['far', 'star']" />
                        </div>
                        <div class="card-text">
                            <h6 class="mb-4">When, while the lovely valley teems with vpour around meand the meridian sun
                                strikes the upper surface</h6>
                            <h6 class="bold">Michkel Anegl</h6>
                            <h6>Marketing Manager</h6>
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

.card-people {
    padding: 24px 32px;

    &>* {
        margin-bottom: 32px;
    }

}

.card-img {
    
    img {
        width: 120px;
        border: 3px solid #B6246E;
        border-radius: 50%;
    }
}

.card-vote{
    color: #B6246E;
}
</style>