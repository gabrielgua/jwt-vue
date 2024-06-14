<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    defineProps<{
        to: string;
        icon: string;
        dismiss?: string;
        title: string;
    }>();
</script>

<template>
    <RouterLink :to="$props.to" active-class="bg-body-secondary rounded-3" class="text-decoration-none" >
        <button class="border border-0 bg-transparent w-100 text-start nav-link px-2 py-1 ">
            <i class="bi" :class="[icon]"></i>
            {{ title }}
        </button>
    </RouterLink>
</template>
