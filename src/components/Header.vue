<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import HeaderProfile from './HeaderProfile.vue'
    import HeaderLinks from './HeaderLinks.vue';
    import { useAuthStore } from '@/stores/auth';

    const auth = useAuthStore();
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-sm">
                <RouterLink to="/" class="navbar-brand text-info fw-bold fst-italic">authentication</RouterLink>

                <div class="d-flex align-items-center gap-3">
                    <HeaderProfile v-if="auth.authenticated" :logout="auth.logout" :email="auth.email"/>
                    <HeaderLinks v-else/>
                </div>
            </div>
        </nav>
    </header>

</template>


