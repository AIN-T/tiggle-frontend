<template>
  <li class="first">
    <router-link class="inner" :to="'/detail/' + props.program.programId">
      <span class="thumb">
        <img
          :src="
            props.program.imageFiles.length > 0
              ? props.program.imageFiles[0]
              : 'default-image-url.jpg'
          "
          onerror="noImage(this, 180, 250)"
          alt=""
        />
        <span class="frame"></span>
      </span>

      <strong class="tit">{{ props.program.programInfo }}</strong>
      <span class="day">
        {{ formatDate(props.program.programStartDate) }} -
        {{ formatDate(props.program.programEndDate) }}</span
      >
      <span class="location">{{ props.program.locationName }}</span>
      <span class="stat"></span>
    </router-link>
  </li>
</template>

<!-- <script>
export default {
  name: 'CardComponent',
  props: ['program'],
  methods: {
    formatDate(dateString) {
      if (!dateString) return ''; // 빈 문자열 처리
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return ''; // 유효하지 않은 날짜 처리
      // 날짜만 추출하여 형식화
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}.${month}.${day}`;
    },
  },
};
</script> -->

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['program']);

const formatDate = (dateString) => {
  if (!dateString) return ''; // 빈 문자열 처리
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ''; // 유효하지 않은 날짜 처리
  // 날짜만 추출하여 형식화
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
</script>

<style scoped>
.responsive-image {
  width: 100%; /* 이미지의 너비를 컨테이너에 맞게 조정 */
  height: auto; /* 이미지의 높이를 비율에 맞게 자동 조정 */
  object-fit: cover; /* 이미지가 컨테이너를 넘지 않도록 조정 */
}
</style>
