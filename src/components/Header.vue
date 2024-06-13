<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import HeaderLinks from './HeaderLinks.vue';
    import HeaderProfile from './HeaderProfile.vue'

    const auth = useAuthStore();
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-sm">
                <RouterLink to="/" class="navbar-brand fw-bold">
                    <i class="bi bi-door-open-fill me-2"></i>
                    <small>Auth</small>
                </RouterLink>

                <div class="d-flex align-items-center gap-3">
                    <HeaderProfile v-if="auth.authenticated" :logout="auth.logout" :email="auth.email"/>
                    <HeaderLinks v-else/>
                </div>
            </div>
        </nav>
    </header>

</template>


