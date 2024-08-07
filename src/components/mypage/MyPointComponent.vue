<template>
  <div class="box_answer">
    <h2 class="tit_sub_float">포인트</h2>
    <div class="box_sorting_menu">
      <ul class="list_sorting_menu">
        <li class="first on" @click="pointStore.getPointData(2)">
          <a href="#">전체</a>
        </li>
        <li @click="pointStore.getPointData(1)">
          <a href="#">사용 내역</a>
        </li>
        <li @click="pointStore.getPointData(0)">
          <a href="#">적립 내역</a>
        </li>
      </ul>
    </div>
    <div class="list_evnt">
      <ul id="qnaBox">
        <li
          class="lst"
          v-for="pointData in pointStore.point"
          :key="pointData.id"
        >
          <p class="event_title">
            <a
              href="/customerservice/qnaInform.htm?pgidx=1&amp;ticket_id=164270967"
              >{{ pointData.description }}</a
            ><span class="btn_flexible btn_flexible_ico1"
              ><span
                >point : {{ pointData.remainPoint }}&nbsp;({{
                  pointData.value
                }})</span
              ></span
            >
          </p>
          <p class="event_day">{{ formatDate(pointData.modifiedAt) }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { usePointStore } from "@/stores/usePointStore";
import { formatDate } from "@/utils/formatDate";
//import { useRouter } from "vue-router";

//const router = useRouter();

const pointStore = usePointStore();

// const point = ref({
//   id: 0,
//   userId: 0,
//   value: 0,
//   remainPoint: 0,
//   description: "",
//   getOrUse: "",
//   modifiedAt: "",
// });

onMounted(async () => {
  await pointStore.getPointData(2);
});
</script>

<style scoped>
.box_sorting_menu {
  position: absolute;
  top: 20px;
  right: 0;
}
.list_sorting_menu {
  padding-top: 8px;
}
.list_sorting_menu li {
  display: inline-block;
}
.list_sorting_menu li.on a {
  color: #00b523;
  font-weight: 700;
}
.list_sorting_menu li.first a {
  background: 0 0;
}
.list_sorting_menu li a {
  display: block;
  padding: 0 17px 0 20px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/submenu_bar.png)
    no-repeat left 6px;
  font-size: 16px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, "돋움", Dotum;
}
a {
  color: #666;
  text-decoration: none;
  font-size: 16px;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float {
  font-weight: 700;
}
.tit_sub_float {
  width: auto;
  height: auto;
  margin: 0 130px 0 4px;
  padding: 9px 0 10px;
  line-height: 1.8;
}
.tit_sub_float {
  display: block;
  width: 100%;
  height: 54px;
  margin-left: 4px;
  font-size: 20px;
  line-height: 54px;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic";
  color: #000;
  text-align: left;
}
.ico_list1 {
  background-color: #41d26b;
}
.ico_list {
  float: left;
  overflow: hidden;
  height: 14px;
  padding: 1px 5px;
  font-size: 11px;
  line-height: 16px;
  color: #fff;
  text-align: center;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float {
  font-weight: 700;
}
.tit_sub_float {
  width: auto;
  height: auto;
  margin: 0 130px 0 4px;
  padding: 9px 0 10px;
  line-height: 1.8;
}
.tit_sub_float {
  display: block;
  width: 100%;
  height: 54px;
  margin-left: 4px;
  font-size: 20px;
  line-height: 54px;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic";
  color: #000;
  text-align: left;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float {
  font-weight: 700;
}
.tit_sub_float {
  width: auto;
  height: auto;
  margin: 0 130px 0 4px;
  padding: 9px 0 10px;
  line-height: 1.8;
}
.tit_sub_float {
  display: block;
  width: 100%;
  height: 54px;
  margin-left: 4px;
  font-size: 20px;
  line-height: 54px;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic";
  color: #000;
  text-align: left;
}
.btn_flexible_ico1 {
  background-position: left -110px;
  padding-left: 9px;
  float: right;
}
.btn_flexible_ico1,
.btn_flexible_ico2,
.btn_flexible_ico3 {
  display: inline-block;
  overflow: hidden;
  height: 18px;
  padding-left: 11px;
}
.btn_flexible_ico1 span {
  background-position: right -110px;
  padding-right: 8px;
  color: #00b523;
}
.btn_flexible_ico1 span,
.btn_flexible_ico2 span,
.btn_flexible_ico3 span {
  display: inline-block;
  height: 17px;
  padding: 1px 11px 0 0;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  vertical-align: top;
}
p.event_day {
  font-size: 10px;
}
.wrap_taken .list_evnt {
  border: 1px solid #eee;
  padding: 6px 23px 8px;
  margin-top: 4px;
  height: 218px;
}
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
.lst {
  margin-top: 7px;
  margin-bottom: 14px;
}
</style>
