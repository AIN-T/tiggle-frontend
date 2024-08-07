import { defineStore } from "pinia";
import axios from "axios";

export const useProgramsStore = defineStore("programs", {
  state: () => ({
    programs: [],
    program: {},
    prices: [],
    times: [],
  }),

  actions: {
    async getPrograms() {
      const res = await axios.get(
        "http://localhost:8080/program/readRealTime?page=0&size=12"
      );

      this.programs = res.data.result;
      console.log(this.programs);
    },

    async ProgramDetail(id) {
      try {
        const response = await axios.get(
          `http://localhost:8080/program?id=${id}`
        );
        this.program = response.data.result;
      } catch (error) {
        console.error("Failed program detail:", error);
      }
    },

    async PriceInfo(programId) {
      try {
        const response = await axios.get(
          `http://localhost:8080/price?programId=${programId}`
        );
        this.prices = response.data.result;
      } catch (error) {
        console.error("Failed price info:", error);
      }
    },

    async times(programId) {
      try {
        const response = await axios.get(
          `http://localhost:8080/times/${programId}/seq`
        );
        this.times = response.data.result;
      } catch (error) {
        console.error("Failed times:", error);
      }
    },
  },
});
