<script setup lang="ts">
    import HeaderLink from './HeaderLink.vue';
</script>

<template>
    <div class="d-lg-flex d-none align-items-center gap-2">
        <HeaderLink to="/home" icon="bi-house" title="Home"></HeaderLink>
        <HeaderLink to="/login" icon="bi-box-arrow-right" title="Login"></HeaderLink>
        <HeaderLink to="/register" icon="bi-person-add" title="Register"></HeaderLink>
    </div>
</template>

