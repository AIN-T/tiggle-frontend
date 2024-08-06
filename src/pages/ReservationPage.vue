<template>
  <HeaderComponent />
  <ReservationComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
import ReservationComponent from '../components/reservation/ReservationComponent.vue';

export default {
  name: 'MainPage',
  components: {
    ReservationComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
