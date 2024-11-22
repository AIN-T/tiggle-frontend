<template>
  <HeaderComponent />
  <SearchComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/common/HeaderComponent.vue';
import FooterComponent from '../components/common/FooterComponent.vue';
import SearchComponent from '@/components/main/SearchComponent.vue';
import { useProgramsStore } from '@/stores/useProgramsStore.js';
import { watch } from 'vue';

export default {
  name: 'SearchPage',
  components: {
    SearchComponent,
    HeaderComponent,
    FooterComponent,
  },
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const programsStore = useProgramsStore(); // Pinia 스토어 호출

    watch(
      () => props.keyword,
      async (newKeyword) => {
        if (newKeyword) {
          await programsStore.searchPrograms(newKeyword); // searchPrograms 메서드 호출
        }
      },
      { immediate: true }
    );

    return {
      programs: programsStore.programs,
    };
  },
};
</script>

<style scoped></style>
