import { defineStore } from 'pinia';
import { PushTokenAndUser } from '../interfaces/auth.interface';
import { AuthStoreState } from '../interfaces/store.interface';

export const useAuthStore = defineStore('auth', {
    state: ():AuthStoreState => ({
        status: 'authenticating', // 'authenticated','not-authenticated', 'authenticating'
        user: null,
        token: null,
    }),
    getters: {
        currentState: ( state :AuthStoreState) => {
            return state.status
        },
        username:( state:AuthStoreState ) => {
            return state.user || ''
        }
    },
    actions: {
        signInUser({token,user}:PushTokenAndUser) {
            this.user=user;
            this.token=token;
        }
    },
});
