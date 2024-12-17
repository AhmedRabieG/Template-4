
<script setup>
</script>

<template>
    <header class="header bg-secondry-600 ">
        <div class="container">
            <div class="flex items-center justify-between text-smBold py-[26px]">
                <a href="#">
                    <img src="../assets/images/Aquarius.svg" alt="Aquarius">
                </a>
                <ul class=" [&>li>a]:py-4 flex items-center justify-center gap-[38px] 
                            xs:hidden lg:flex">
                    <li>
                        <a class="" href="#">Services</a>
                    </li>
                    <li>
                        <a class="" href="#">How to Works</a>
                    </li>
                    <li>
                        <a class="" href="#">About Us</a>
                    </li>
                    <li>
                        <a class="" href="#">Blogs</a>
                    </li>
                </ul>
                <a class="link link__third !gap-[13px] xs:hidden lg:flex" href="#">
                    <span>Free Trial</span>
                    <img src="../assets/images/right-arrow.svg" alt="">
                </a>

                <button class="xs:block lg:hidden" type="button">
                    <img width="58px" height="58px" src="../assets/images/nav-icon-2.svg" alt="nav-icon">
                </button>
                
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>