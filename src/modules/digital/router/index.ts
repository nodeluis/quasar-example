export default {
    name: 'Digitalización',
    redirect: '/',
    component: () => import('../layouts/DigitalLayout.vue'),
    children: [
        {
            path: '/',
            name: 'Tablero',
            component: () => import('../views/DDashboard.vue'),
        }
    ]

}