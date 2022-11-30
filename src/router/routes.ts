import isAuthenticatedGuard from 'src/modules/auth/router/auth-guard';
import { RouteRecordRaw } from 'vue-router';
import authRouter from '../modules/auth/router';
import digitalRouter from '../modules/digital/router';

const routes: RouteRecordRaw[] = [
  /*{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },*/

  {
    path: '/',
    beforeEnter: [ isAuthenticatedGuard ],
    ...digitalRouter,
  },

  {
    path: '/auth',
    ...authRouter,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  
];


export default routes;
