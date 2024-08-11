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

<style scoped>
.scrollable {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
.scrollable::-webkit-scrollbar {
  width: 10px;
}
.scrollable::-webkit-scrollbar-track {
  background: #f7f7f7;
  border-radius: 10px;
}
.scrollable::-webkit-scrollbar-thumb {
  background: #cdcdcd;
  border-radius: 10px;
}
.scrollable::-webkit-scrollbar-thumb:hover {
  background: #9f9f9f;
}
.exchange_list a {
  display: flex;
  justify-content: space-between;
  color: #666;
  text-decoration: none;
}

.box_no_list2 {
  height: 143px;
  border: 1px solid #eee;
  padding-top: 91px;
  overflow: hidden;
}
.box_no_list2 p {
  color: #333;
  font-size: 20px;
  text-align: center;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.box_no_list2 .btn {
  display: block;
  margin-top: 25px;
  font-size: 12px;
  color: #666;
}
.box_no_list2 .btn .btn_line {
  border: 1px solid #ccc;
  height: 18px;
  padding: 6px 16px 6px;
}
.wrap_taken .list_evnt {
  border: 1px solid #eee;
  padding: 6px 23px 8px;
  margin-top: 4px;
  height: 218px;
}
.wrap_taken .list_evnt li.lst {
  border-bottom: none;
}
.wrap_taken .list_evnt li {
  padding: 16px 0 16px;
  border-bottom: 1px solid #eee;
}
</style>
