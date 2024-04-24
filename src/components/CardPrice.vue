<template>

    <div class="col p-4" v-for="(item, index) in priceArray" :key="index">
        <div class="card-pricing text-center py-4" :class="item.bg">
            <span class="number-bg">{{ item.price }}</span>
            <div class="card-title">
                <h3 class="bold">{{ item.title }}</h3>
                <h6>{{ item.subtitle }}</h6>

            </div>
            <div class="card-body">
                <div class="card-price">
                    <h1 class="price"><span class="dollar">$</span>{{ item.price }}</h1>
                    <h6 :class="item.typeText">Per Month</h6>
                </div>
                <div class="card-specs pb-3">
                    <h6><span class="bold">Creative </span><span :class="item.typeText">Design Enabled</span>
                    </h6>
                    <h6><span class="bold">Vibrant </span><span :class="item.typeText">Color Usage</span>
                    </h6>
                    <h6><span class="bold">Eye </span><span :class="item.typeText">Catching Design</span>
                    </h6>
                    <h6><span class="bold">Extreme </span><span :class="item.typeText">Typography</span></h6>
                    <h6><span class="bold">Exceptional </span><span :class="item.typeText">Design</span></h6>
                </div>
                <div>
                    <button :class="item.btn">Order now <font-awesome-icon :icon="['fas', 'right-long']" /></button>
                </div>


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
        priceArray() {
            return this.store.priceCard;
        }
    },
}
</script>

<style lang="scss" scoped>
.card-pricing {
    width: 300px;
    background-color: white;
    border-radius: 24px;
    color: black;
    position: relative;

}

.number-bg {
    position: absolute;
    font-size: 250px;
    right: -10px;
    top: -110px;
    color: rgba($color: #000000, $alpha: 0.15);
}

.gradient-salmon-bg {

    color: white;

    .number-bg {
        color: rgba($color: #FFFFFF, $alpha: 0.15);
        ;
    }

    button {
        background-color: white;
        color: salmon;

        &:hover {
            color: white;
        }
    }
}

.card-title,
.card-price,
.card-specs {
    margin-bottom: 32px;
}

.price {
    position: relative;

    .dollar {
        font-size: 12px;
        position: absolute;
        top: -5px;


    }
}
</style>