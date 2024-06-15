<script setup lang="ts">
    import HeaderLink from './HeaderLink.vue';
</script>

<template>
    <div class="d-flex flex-lg-row flex-column gap-2">
        <HeaderLink dismiss="offcanvas" to="/home" icon="bi-house" title="Home"></HeaderLink>
        <HeaderLink dismiss="offcanvas" to="/login" icon="bi-box-arrow-right" title="Login"></HeaderLink>
        <HeaderLink dismiss="offcanvas" to="/register" icon="bi-person-add" title="Register"></HeaderLink>
    </div>
</template>

