<template>
    <div class="gradient-blue-bg">
        <div class="header__container">
            <nav class="navbar navbar-expand-lg container-lg d-flex">
                <div class="me-auto">
                    <a class="navbar-brand" href="#">
                        <img src="/img/white-logo-2.png" alt="Bootstrap" width="30" height="24">
                    </a>
                </div>
                <div class="d-flex">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link salmon-text" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                    </ul>
    
                </div>
                <button class="btn-blue ms-4" type="">Sign in</button>
    
    
            </nav>
            <div class="jumbo">
                <div class="container-lg mt-4">
                    <div class="row">
                        <div class="col-5 mt-4">
                            <div class="card-jumbo">
                                <div class="card-body">
                                    <h2 class="bold">Business Planning</h2>
                                    <h2 >Digital Technology</h2>
                                    <h2 class="bold">Modern Solution!</h2>
                                    <h6 class="blue-text">When, while the lovely valley teems with vpour around meand the meridian sun
                                        strikes the upper surface</h6>
                                    <a href="#" class="btn btn-red me-3">Try it now</a>
                                    <a href="#" class="btn btn-blue">Explore more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <img src="/img/header.png" alt="">
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
.header__container {
    padding-bottom: 100px;
}
nav {
    background-color: transparent;
}

.navbar-brand {
    img {
        width: 70px;
    }
}

.jumbo {
    
    h6 {
        
        padding: 20px 20px 20px 0;

    }

    img {
        height: 400px;
    }
}

.card-jumbo {
    padding:50px 80px 50px 0;
}
</style>