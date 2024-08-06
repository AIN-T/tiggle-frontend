<template>
  <HeaderComponent />
  <ExchangeAgreeComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
import ExchangeAgreeComponent from '../components/reservation/ExchangeAgreeComponent.vue';

export default {
  name: 'MainPage',
  components: {
    ExchangeAgreeComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
