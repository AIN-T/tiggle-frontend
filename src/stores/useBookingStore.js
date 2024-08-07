import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    book: {
      programName: '',
      programId: '',
      timesId: '',
      sectionId: '',
      seatLists: [],
    },
  }),

  actions: {
    async getSeatLists(programId, timesId, sectionId) {
      const res = await axios.post(
        '/api/seat/all',
        { programId: programId, timesId: timesId, sectionId: sectionId },
        { withCredentials: true }
      );

      this.book.seatLists = res.data.result;
      console.log(this.seatLists);
    },
  },
});
