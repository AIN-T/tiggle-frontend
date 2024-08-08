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

export const useMyHeaderStore = defineStore("myHeaderInfo", {
  state: () => ({
    myHeaderInfo: {},
  }),
  persist: true,
  actions: {
    async getMyHeader() {
      try {
        const response = await axios.post("/api/my-page/header", {
          withCredentials: true,
        });
        this.myHeaderInfo = response.data.result;
        console.log(this.myHeaderInfo);
      } catch (error) {
        console.error("Failed getMyHeaer info:", error);
      }
    },
  },
});
