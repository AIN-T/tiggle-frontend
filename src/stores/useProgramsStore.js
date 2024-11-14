import { defineStore } from 'pinia';
import axios from 'axios';

export const useProgramsStore = defineStore('programs', {
  state: () => ({
    programs: [],
    program: {},
    prices: [],
    times: [],
    myReservations: [],
    myReservation: {},
  }),

  actions: {
    async getPrograms() {
      const res = await axios.get('/api/program/readRealTime?page=0&size=12');

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
        const response = await axios.get(
          '/api/reservation/myRead?page=0&size=4',
          {
            withCredentials: true,
          }
        );

        this.myReservations = response.data.result;
      } catch (error) {
        console.log('Failed get', error);
      }
    },

    async getMyReservation(id) {
      try {
        const response = await axios.get(
          '/api/reservation/read?reservationId=' + id,
          {
            withCredentials: true,
          }
        );

        this.myReservation = response.data.result;
      } catch (error) {
        console.log('Failed get', error);
      }
    },

    async like(id) {
      const currentLikeStatus = this.program.like;
      this.program.like = !currentLikeStatus;

      try {
        const response = await axios.post(
          `/api/like/${id}`,
          {},
          { withCredentials: true }
        );

        console.log('Like status updated successfully');
        return response;
      } catch (error) {
        console.error('Failed to update like status:', error);
        this.program.like = currentLikeStatus;
      }
    },
  },
});
