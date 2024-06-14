<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import HeaderLinks from './HeaderLinks.vue';
import HeaderProfile from './HeaderProfile.vue'
import Logo from './Logo.vue';

const auth = useAuthStore();
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container container-fluid">
                <Logo />

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="d-lg-flex  d-none align-items-center gap-1">
                    <HeaderProfile v-if="auth.authenticated" :logout="auth.logout" :email="auth.email" />
                    <HeaderLinks v-else />
                </div>

                
            </div>
        </nav>
    </header>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="mobile-menu">
        <div class="offcanvas-header">
            <Logo />
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <hr class="border-secondary rounded">
            <div class="d-flex gap-2 flex-sm-column-reverse">
                <HeaderProfile v-if="auth.authenticated" :logout="auth.logout" :email="auth.email" />
                <HeaderLinks v-else />
            </div>
        </div>
    </div>

</template>
