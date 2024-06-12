<script setup lang="ts">
import { ref } from 'vue';

    const name = ref('');
    const email = ref('');
    const password = ref('');

    const register = () => {
        console.log({name: name.value, email: email.value, password: password.value});
    }
</script>

<template>
    <div class="container">
        <form class="my-3" @submit.prevent="register">
            <h2 class="mb-4">Register</h2>
            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-text">
                    <i class="bi bi-person"></i>
                </div>
                <input v-model="name" class="form-control form" placeholder="Your name" type="text" required>  
            </div>
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
                Register
                <i class="bi bi-plus"></i>
            </button>
        </form>
    </div>
</template>
