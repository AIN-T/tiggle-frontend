import { defineStore } from 'pinia';
import axios from 'axios';

export const useExchangeListStore = defineStore('exchangeList', {
  state: () => ({ exchangeList: [] }),
  persist: true,
  actions: {
    async getData(page) {
      let res = await axios.get('/api/exchange/list?size=4&page=' + page, {
        withCredentials: true,
      });

      console.log(res);

      if (res.status === 200) {
        this.exchangeList = res.data.result;
      }
    },
  },
});
