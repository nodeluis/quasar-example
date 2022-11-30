
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useAuth } from '../composables/useAuth';


const isAuthenticatedGuard = async( to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {

    const {checkAuth} = useAuth();

    const { ok } =await checkAuth();

    if ( ok ) next();
    else next({ name: 'login' });
}

export default isAuthenticatedGuard;