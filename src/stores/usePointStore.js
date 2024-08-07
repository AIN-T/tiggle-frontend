import { defineStore } from "pinia";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401 에러 처리");
    } else if (error.response && error.response.status === 405) {
      console.log("405 에러 처리");
    } else if (error.response && error.response.status === 304) {
      console.log("304 에러 처리");
    }
    ``;
  }
);

export const usePointStore = defineStore("point", {
  state: () => ({
    point: {},
    reqType: {
      // reqType을 상태로 추가
      getOrUse: 0,
    },
  }),
  persist: true,
  actions: {
    async getPointData(value) {
      try {
        this.reqType.getOrUse = value;
        const response = await axios.post("/api/point/history", this.reqType, {
          withCredentials: true,
        });

        this.point = response.data.result;
      } catch (error) {
        console.error("Failed point info:", error);
      }
    },
  },
});
