<template>
  <UApp class="font-display"> 
    <div class="mt-[20px] container flex flex-col items-center mx-auto  rounded-md shadow-md  " > 
      <div class="flex items-center justify-between w-full" >
        <div class="flex items-center gap-2 grow"> 
         <Header />
        </div>
        <div> <LangSwitcher /> </div>
      </div> 
      <div>
        <NuxtPage />
      </div> 
    </div>   
    
    <div class=" mb-[10px] container mx-auto rounded-md shadow-md "> 
      <Footer />
    </div>
  </UApp>
</template>

<style lang="css"> 
html {
    scroll-behavior: smooth;
}
</style> 