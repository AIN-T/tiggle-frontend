<template>
  <HeaderComponent />
  <MainPageComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
import MainPageComponent from '../components/main/MainPageComponent.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
