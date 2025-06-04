<script setup>
    const { t } = useI18n() 
</script>

<template> 
     <div class="w-[80px] mr-[60px]"> 
        <a href="/">
            <img src="https://nuxt.com/assets/design-kit/icon-green.svg" alt="logo" />
        </a>
    </div>
    
    <!-- <div class="flex gap-12 uppercase">
        <div class="hover:scale-[1.1] transition hover:underline"> <a href="/#tinh-nang-noi-bat"> Tính Năng </a>  </div>
        <div> <a href="/#bang-gia"> Bảng Giá  </a> </div>
        <div> Hỗ trợ  </div>
    </div>  -->

    <div class="relative hidden gap-16 uppercase md:flex md:flex-row">
        <div class="relative group hover:scale-[1.1] transition">
            
            🛠️ <a href="/#tinh-nang-noi-bat" > {{ t('menu.feature') }} </a>
            <span class="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 scale-x-0 bg-green-600 group-hover:scale-x-100"></span>
        </div>
        <div class="relative group hover:scale-[1.1] transition"> 
            🏷️ <a href="/#san-pham"> {{ t('menu.product') }}  </a>
            <span class="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 scale-x-0 bg-green-600 group-hover:scale-x-100"></span>
        </div>
         <div class="relative group hover:scale-[1.1] transition"> 
            📞 <a href="/#lien-he"> {{ t('menu.contact') }}  </a>
            <span class="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 scale-x-0 bg-green-600 group-hover:scale-x-100"></span>
        </div>
    </div>
</template>

<style lang="scss">

</style>