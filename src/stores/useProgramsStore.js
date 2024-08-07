import { defineStore } from 'pinia';
import axios from 'axios';

export const useProgramsStore = defineStore('programs', {
  state: () => ({
    programs: [],
    program: {},
    prices: [],
    times: [],
    myReservations: [],
  }),

  actions: {
    async getPrograms() {
      const res = await axios.get('/api/readRealTime?page=0&size=12');

      this.programs = res.data.result;
      console.log(this.programs);
    },

    async ProgramDetail(id) {
      try {
        const response = await axios.get(`/api/program?id=${id}`);
        this.program = response.data.result;
      } catch (error) {
        console.error('Failed program detail:', error);
      }
    },

    async PriceInfo(programId) {
      try {
        const response = await axios.get(`/api/price?programId=${programId}`);
        this.prices = response.data.result;
      } catch (error) {
        console.error('Failed price info:', error);
      }
    },

    async times(programId) {
      try {
        const response = await axios.get(`/api/times/${programId}/seq`);
        this.times = response.data.result;
      } catch (error) {
        console.error('Failed times:', error);
      }
    },

    async getMyReservations() {
      try {
        const response = await axios.get('/api/reservation/myRead', {
          withCredentials: true,
        });

        this.myReservations = response.data.result;
        console.log('hi');
      } catch (error) {
        console.log('Failed get', error);
      }
    },
  },
});
