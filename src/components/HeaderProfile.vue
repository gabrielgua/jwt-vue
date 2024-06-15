<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import HeaderLink from './HeaderLink.vue';

const props = defineProps(['email', 'logout']);
const username = computed(() => props.email.substring(0, props.email.indexOf('@')));
</script>

<template>
    <div class="d-flex flex-lg-row flex-column gap-2">
        <HeaderLink to="/home" icon="bi-house" title="Home" dismiss="offcanvas"></HeaderLink>
        <HeaderLink to="/profile" icon="bi-person" title="Profile" dismiss="offcanvas"></HeaderLink>
    </div>

    <div class="vr d-lg-flex d-none"></div>
    <hr class="d-lg-none d-flex border-secondary"></hr>
    <div class="d-lg-flex d-none align-items-center gap-2">

        <div class="rounded-circle bg-body p-1 px-2">
            <i class="bi bi-person"></i>
        </div>

        <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ username }}</a>
            <ul class="dropdown-menu mt-2">
                <li>
                    <h6 class="dropdown-header">{{ props.email }}</h6>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li class="small">
                    <button @click="props.logout" class="dropdown-item" type="button">
                        <i class="bi bi-box-arrow-left me-1"></i>
                        Logout
                    </button>
                </li>
            </ul>
            
        </div>
    </div>

    <div class="d-lg-none d-flex align-items-center justify-content-between p-2 rounded-5 bg-secondary-subtle">
        
        
        <div class="d-flex align-items-center gap-2">
            <div class="rounded-circle bg-body p-1 px-2">
                <i class="bi bi-person"></i>
            </div>
            <span class="small text-secondary">{{ props.email }}</span>
        </div>


        <button @click="props.logout" data-bs-dismiss="offcanvas" class="btn btn-sm text-danger-emphasis rounded-circle" type="button">
            <i class="bi bi-box-arrow-left"></i>
        </button>
    </div>

    

</template>
