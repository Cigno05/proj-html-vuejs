<template>
    <div class="gradient-blue-bg-hb pt-4">
        <div class="container-lg">
            <div class="row">
                <div class="col-7">
                    <h3 class="bold">We Offer Awesome Services</h3>
                    <h6>When, while the lovely valley teems with vpour around meand the upper surface</h6>
                </div>
                <div class="col-5 d-flex position-relative">
                    <input type="text" placeholder="Enter Your Email Adress">
                    <button class="btn-blue">Subscribe</button>
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
.row {
    background: linear-gradient(90deg, rgba(182, 36, 110, 1) 0%, rgba(249, 99, 107, 1) 100%);
    color: white;
    border-radius: 24px;
    padding: 48px 12px;
    
    input {
        width: 100%;
        align-self: center;
        border: none;
        border-radius: 24px;
        padding: 10px;
    }
    button {
        position: absolute;
        top: 14px;
        right: 18px;
    }
}

</style>