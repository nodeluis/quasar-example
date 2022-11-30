export default {
    name: 'auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../views/LoginAuth.vue'),
        },
    ],
}