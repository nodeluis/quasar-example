import { api } from 'src/boot/axios';
import { ResponseSigninApi, SendUserAuth } from '../interfaces/auth.interface';

export const apiSigninUser=async(userd: SendUserAuth):Promise<ResponseSigninApi>=>{
    try {
        const { data } = await api.post('/auth/login', { user:userd.user, password:userd.password});
        console.log(data);
        
        const { token, user } = data.user;
        
        //user.name = displayName

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

    const token = localStorage.getItem('tokendigital');
    const user = localStorage.getItem('userdigital');

    if( !token ) {
        return { ok: false, message: 'No hay token',user:user,token }
    }

    if( !user ) {
        return { ok: false, message: 'No hay user',user:user,token }
    }

    return { ok: true, message: 'Success',user:user,token }

}