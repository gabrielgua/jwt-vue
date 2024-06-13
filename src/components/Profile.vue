<script setup lang="ts">
    import { useAuthStore } from '@/stores/auth';

    const store = useAuthStore();
</script>

<template>
    <div>
        <p>{{ store.email }}</p>
    </div>
</template>

<style scoped>

</style>