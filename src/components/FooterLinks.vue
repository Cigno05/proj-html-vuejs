<template>
    <div class="blue-bg pt-4">
        <div class="container-lg">
            <div class="row">
                <div class="col-3">
                    <ul>
                        <li class="logo-footer">
                            <img src="/img/white-logo-2.png" alt="">
                        </li>
                        <li>
                            <h6>When, while the lovely valley teems with vpour around meand
                                the meridian sun
                                strikes the upper surface</h6>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li>
                            <h6 class="bold">Quick Links</h6>
                        </li>
                        <div class="gray-text">
                            <li>
                                <h6>Services</h6>
                            </li>
                            <li>
                                <h6>Contacts</h6>
                            </li>
                            <li>
                               <h6>Blog</h6> 
                            </li>
                        </div>

                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li>
                            <h6 class="bold">Resources</h6>
                        </li>
                        <div class="gray-text">
                            <li>
                                <h6>Art Design</h6>
                            </li>
                            <li>
                               <h6>Computer</h6>
                            </li>
                            <li>
                                <h6>IT New</h6>s
                            </li>
                            <li>
                                <h6>Networking</h6>
                            </li>
                            <li>
                                <h6>Web Security</h6>
                            </li>
                        </div>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li>
                            <h6 class="bold">Contact Us</h6>
                        </li>
                        <li>
                            <h6>Address: <span class="gray-text">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</span> </h6>
                        </li>
                        <li>
                            <h6>Phone: <span class="gray-text">+99(0) 101 0000 888</span></h6>
                        </li>
                        <li>
                            <h6>Email: <span class="gray-text">info@yourdomain.com</span></h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-between pt-4">
                    <div>
                        <h6><font-awesome-icon :icon="['far', 'copyright']" /> 2020 Phlox. All Rights Reserved.</h6>
                    </div>
                    <div class="social">
                        <ul class="d-flex gap-4">
                            <li>
                                <h6><font-awesome-icon :icon="['fab', 'instagram']" /></h6>
                            </li>
                            <li>
                                <h6><font-awesome-icon :icon="['fab', 'linkedin-in']" /></h6>
                            </li>
                            <li>
                                <h6><font-awesome-icon :icon="['fab', 'facebook-f']" /></h6>
                            </li>
                            <li>
                                <h6><font-awesome-icon :icon="['fab', 'x-twitter']" /></h6>
                            </li>
                        </ul>
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
.logo-footer {
    img {
        width: 70px;
        padding-bottom: 20px;
    }
}


</style>