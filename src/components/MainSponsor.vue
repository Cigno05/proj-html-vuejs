<template>
    <div class="white-bg">
        <div class="container-lg pt-4">
            <div class="row">
                <div class="col">
                    <img src="/img/clienty-1.png" alt="">
                </div>
                <div class="col">
                    <img src="/img/clienty-2.png" alt="">
                </div>
                <div class="col">
                    <img src="/img/clienty-3.png" alt="">
                </div>
                <div class="col">
                    <img src="/img/clienty-4.png" alt="">
                </div>
                <div class="col">
                    <img src="/img/clienty-5.png" alt="">
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
.col {
    width: calc(100% / 5);
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100px;
    }
}
</style>