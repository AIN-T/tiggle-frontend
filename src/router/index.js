import ExchangePage from '@/pages/ExchangePage.vue';
import LoginComponent from '@/components/auth/LoginComponent.vue';
import MainPage from '@/pages/MainPage.vue';
import MyPage from '@/pages/Mypage.vue';
import PurchaseSuccessComponent from '@/components/book/PurchaseSuccessComponent.vue';
import SelectPriceComponent from '@/components/book/SelectPriceComponent.vue';
import SelectSeatComponent from '@/components/book/SelectSeatComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useMemberStore } from '@/stores/useMemberStore';
import AgreeComponent from '@/components/auth/AgreeComponent.vue';
import SignupComponent from '@/components/auth/SignupComponent.vue';
import ReservationPage from '@/pages/ReservationPage.vue';
import DeatilProgramPage from '@/pages/DeatilProgramPage.vue';

const requireLogin = async (to, from, next) => {
  const memberStore = useMemberStore();

  await memberStore.verify();

  if (memberStore.isLoggedIn) {
    return next();
  }

  next({
    path: '/login',
    query: { redirect: to.fullPath },
  });
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginComponent,
    },
    {
      path: '/seat',
      component: SelectSeatComponent,
      beforeEnter: requireLogin,
    },
    {
      path: '/price',
      component: SelectPriceComponent,
      beforeEnter: requireLogin,
    },
    {
      path: '/success',
      component: PurchaseSuccessComponent,
      beforeEnter: requireLogin,
    },
    {
      path: '/reservation/:id',
      component: ReservationPage,
      beforeEnter: requireLogin,
    },
    { path: '/', component: MainPage },
    {
      path: '/exchange/:id',
      component: ExchangePage,
      beforeEnter: requireLogin,
    },
    // {
    //   path: "/point/history/:method",
    //   component: MyPage,
    //   beforeEnter: requireLogin,
    // },
    { path: '/mypage', component: MyPage, beforeEnter: requireLogin },
    { path: '/agree', component: AgreeComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/detail/:id', component: DeatilProgramPage },
  ],
});

// 예외 처리
router.onError((error) => {
  console.log(error);
});

export default router;
