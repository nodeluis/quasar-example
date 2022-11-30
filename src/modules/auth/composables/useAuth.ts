import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { apiSigninUser, checkAuthentication } from '../helpers/authApi';
import { ResponseSigninApi, SendUserAuth } from '../interfaces/auth.interface';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {

    const authStore = useAuthStore();
    const { currentState } = storeToRefs( authStore );

    const signInUser = async(userd: SendUserAuth):Promise<ResponseSigninApi> => {

        const {message,ok,token,username}=await apiSigninUser(userd);
        authStore.signInUser({token,username});
        return {message,ok,token,username};
    };

    const checkAuth = async():Promise<ResponseSigninApi> => {

        const {message,ok,token,username}=await checkAuthentication();
        authStore.signInUser({token,username});
        return {message,ok,token,username};
    };

    return {
        signInUser,
        checkAuth,
        authStatus: computed(()=> currentState),
    }

}