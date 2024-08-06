import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);

// 전역으로 처리  => 컴포넌트에 대한 예외만 처리, router나 pinia 같은건 안됨
app.config.errorHandler = (err, vm, info) => {
  console.log(err);
  console.log(vm);
  console.log(info);
};

const pinia = createPinia();
pinia.use(piniaPersistedstate);

app.use(router);
app.use(pinia);

app.mount("#app");
