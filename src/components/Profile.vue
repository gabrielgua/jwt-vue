<script setup lang="ts">
    import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

    const store = useUserStore();
    onMounted(() => store.fetchUser())
</script>

<template>

    <div class="container my-3">
        <h1>Profile</h1>
        <small class="text-secondary">This is your profile area</small>    

        <div class="border my-3 d-flex align-items-center gap-4 p-3 rounded">
            <strong><span class="text-secondary">#</span>{{ store.user.id }}</strong>
            <hr class="vr">
            <span>
                <h2>{{ store.user.name }}</h2>
                <small>{{ store.user.email }}</small>
            </span>
        </div>
    </div>
</template>

<style scoped>

</style>