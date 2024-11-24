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
    async getPrograms(page = 0, size = 12) {
      try {
        const res = await axios.get(`/api/program/readRealTime?page=${page}&size=${size}`);
        const fetchedPrograms = res.data.result;

        if (page === 0) {
          this.programs = fetchedPrograms;
        } else {
          this.programs = [...this.programs, ...fetchedPrograms];
        }
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    },

    async ProgramDetail(id) {
      try {
        const response = await axios.get(`/api/program?id=${id}`);
        this.program = response.data.result;
      } catch (error) {
        console.error('Failed to fetch program detail:', error);
      }
    },

    async searchPrograms(keyword, page = 0, size = 5) {
      try {
        const response = await axios.get(
          `/api/program/search?keyword=${encodeURIComponent(keyword)}&page=${page}&size=${size}`
        );
        const fetchedPrograms = response.data.result;

        if (page === 0) {
          this.programs = fetchedPrograms;
        } else {
          this.programs = [...this.programs, ...fetchedPrograms];
        }
      } catch (error) {
        console.error("Failed to search programs:", error);
      }
    },

    async getCategoryPrograms(categoryId, page = 0, size = 12) {
      try {
        const response = await axios.get(
          `/api/program/readCategory?categoryId=${categoryId}&page=${page}&size=${size}`
        );
        const fetchedPrograms = response.data.result;

        if (!fetchedPrograms || fetchedPrograms.length === 0) {
          return [];
        }

        if (page === 0) {
          this.programs = fetchedPrograms;
        } else {
          this.programs = [...this.programs, ...fetchedPrograms];
        }

        return fetchedPrograms;
      } catch (error) {
        console.error("Error fetching category programs:", error);
        throw error;
      }
    },

    async PriceInfo(programId) {
      try {
        const response = await axios.get(`/api/price?programId=${programId}`);
        this.prices = response.data.result;
      } catch (error) {
        console.error('Failed to fetch price info:', error);
      }
    },

    async times(programId) {
      try {
        const response = await axios.get(`/api/times/${programId}/seq`);
        this.times = response.data.result;
        return this.times;
      } catch (error) {
        console.error('Failed to fetch times:', error);
      }
    },

    async getMyReservations() {
      try {
        const response = await axios.get(
          '/api/reservation/myRead?page=0&size=4',
          { withCredentials: true }
        );
        this.myReservations = response.data.result;
      } catch (error) {
        console.error('Failed to fetch reservations:', error);
      }
    },

    async getMyReservation(id) {
      try {
        const response = await axios.get(
          `/api/reservation/read?reservationId=${id}`,
          { withCredentials: true }
        );
        this.myReservation = response.data.result;
      } catch (error) {
        console.error('Failed to fetch reservation:', error);
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
        return response;
      } catch (error) {
        console.error('Failed to update like status:', error);
        this.program.like = currentLikeStatus;
      }
    },

    async getMyLikes() {
      try {
        const response = await axios.get(`/api/like/my?page=0&size=4`, {
          withCredentials: true,
        });
        return response.data.result;
      } catch (error) {
        console.error('Failed to fetch liked programs:', error);
      }
    },
  },
});