<template>
  <HeaderComponent />
  <CategoryComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
import CategoryComponent from '@/components/main/CategoryComponent.vue';

export default {
  name: 'CategoryPage',
  components: {
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
