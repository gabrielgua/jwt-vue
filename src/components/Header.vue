<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-sm">
                <RouterLink to="/" class="navbar-brand text-info fw-bold fst-italic">authentication</RouterLink>

                <div class="d-flex gap-3">
                    <RouterLink active-class="link-secondary" class="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/home">
                        <i class="bi bi-house"></i>
                        Home
                    </RouterLink>
                    <RouterLink active-class="link-secondary" class="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/login">Login</RouterLink>
                    <RouterLink active-class="link-secondary" class="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/register">Register</RouterLink>
                </div>
            </div>
        </nav>
    </header>

</template>


