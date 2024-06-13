import { http } from "@/services/axios";
import type { AuthResponse } from "@/types/auth-response";
import type { AxiosError } from "axios";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";




export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const email = ref('');
    const token = ref('');
    const authenticated = computed(() => checkAuth());
    const state = reactive({error: false, loading: false});

    function login(email: string, password: string) {
        state.loading = true;
        state.error = false;

        http.post('/auth/login', {email: email, password: password})
            .then(response => {
                saveResponse(response.data.access_token, response.data.email);
                console.log('Successful login');
                router.push('/profile');
            })
            .catch((e: AxiosError) => {
                state.error = true;
                console.log('error:', e.message);  
            })
            .finally(() => state.loading = false);
    }

    function checkAuth(): boolean {
        load();

        return token.value != null && token.value != '';
    }

    function load() {
        if (!localStorage.getItem('token')) {
            return;
        }

        setAuthentication(localStorage.getItem('token')!, localStorage.getItem('email')!);            
    }

    function setAuthentication(t: string, e: string) {
        token.value = t;
        email.value = e;   
    }

    function clearState() {
        state.loading = false;
        state.error = false;
    }

    function saveResponse(t: string, e: string) {
        setAuthentication(t, e);
        localStorage.setItem('token', token.value);
        localStorage.setItem('email', email.value);
    }

    function logout() {
        setAuthentication('', '');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        router.push('/login');
    }

    return { token, email, state, authenticated, load, login, logout, clearState }
});