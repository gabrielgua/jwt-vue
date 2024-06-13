import { http } from "@/services/axios";
import type { AuthResponse } from "@/types/auth-response";
import type { AxiosError } from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";




export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const data: AuthResponse = reactive({
        email: '',
        access_token: '',
    } as AuthResponse);

    const state = reactive({error: false, loading: false});

    function login(email: string, password: string) {
        state.loading = true;
        state.error = false;

        http.post('/auth/login', {email: email, password: password})
            .then(response => {
                saveResponse(response.data.access_token, response.data.email);
                console.log('Successful login');
                router.push('/home');
            })
            .catch((e: AxiosError) => {
                state.error = true;
                console.log('error:', e.message);  
            })
            .finally(() => state.loading = false);
    }

    function load() {
        if (!isAuthenticated()) {            
            return;
        }

    
        data.access_token = localStorage.getItem('token')!;
        data.email = localStorage.getItem('email')!;   
            
    }

    function clearState() {
        state.loading = false;
        state.error = false;
    }

    function saveResponse(token: string, email: string) {
        data.access_token = token;
        data.email = email;
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('email', data.email);
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        router.push('/login');
    }

    function isAuthenticated(): boolean {
        if (!localStorage.getItem('token')) {
            return false;
        }

        if (!localStorage.getItem('token')?.match('(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)')) {
            return false;
        } 

        return true;
    }

    return { state, login, logout, data, clearState, isAuthenticated, load }
});