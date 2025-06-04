<template>
    <!-- <div class="flex items-center justify-center p-2 mx-auto border-l-8 border-green-600 rounded-md shadow-lg border-1 w-4xl"> 
        <form ref="formRef" @submit.prevent="submitForm" class="m-[20px] ml-[300px]"> -->

    <div class="">  
        <form ref="formRef" @submit.prevent="submitForm" class="" > 
            
            <UInput v-model="name" class="w-[400px] mx-auto flex md:w-full"  :placeholder="t('form.name')" />
        
            <UInput v-model="email" class="w-[400px] mx-auto flex md:w-full mt-5"   :placeholder="t('form.email')" required />
        
            <UInput v-model="phone" class="w-[400px] mx-auto flex md:w-full mt-5"  :placeholder="t('form.phone')" required />
        
            <UTextarea v-model="description" :rows="5" class="w-[400px] mx-auto flex md:w-full mt-5 mb-5" :placeholder="t('form.description')" required />
        
            <UButton id="subscriptionForm" type="submit" 
            class="flex items-center w-[400px] mx-auto   md:w-full justify-center  text-center hover:cursor-pointer" style="font-size: 25px;">
                {{ t('form.submit') }}
            </UButton> 
        </form>
    </div>
</template>

<script setup lang="ts">

const { t } = useI18n() 
import { ref } from 'vue'

/* ------  reactive state ------- */
const name = ref('')
const email = ref('')
const phone = ref('')
const description = ref('')

const formRef = ref<HTMLFormElement | null>(null)

/* ------ submit handler ------- */
const submitForm = async() => {
    if (!formRef.value) return  
    // const formData = new FormData(formRef.value)   

    const formData = new FormData(formRef.value)
      
    try { 
        // this url get from deploy the app/service -> 
        // choose web app
        // Click on Deploy: In the top right corner, click on Deploy > New deployment.
        // Select Web app: Choose Web app.
        // Configure Access:
        // Execute as: Select "Me".
        // Who has access: Select "Anyone".
        // Deploy: Click Deploy, then authorize the script when prompted.
        // Copy the Web App URL: After deployment, you will receive a URL. Copy this URL for later use.
        const url = 'https://script.google.com/macros/s/AKfycbzFcdJsa_ZD8iip9rWvhJgniBJknTzQBxh2AY-NwwbJW7NLje4xCpGaLp3WaVRbOBYo/exec' 
       
        const body = JSON.stringify( {
            name:  formRef.value[0].value,
            email:  formRef.value[1].value, 
            phone:  formRef.value[2].value, 
            description:  formRef.value[3].value
        }) 
 
        // const requestOptions: any = {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body : formData, 
        // };
 
        // const result: any = await fetch(url,  requestOptions)
        const result: any = await fetch(url,  {
            method: "POST", 
            body : body, 
        })

        console.log (result);  
        alert('Form submitted successfully!'); 
        
        formRef.value.reset()
        name.value = email.value = phone.value = description.value = ''  
    } catch (err: any) {
        alert ('Error: ' + err)
    }
}  


// app script
// function doGet(e) {
//   return HtmlService.createHtmlOutput("Request not supported.");
// }

// function doPost(e) {
//   const sheet = SpreadsheetApp.openById('1YeCDr2toMKAwCK6AOQm7R0x5JC_id_of_google_sheet_file').getActiveSheet(); 
//   Logger.log('e.parameter: %s', e);     

//   const d = JSON.parse(e.postData.contents)
  
//   let data = { 
//     name:        d.name, 
//     email:       d.email, 
//     phone:       d.phone, 
//     description: d.description, 
//   };  
 
//   sheet.appendRow([data.name, data.email, data.phone, data.description]);

//   return ContentService.createTextOutput(JSON.stringify({ result: "success", params: e.postData.contents , array: d}))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// app script
</script> 