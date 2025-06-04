import { defineStore } from 'pinia';
import { privacy, privacyTW, privacyEN } from '~/datas/privacy';


export const usePrivacyStore = defineStore('privacyStore', {
    state: () => ({
        item: "",
        loading: false, 
        error: null 
    }),
    actions: {
        //async fetchItem() {
        fetchItem(lang) { 
            this.loading = true 
            this.error = null

            try {
            //     const url = "xxx";
            //     const response = await fetch(url)
            let data = privacy; 

            switch (lang) {
                case 'en-US': 
                    data = privacyEN;
                    break;
                case 'zh-TW': 
                    data = privacyTW
                    break;
                case 'vi-VN': 
                    data = privacy
                    break;

                default:
                    data = privacy
                    break;
            }  
            this.item = data 
                
            } catch(err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        }

    
    }
})