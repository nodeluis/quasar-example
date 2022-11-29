import api from '@/api/digital-api';

export const signInUser = async ({ commit }, userd ) => {

    const { user, password } = userd

    try {
        const { data } = await api.post('/auth/signin', { username:user, password})
        const { username, accessToken } = data
        
        //user.name = displayName

        commit('loginUser', { user:username, token:accessToken})

        return { ok: true, message:'Hola '+username+'!!!' }

    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }

}


export const checkAuthentication = async ({ commit }) => {

    const token = localStorage.getItem('tokendigital')
    const user = localStorage.getItem('userdigital')

    if( !token ) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    if( !user ) {
        commit('logout')
        return { ok: false, message: 'No hay user' }
    }

    try {
        
        /*const { data } = await api.post(':lookup', { idToken })
        // console.log(data)
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }*/

        commit('loginUser', { user, token })
        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.message }
    }

}