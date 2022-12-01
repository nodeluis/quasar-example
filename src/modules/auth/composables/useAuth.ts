import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { apiSigninUser, checkAuthentication } from '../helpers/authApi';
import { ResponseSigninApi, SendUserAuth } from '../interfaces/auth.interface';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {

    const authStore = useAuthStore();
    const { currentState } = storeToRefs( authStore );

    const signInUser = async(userd: SendUserAuth):Promise<ResponseSigninApi> => {

        const {message,ok,token,user}=await apiSigninUser(userd);
        authStore.signInUser({token,user});
        return {message,ok,token,user};
    };

    const checkAuth = async():Promise<ResponseSigninApi> => {

        const {message,ok,token,user}=await checkAuthentication();
        authStore.signInUser({token,user});
        return {message,ok,token,user};
    };

    const logout = async():Promise<void>=> {

        localStorage.removeItem('tokendigital');
        localStorage.removeItem('userdigital');
        authStore.logout();
        
    };

    return {
        signInUser,
        checkAuth,
        logout,
        authStatus: computed(()=> currentState),
    }

}