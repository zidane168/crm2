<template> 
 
    <div class="p-4">
        <div v-html="data">  </div>
        <div v-if="loading"> Loading ... </div>
        <div v-if="error"> {{ error  }} </div>
    </div>
</template>

<script setup>
import { usePrivacyStore } from '~/stores/privacy';

    const privacyStore = usePrivacyStore()

    const { locales, locale, setLocale } = useI18n()
    privacyStore.fetchItem( locale.value )        // === "code" locales -> code (nuxt.config.ts)
    onMounted(() => { 
        privacyStore.fetchItem(locale.value); // Initial fetch
    }); 

    // Watch for changes in locale and fetch new data
    watch(locale, (newLocale) => {
        privacyStore.fetchItem(newLocale); // Fetch data when locale changes
    }); 

    const data = computed(() => privacyStore.item)
    const loading = computed(() => privacyStore.loading)
    const error = computed(() => privacyStore.error)
</script>