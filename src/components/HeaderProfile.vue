<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps(['email', 'logout']);
    const username = computed(() => props.email.substring(0, props.email.indexOf('@')));
</script>

<template>
    <RouterLink to="/home" active-class="bg-body-secondary rounded-3 px-2 py-1" class="text-decoration-none link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >
        <i class="bi bi-house"></i>
        Home
    </RouterLink>
    <RouterLink to="/profile" active-class="bg-body-secondary rounded-3 px-2 py-1" class="text-decoration-none link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >
        <i class="bi bi-person"></i>
        Profile
    </RouterLink>
    <div class="vr"></div>
    <div class="d-flex align-items-center gap-2">
        
        <div class="rounded-circle bg-body p-1 px-2">
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

