import { defineStore } from 'pinia';
import { PushTokenAndUser } from '../interfaces/auth.interface';
import { AuthStoreState } from '../interfaces/store.interface';

export const useAuthStore = defineStore('auth', {
    state: ():AuthStoreState => ({
        status: 'authenticating', // 'authenticated','not-authenticated', 'authenticating'
        user: null,
        token: '',
    }),
    getters: {
        currentState: ( state :AuthStoreState) => {
            return state.status
        },
        username:( state:AuthStoreState ) => {
            return state.user || ''
        },
        currentToken: ( state :AuthStoreState) => {
            return state.token
        },
    },
    actions: {
        signInUser({token,user}:PushTokenAndUser) {
            this.user=user;
            this.token=token;
            this.status='authenticated';
        },
        logout() {
            this.user=null;
            this.token='';
            this.status='not-authenticated';
        }
    },
});
