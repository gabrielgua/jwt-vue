import { http } from "@/services/axios";
import type { AuthResponse } from "@/types/auth-response";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";




export const useTokenStore = defineStore('token', () => {

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
                data.email = response.data.email;
                data.access_token = response.data.access_token;
                console.log('Successful login: ');
            })
            .catch(e => {
                state.error = true;
                console.log('error: ' + e.data);
            })
            .finally(() => state.loading = false);
    }

    return { data, state, login }
});