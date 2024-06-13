<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';

    const email = ref('');
    const password = ref('');

    const store = useAuthStore();
    
    onMounted(() => clear());

    const login = () => {
        store.login(email.value, password.value);
        clear();
    }
        
    const clear = () => {
        email.value = '';
        password.value = '';
        store.clearState();
    }
</script>

<template>
    <div class="container">
        <form @submit.prevent="login" class="my-3">
            <h2 class="mb-4">Login</h2>
            <div class="p-4 bg-body-tertiary rounded">
                <div v-if="store.state.error" class="alert alert-danger">
                    <i class="bi bi-exclamation-circle-fill me-2"></i>
                    Email and/or password are incorrect.
                </div>
                <div class="form-floating mb-3">
                    <input v-model="email" id="email" class="form-control" placeholder="Your email" type="email" required>  
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    
                    <input id="pass" v-model="password" class="form-control" placeholder="Your strong password" type="password" required>  
                    <label for="pass">Password</label>

                </div>
                <button type="submit" class="btn btn-info" :disabled="store.state.loading">
                    Login
                    <i v-if="!store.state.loading" class="bi bi-box-arrow-in-right"></i>
                    <span v-if="store.state.loading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                </button>
            
            </div>
        </form>
    </div>
</template>


