import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('401 에러 처리');
    } else if (error.response && error.response.status === 405) {
      console.log('405 에러 처리');
    } else if (error.response && error.response.status === 304) {
      console.log('304 에러 처리');
    }
  }
);

export const useMemberStore = defineStore('member', {
  state: () => ({ isLoggedIn: false, email: '' }),
  persist: true,
  actions: {
    async login(member) {
      try {
        let res = await axios.post('/api/login', member);
        if (res.status === 200) {
          this.isLoggedIn = true;

          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);

        if (error.response && error.response.status === 401) {
          console.log('401 에러');
        } else if (error.response && error.response.status === 405) {
          console.log('405 에러 처리');
        }
      }
    },

    async verify() {
      let res = await axios.get('/api/auth', { withCredentials: true });
      if (res.status == 200) {
        this.isLoggedIn = res.data.result.isLogin;
      } else {
        return false;
      }
    },

    async logout() {
      let res = await axios.post('/api/logout', {}, { withCredentials: true });

      if (res.status == 200) {
        this.isLoggedIn = false;

        router.push('/');
      } else {
        return false;
      }
    },
  },
});