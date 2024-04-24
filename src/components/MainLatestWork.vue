<template>
    <div class="white-bg">
        <div class="container-lg pt-4">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col d-flex justify-content-between align-items-center">
                    <div class="title">
                        <h6 class="salmon-text">Products</h6>
                        <h3><span class="bold">latest </span>work</h3>
                    </div>
                    <div class="arrow d-flex gap-3">
                        <button class="prev"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
                        <button class="next"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-fluid">
            <div class="row d-flex flex-nowrap gap-4 justify-content-center overflow-x-hidden">
                <CardLatestWork />
            </div>
            <div class="d-flex justify-content-center gap-2 pb-4">
                <font-awesome-icon :icon="['fas', 'circle']" class="salmon-text icon-point" />
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point" />
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point" />
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point" />
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point" />
            </div>
        </div>


    </div>
</template>

<script>
import CardLatestWork from './CardLatestWork.vue'

export default {
    components: {
        CardLatestWork,
    },

}
</script>


<style lang="scss" scoped>
.arrow {
    button {
        border-radius: 50%;
        border: 2px solid salmon;
        color: salmon;
    }
}

.icon-point {
    font-size: 8px;
}
</style>