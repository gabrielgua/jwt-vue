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
    <div class="container my-5">
        <div class="row">
        
            <form class="col-lg-5" @submit.prevent="register">
                <h1>Register</h1>
                <small class="text-secondary">Create your new account</small>
                <hr class="border-secondary rounded">
                <div class="form-floating mb-3">
                    <input v-model="name" id="name" class="form-control" placeholder="Your full name" type="text" required>  
                    <label for="name">Full name</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="email" id="email" class="form-control" placeholder="Your email" type="email" required>  
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="password" id="password" class="form-control" placeholder="Your strong password" type="password" required>  
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="btn btn-primary w-100">
                    Register
                    <i class="bi bi-person-add"></i>
                </button>
            </form>
        </div>
    </div>
</template>
