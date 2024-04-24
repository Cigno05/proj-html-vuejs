<template>
    <div class="white-bg">
        <div class="container-lg pt-4">
            <div class="row">
                <div class="col" v-for="(item, index) in sponsorArray" :key="index">
                    <img :src="item.srcImg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
        }
    },
    computed: {
        sponsorArray() {
            return this.store.sponsorImg;
        }
    },
}
</script>

<style lang="scss" scoped>
.col {
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100px;
    }
}
</style>