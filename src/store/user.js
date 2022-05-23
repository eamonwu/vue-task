import { defineStore } from "pinia";
export const useUserStore = defineStore('user', {
    state() {
        return {
            token: null,
            login: false,
            loginShow: true
        }
    },
    actions: {
        getToken() {
            return this.login
        },
        setrToken(newToken) {
            this.token = newToken
        },
        getLoginState() {
            return this.login
        },
        setLoginState(newLoginState) {
            this.login = newLoginState
        }
    }
})