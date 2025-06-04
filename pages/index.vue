<template>
    <!-- tham khao: https://www.evonthieu.com/ -->
  
    <div class="p-4">
      <div class="mt-[50px] w-[100%] mx-auto md:w-full">
          <Carousel />
      </div>
  
      <div class="w-[400px] p-2 mx-auto md:p-4 md:flex-wrap md:flex md:w-full text-justify">
        <div>
          <em>  
            {{ t("home.title") }}
          </em>
        </div> 

        <div class="mt-[50px]">
          <em> {{ t("home.signal") }} </em>
        </div> 
      </div>  

      <div class="mt-[50px]">
        <h3 id="san-pham" 
          class="animate__animated animate__bounce slideInLeft animate__delay-2s
          
          mb-2 md:text-4xl text-3xl font-bold text-center bg-orange-600 p-2 text-white rounded-lg uppercase w-[400px] mx-auto md:w-full">  
           🏷️ {{  t('title.product')  }}
        </h3>
        <ClientIntroduce /> 
      </div> 

      <div class="paragraph"> 
        <h3 id="lien-he"  
          class="mb-2 md:text-4xl text-3xl font-bold text-center bg-orange-600 p-2 text-white rounded-lg uppercase w-[400px] mx-auto md:w-full">     
          📞 {{  t('title.contact')  }} 
        </h3>
      
        <div style="background: rgba(148, 187, 233, 1); background: linear-gradient(91deg, rgba(148, 187, 233, 1), rgba(234, 239, 245, 1));"  
        
          class="mt-[10px] pt-[50px] pb-[50px] rounded-md w-[450px] md:w-full mx-auto" >
          <div class="p-2">
        
            <ContactForm />
          </div>
        </div>
      </div>

      <div class="paragraph"> 
          <div class="flex justify-center ">
            <h3 id="tinh-nang-noi-bat" class="mb-2 md:text-4xl text-3xl font-bold text-center bg-orange-600 p-2 text-white rounded-lg uppercase w-[400px] mx-auto md:w-full">    
              🛠️ {{  t('title.benefit')  }}
            </h3>
          </div>
          
          <div class=" w-[450px] mx-auto md:w-[1024px] text-justify">
            <ul class="p-8 leading-10 list-disc shadow-lg"> 
                <li> {{ t("home.benefit.1") }}</li>

                <li> {{ t("home.benefit.2") }} </li>

                <li> {{ t("home.benefit.3") }} </li> 

                <li> {{ t("home.benefit.4") }} </li> 

                <li> {{ t("home.benefit.5") }} </li>   
            </ul>
          </div>
      </div>

      <!-- 
      <div class="paragraph"> 
          <div class="flex justify-center ">
            <h3  id="tinh-nang-noi-bat" 
            class="mb-2 text-4xl font-bold text-center text-orange-600 uppercase "> 
              Tính Năng Nổi Bật 
            </h3>
          </div>
          
          <UTable :data="data" class="flex-1" :columns="columns" /> 

          <div class="font-bold text-alert-red"> 
              [Hình ảnh chụp màn hình giao diện các tính năng]
          </div> 
      </div> 
      -->

      <div class="paragraph">
          <div class="flex justify-center ">
            <h3  
            class="mb-2 md:text-4xl text-3xl font-bold text-center bg-orange-600 p-2 text-white rounded-lg uppercase w-[400px] mx-auto md:w-full">    {{  t('title.ui')  }} </h3>
          </div>

          <div class="text-justify md:w-[1024px] mx-auto ">
            <ul class="p-8 mx-auto leading-10 list-disc shadow-lg"> 
                <li> {{ t("home.ui_friendly.1") }} </li>    
                <li> {{ t("home.ui_friendly.2") }} </li>    
                <li> {{ t("home.ui_friendly.3") }} </li>    
            </ul>
          </div>
          <!--  <div class="font-bold text-alert-red"> 
              [Video demo ngắn về trải nghiệm người dùng]
          </div> -->
      </div>
 
      <BackToTop />
    </div>
    
</template>

<script setup lang="ts">

import type { TableColumn } from '@nuxt/ui'
import Carousel from  '~/components/ui/Carousel.vue'
import BackToTop from '~/components/ui/BackToTop.vue'
import ContactForm from '~/components/ui/ContactForm.vue' 
import ClientIntroduce from '~/components/ui/ClientIntroduce.vue' 

const { t } = useI18n()

type Product = {
  id: string
  feature: string 
  description: string 
}

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'feature',
    header: 'Feature', // ({ column }) => getHeader(column, 'Feature', 'center'),
    cell: ({ row }) => `${row.getValue('feature')}`
  },
  {
    accessorKey: 'description',
    header: 'Description',  // ({ column }) => getHeader(column, 'Description', 'center'),
    cell: ({ row }) => `${row.getValue('description')}`
  }
]

const data = ref([ 
  {
    id: '1',
    feature: 'Quản Lý Khách Hàng', 
    description: 'Lưu trữ, tìm kiếm và quản lý thông tin khách hàng một cách hệ thống',
  },
  {
    id: '2',
    feature: 'Nhắc Nhở Sự Kiện', 
    description: 'Tự động nhắc nhở các sự kiện quan trọng như sinh nhật, cuộc hẹn.',
  },
  {
    id: '3',
    feature: 'Quản Lý Nhân viên', 
    description: 'Theo dõi, điều chỉnh nhân viên hàng tháng',
  },
  {
    id: '4',
    feature: 'Quản Lý Thu Chi', 
    description: 'Ghi nhận, phân loại và theo dõi các khoản thu chi của công ty.',
  },
  {
    id: '5',
    feature: 'Báo Cáo Tài Chính', 
    description: 'Tạo báo cáo chi tiết về tình hình tài chính, hỗ trợ phân tích và quyết định.',
  },
])
</script>


<style lang="css"> 
html {
    scroll-behavior: smooth;
}
</style> 