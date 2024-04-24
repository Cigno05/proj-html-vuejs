<template>
    <div class="col" v-for="(item, index) in weDoArray" :key="index">
        <div class="card d-flex justify-content-center">
            <img :src="item.srcImg" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title mb-4 bold">{{ item.title }}</h5>
                <h6 class="card-text">{{ item.description }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    computed: {
        weDoArray() {
            return this.store.weDo;
        }
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