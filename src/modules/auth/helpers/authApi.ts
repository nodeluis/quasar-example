import { api } from 'src/boot/axios';
import { ResponseSigninApi, SendUserAuth } from '../interfaces/auth.interface';

export const apiSigninUser=async(userd: SendUserAuth):Promise<ResponseSigninApi>=>{
    try {
        const { data } = await api.post('/auth/login', { user:userd.user, password:userd.password});
        
        const { token, user } = data.data;
        //commit('loginUser', { user:username, token:accessToken})
        if(token){
            localStorage.setItem( 'tokendigital', token );
            localStorage.setItem( 'userdigital', user );
        }

        return { ok: true, message:'Hola '+user+'!!!',user,token };

    } catch (error:any) {
        return { ok: false, message: error.response.data.message,user:null,token:null };
    }
}

export const checkAuthentication = async ():Promise<ResponseSigninApi> => {

    try {
        const { data } = await api.get('/auth/refresh',{
            headers:{
                'Authorization':'Bearer '+localStorage.getItem( 'tokendigital' )
            }
        });
        
        const { token, user } = data.data;

        if(token){
            localStorage.setItem( 'tokendigital', token );
            localStorage.setItem( 'userdigital', user );
        }

        return { ok: true, message:'Hola '+user+'!!!',user,token };

    } catch (error:any) {
        return { ok: false, message: error.response.data.message,user:null,token:null };
    }

}