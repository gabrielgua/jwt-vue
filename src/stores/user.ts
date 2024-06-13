import { http } from "@/services/axios";
import type { User } from "@/types/user";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { useAuthStore } from "./auth";
import type { AxiosError } from "axios";

export const useUserStore = defineStore('user', () => {

    const user = reactive({
        id: null,
        name: '',
        email: ''
    } as User);

    const auth = useAuthStore();

    function fetchUser() {
        http.get('/users/my-info', {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        })
        .then(response => {
            user.id = response.data.id;
            user.name = response.data.name;
            user.email = response.data.email;
        })
        .catch((e: AxiosError) => console.log(e.message))
    }


    return { user, fetchUser }
});