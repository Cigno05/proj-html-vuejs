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
                
                <div class="card-latest mt-4 mb-4">
                    <img src="/img/city.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-3 d-flex justify-content-between">
                        <h6 class="bold ">Purinky products</h6>
                        <h6>Digital Experience</h6>
                    </div>
                </div>
                
                <div class="card-latest mt-4 mb-4">
                    <img src="/img/dazzle.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-3 d-flex justify-content-between">
                        <h6 class="bold ">Purinky products</h6>
                        <h6>Digital Experience</h6>
                    </div>
                </div>
                
                <div class="card-latest mt-4 mb-4">
                    <img src="/img/dry.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-3 d-flex justify-content-between">
                        <h6 class="bold ">Purinky products</h6>
                        <h6>Digital Experience</h6>
                    </div>
                </div>
                
                <div class="card-latest mt-4 mb-4">
                    <img src="/img/city.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-3 d-flex justify-content-between">
                        <h6 class="bold ">Purinky products</h6>
                        <h6>Digital Experience</h6>
                    </div>
                </div>
                
                <div class="card-latest mt-4 mb-4">
                    <img src="/img/phone.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-3 d-flex justify-content-between">
                        <h6 class="bold ">Purinky products</h6>
                        <h6>Digital Experience</h6>
                    </div>
                </div>

            </div>
            <div class="d-flex justify-content-center gap-2 pb-4">
                <font-awesome-icon :icon="['fas', 'circle']" class="salmon-text icon-point"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point"/>
                <font-awesome-icon :icon="['fas', 'circle']" class="gray-text icon-point"/>
            </div>
        </div>


    </div>
</template>

<script>
export default {

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

.arrow{
    button {
        border-radius: 50%;
        border:2px solid salmon;
        color: salmon;
    }
}

.icon-point{
    font-size: 8px;
}

</style>