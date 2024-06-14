<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import HeaderLink from './HeaderLink.vue';

    const props = defineProps(['email', 'logout']);
    const username = computed(() => props.email.substring(0, props.email.indexOf('@')));
</script>

<template>
    <div class="d-lg-flex gap-2">
        <HeaderLink to="/home" icon="bi-house" title="Home"></HeaderLink>
        <HeaderLink to="/profile" icon="bi-person" title="Profile"></HeaderLink>
    </div>
    
    <div class="vr d-lg-flex d-none"></div>
    <hr class="d-lg-none d-flex border-secondary"></hr>
    <div class="d-flex align-items-center gap-2 border">
        
        <div class="rounded-circle bg-body p-1 px-2 border">
            <i class="bi bi-person "></i>
        </div>
        <small>
            {{ username }}
        </small>

        <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
        </a>
        <ul class="dropdown-menu dropdown-menu-end mt-2">
            <li><h6 class="dropdown-header">{{ props.email }}</h6></li>
            <li><hr class="dropdown-divider"></li>
            <li class="small">
                <button @click="props.logout" class="dropdown-item" type="button">
                    <i class="bi bi-box-arrow-left me-1"></i>
                    Logout
                </button>
            </li>
        </ul>
        </div>
    </div>
        
</template>

<style global>
    .link-inactive {
        margin-inline-start: .5rem;
    }
</style>

