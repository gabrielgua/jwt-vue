<script setup lang="ts">
import { ref } from 'vue';

    const email = ref('');
    const password = ref('');

    const login = () => {
        console.log({email: email.value, password: password.value});
    }

</script>

<template>
    <div class="container">
        <form @submit.prevent="login" class="my-3">
            <h2 class="mb-4">Login</h2>
            <div class="input-group flex-nowrap my-3">
                <div class="input-group-text">
                    <i class="bi bi-envelope"></i>
                </div>
                <input v-model="email" class="form-control" placeholder="Your email" type="email" required>  
            </div>
            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-text">
                    <i class="bi bi-key"></i>
                </div>
                <input v-model="password" class="form-control" placeholder="Your strong password" type="password" required>  
            </div>
            <button type="submit" class="btn btn-primary">
                Login
                <i class="bi bi-box-arrow-in-right"></i>
            </button>
        </form>
    </div>
</template>


