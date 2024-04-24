<template>
    <div class="col" v-for="(item, index) in peopleArray" :key="index">
        <div class="card-people text-center">
            <div class="card-img">
                <img :src="item.srcImg" alt="">
            </div>
            <div class="card-vote">
                <ul class="d-flex p-0 justify-content-center gap-2">
                    <li v-for="star in item.vote" :key="star"><font-awesome-icon
                            :icon="['fas', 'star']" /></li>
                    <li v-for="star in (5 - item.vote)" :key="star"><font-awesome-icon
                            :icon="['far', 'star']" /></li>

                </ul>
            </div>
            <div class="card-text">
                <h6 class="mb-4">When, while the lovely valley teems with vpour around meand the meridian sun
                    strikes the upper surface</h6>
                <h6 class="bold">{{ item.name }}</h6>
                <h6>Marketing Manager</h6>
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
        peopleArray() {
            return this.store.people;
        },
        
    },

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

.card-vote {
    color: #B6246E;
}
</style>