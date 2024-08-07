<template>
  <HeaderComponent />
  <MyPageComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/common/HeaderComponent.vue";
import MyPageComponent from "../components/mypage/MyPageComponent.vue";
import FooterComponent from "../components/common/FooterComponent.vue";

export default {
  name: "MyPage",
  components: {
    HeaderComponent,
    MyPageComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
