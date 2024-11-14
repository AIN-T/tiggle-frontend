import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const app = createApp(App);

library.add(fas);
library.add(far);

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
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
