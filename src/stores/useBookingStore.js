import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

export const useBookingStore = defineStore('booking', {
  state: () => ({
    book: {
      programName: '',
      programId: '',
      timesId: '',
      sectionId: '',
      locationId: '',
      seatLists: [],
      price: '',
    },
    reservationId: '',
    reservation: {},
    sections: {},
  }),
  persist: true,
  actions: {
    setData(locationId, programName, programId, timesId, sectionId) {
      this.book.locationId = locationId;
      this.book.programName = programName;
      this.book.programId = programId;
      this.book.timesId = timesId;
      this.book.sectionId = sectionId;
    },

    async getSeatLists() {
      const res = await axios.post(
        '/api/seat/all',
        {
          programId: this.book.programId,
          timesId: this.book.timesId,
          sectionId: this.book.sectionId,
        },
        { withCredentials: true }
      );

      this.book.seatLists = res.data.result;
      return this.book.seatLists;
    },

    async getExchangeSeatLists() {
      const res = await axios.post(
        '/api/seat/available/exchange',
        {
          programId: this.book.programId,
          timesId: this.book.timesId,
          sectionId: this.book.sectionId,
        },
        { withCredentials: true }
      );

      this.book.seatLists = res.data.result;
      return this.book.seatLists;
    },

    async setSeat(programId, timesId, seatId, price) {
      const res = await axios.post(
        '/api/verify',
        { programId: programId, timesId: timesId, seatId: seatId },
        { withCredentials: true }
      );

      if (res.status == 200) {
        this.reservationId = res.data.result.reservationId;
        this.book.price = price;

        router.push('/price');
      }
    },

    async getReservation() {
      try {
        const response = await axios.get(
          '/api/reservation/temporary?reservationId=' + this.reservationId,
          {
            withCredentials: true,
          }
        );

        this.reservation = response.data.result;
      } catch (error) {
        console.log('Failed get', error);
      }
    },

    async getSection() {
      try {
        const response = await axios.get(
          '/api/section?locationId=' +
            this.book.locationId +
            '&programId=' +
            this.book.programId,
          {
            withCredentials: true,
          }
        );

        this.sections = response.data.result;
      } catch (error) {
        console.log('Failed get', error);
      }
    },

    setSection(id) {
      this.book.sectionId = id;
    },

    setReservationId(id) {
      this.reservationId = id;
    },
  },
});
