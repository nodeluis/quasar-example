import { api } from 'src/boot/axios';
import { ResponseSigninApi, SendUserAuth } from '../interfaces/auth.interface';

export const apiSigninUser=async(userd: SendUserAuth):Promise<ResponseSigninApi>=>{
    const { user, password } = userd;
    try {
        const { data } = await api.post('/auth/login', { user, password});
        const { username, accessToken } = data;
        
        //user.name = displayName

        //commit('loginUser', { user:username, token:accessToken})
        if(accessToken){
            localStorage.setItem( 'tokendigital', accessToken );
            localStorage.setItem( 'userdigital', user );
        }

        return { ok: true, message:'Hola '+username+'!!!',username,token:accessToken };

    } catch (error:any) {
        return { ok: false, message: error.response.data.message,username:null,token:null };
    }
}

export const checkAuthentication = async ():Promise<ResponseSigninApi> => {

    const token = localStorage.getItem('tokendigital');
    const user = localStorage.getItem('userdigital');

    if( !token ) {
        return { ok: false, message: 'No hay token',username:user,token }
    }

    if( !user ) {
        return { ok: false, message: 'No hay user',username:user,token }
    }

    return { ok: true, message: 'Success',username:user,token }

}