<template>
  <HeaderComponent />
  <DetailViewComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/common/HeaderComponent.vue";
import FooterComponent from "../components/common/FooterComponent.vue";
import DetailViewComponent from "../components/reservation/DetailViewComponent.vue";

export default {
  name: "MainPage",
  components: {
    DetailViewComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
