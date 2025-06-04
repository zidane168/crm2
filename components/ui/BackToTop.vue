<template>
    <button
      v-show="visible"
      class="scroll-top"
      aria-label="Back to top"
      @click="scrollTop"
    >
      ▲
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const THRESHOLD = 200              // show button after 200 px
  const visible = ref(false)
  
  const onScroll = () => {
    visible.value = window.scrollY > THRESHOLD
  }
  
  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
  
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  </script>
  
  <style scoped> 
  .scroll-top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: .6rem 1rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 4px;
    background: #333;
    color: #fff;
    cursor: pointer;
    opacity: 0.85;
    transition: opacity .3s;
  }
  .scroll-top:hover { opacity: 1; }
  </style>