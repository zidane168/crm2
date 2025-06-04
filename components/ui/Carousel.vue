<style>
.carousel__item {
    text-align: center;
}
.carousel__item img {
    max-width: 100%;
    height: auto;
}
</style>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true
}

const imageUrls = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg", 
];

</script>

<template>
  <!-- <Carousel v-bind="carouselConfig"></Carousel> -->
  <Carousel>
    <Slide v-for="(slide, index) in imageUrls" :key="index">
        <div class="carousel__item">
            <img :src="slide" alt="" /> 
        </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>