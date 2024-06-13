<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink active-class="bg-body-secondary rounded-3 px-2 py-1" class="text-decoration-none link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/home">
        <i class="bi bi-house"></i>
        Home
    </RouterLink>
    <RouterLink active-class="bg-body-secondary rounded-3 px-2 py-1" class="text-decoration-none link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/login">
        <i class="bi bi-box-arrow-right"></i>
        Login
    </RouterLink>
    <RouterLink active-class="bg-body-secondary rounded-3 px-2 py-1" class="text-decoration-none link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/register">
        <i class="bi bi-person-add"></i>
        Register
    </RouterLink>
</template>

