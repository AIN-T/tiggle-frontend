<template>
  <div class="list_evnt scrollable">
    <ul id="eventBox">
      <li
        class="exchange_list"
        v-for="exchange in exchangeList"
        :key="exchange.idx"
      >
        <router-link :to="'/exchange/' + exchange.exchangeId">
          <div>{{ exchange.programName }}</div>
          <div>{{ exchange.otherTicketInfo.grade }}석</div>
          <div>
            {{ exchange.otherTicketInfo.sectionName }} 1층 3열
            {{ exchange.otherTicketInfo.seatNumber }}번
          </div>
          <div>{{ formatNumber(exchange.otherTicketInfo.price) }} 원</div>
          <div>{{ exchange.isWatch }}</div>
        </router-link>
      </li>
      <div
        class="box_no_list2"
        style="border: 0px; padding-top: 75px"
        v-if="props.exchangeList.length == 0"
      >
        <p>교환 내역이 없습니다.</p>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { formatNumber } from '@/utils/formatPrice';
import { defineProps } from 'vue';

const props = defineProps(['exchangeList']);
</script>

<style scoped></style>
