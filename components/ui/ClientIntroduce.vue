<template> 
    <div class=" mt-[50px] items-center text-center flex flex-col gap-6 md:grid md:grid-cols-4 md:container md:mx-auto md:p-8"> 
        <div v-for="(img, index) in imageUrls" :key="index" class="w-[200px] md:w-[200px] hover:scale-[1.3] transition hover:cursor-pointer">
            <img :src="img['url']" :alt="img['name']" />
        </div>
    </div>
</template>

<script setup>
    const imageUrls = [

        { name: 'chung-hing', url: "img/logo/chung-hing.png"},
        { name: 'cidc-kids', url: "img/logo/cidc-kids.png"},
        { name: 'crystal-jade', url: "img/logo/crystal-jade.png"},
        { name: 'ecpark', url: "img/logo/ecpark.png"},

        { name: 'ibmsm', url: "img/logo/ibmsm.png"},
        { name: 'metrosouth', url: "img/logo/metrosouth.png"},
        { name: 'dragon-fire', url: "img/logo/dragon-fire.png"},
        { name: 'cityu-vmc', url: "img/logo/cityu-vmc.png"}, 
    ];

</script>