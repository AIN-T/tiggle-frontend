import { defineStore } from 'pinia';
import axios from 'axios';

export const useExchangeStore = defineStore('exchange', {
  state: () => ({ exchange: {} }),
  persist: true,
  actions: {
    async getData(idx) {
      let res = await axios.get('/api/exchange?id=' + idx, {
        withCredentials: true,
      });

      console.log('res: ', res);

      if (res.status === 200) {
        this.exchange = res.data.result;
      }
    },
  },
});
