<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

    const store = useAuthStore();

    onMounted(() => store.load());

    console.log(store.data);
    

</script>

<template>
    <div>
        <p>{{ store.data.email }}</p>

    </div>
</template>

<style scoped>

</style>