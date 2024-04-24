<template>
    <div class="card-latest mt-4 mb-4" v-for="(item, index) in LatestWorkArray" :key="index">
        <img :src="item.srcImg" class="card-img-top" alt="...">
        <div class="card-body p-3 d-flex justify-content-between">
            <h6 class="bold ">{{ item.title }}</h6>
            <h6>{{ item.type }}</h6>
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
        LatestWorkArray() {
            return this.store.latestWork; 
        }
    },

}
</script>

<style lang="scss" scoped>

.card-latest {

width: 350px;
border-radius: 12px;
background-color: white;
padding: 0;


img {
    border-radius: 12px;
}

&:hover {
    background: linear-gradient(90deg, rgba(182, 36, 110, 1) 0%, rgba(249, 99, 107, 1) 100%);
    color: white;
}
}


</style>