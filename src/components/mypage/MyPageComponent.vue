<template>
  <div id="wrap" class="myticket">
    <div id="cont_wrap" class="clear_g">
      <div id="conts_section" class="pr_none">
        <div id="conts" class="clear_g">
          <h2 class="screen_out">마이티켓</h2>
          <div class="wrap_person">
            <div class="box_person_info">
              <div class="thumb">
                <img
                  id="box_person_info"
                  src="https://cdnimg.melon.co.kr/svc/user_images/user/647/77/64676321_194.jpg?tm=20240723121248"
                  width="100"
                  height="100"
                  alt=""
                  style="vertical-align: top"
                />
                <span class="frame_100_100_radius"></span>
              </div>
              <div class="info_text">
                <span class="person_id"
                  >{{ myHeaderStore.myHeaderInfo.username }}님</span
                >
                <span class="person_btn">
                  <a target="_blank" class="btn_line">기본정보 관리</a>
                </span>
              </div>
            </div>
            <div class="box_person_state">
              <ul>
                <li>
                  <p class="state_num">
                    <a id="rsrvCnt">{{
                      myHeaderStore.myHeaderInfo.reservationCnt
                    }}</a>
                  </p>
                  <p class="state_title">예매내역</p>
                </li>
                <li class="lst">
                  <p class="state_num">
                    <a id="advtkCnt">{{
                      myHeaderStore.myHeaderInfo.notWatchedYet
                    }}</a>
                  </p>
                  <p class="state_title">미확인 교환요청</p>
                </li>
                <li>
                  <p class="state_num">
                    <a id="couponCnt">{{ myHeaderStore.myHeaderInfo.point }}</a>
                  </p>
                  <p class="state_title">보유 포인트</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="warp_ticket">
            <a>
              <h2 class="tit_sub_float">최근 예매/취소</h2>
            </a>
            <div class="ctr">
              <a class="ico_more">더보기</a>
            </div>
            <div class="box_ticket_list" id="divFound">
              <table summary="최근 예매/취소 리스트" class="tbl tbl_style02">
                <caption class="hide"></caption>
                <colgroup>
                  <!-- 카카오페이 추가 -->
                  <col width="149" />
                  <col width="470" />
                  <col width="233" />
                  <col width="154" />
                  <!-- 카카오페이 추가 -->
                </colgroup>
                <thead>
                  <tr>
                    <th>상태</th>
                    <th>공연정보</th>
                    <th>예매정보</th>
                    <th></th>
                  </tr>
                </thead>
                <MyReservationComponent
                  v-for="reservation in programStore.myReservations"
                  :key="reservation.idx"
                  :reservation="reservation"
                />
              </table>
            </div>
            <div class="box_no_list" id="divNotFound" style="display: none">
              <p>예매확인/ 취소내역이 없습니다.</p>
            </div>
          </div>
          <!-- //최근 예매/취소 -->

          <div class="wrap_taken">
            <!-- 최근 참여 이벤트 -->
            <div class="box_event">
              <div>
                <h2 class="tit_sub_float">교환 요청</h2>
                <div class="box_sorting_menu">
                  <ul class="list_sorting_menu">
                    <li class="first on">
                      <a href="javascript:goSearch('0');">전체</a>
                    </li>
                    <li class="">
                      <a href="javascript:goSearch('1');">give</a>
                    </li>
                    <li class="">
                      <a href="javascript:goSearch('2');">take</a>
                    </li>
                  </ul>
                </div>
              </div>

              <MyExchangeComponent
                :exchangeList="exchangeListStore.exchangeList"
              />
            </div>
            <MyPointComponent></MyPointComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useExchangeListStore } from '@/stores/useExchangeListStore.js';
import { useProgramsStore } from '@/stores/useProgramsStore';
import MyReservationComponent from './MyReservationComponent.vue';
import MyPointComponent from './MyPointComponent.vue';
import { usePointStore } from '@/stores/usePointStore';
import { useMyHeaderStore } from '@/stores/useMyHeaderStore';
import MyExchangeComponent from './MyExchangeComponent.vue';

const exchangeListStore = useExchangeListStore();
const programStore = useProgramsStore();
const pointStore = usePointStore();
const myHeaderStore = useMyHeaderStore();

// 컴포넌트가 마운트될 때 데이터 가져오기
onMounted(async () => {
  pointStore.reqType.getOrUse = 2; // reqType을 2로 설정
  await exchangeListStore.getData(0);
  await programStore.getMyReservations();
  await pointStore.getPointData(); // reqType을 매개변수로 전달할 필요 없음
  await myHeaderStore.getMyHeader();
});
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
.exchange_list {
  display: flex;
  justify-content: space-between;
}
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
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.clear_g {
  display: block;
  overflow: visible;
  width: auto;
  clear: both;
}
#conts {
  display: block;
  position: relative;
  width: 1008px;
  min-height: 600px;
  padding: 0 20px 53px;
  margin: 0 auto;
}
.none,
.screen_out {
  overflow: hidden;
  font-size: 0 !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  text-indent: -9999px;
}
.wrap_person {
  margin-top: 40px;
  border: 1px solid #ddd;
  background: #fafafa;
  overflow: hidden;
}
.box_person_info {
  float: left;
  position: relative;
  width: 500px;
  padding: 24px 24px;
  background: #fff;
}
.box_person_info .thumb {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
}
img {
  border: 0 none;
}
.frame_100_100_radius {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/frame_100_100_radius.png)
    center center no-repeat;
  text-indent: -9999px;
}
.box_person_info .info_text {
  float: left;
  width: 380px;
  height: 100px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.box_person_info .info_text .person_id {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 28px;
  color: #333;
  line-height: 60px;
  max-width: 370px;
  padding: 0 4px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.box_person_info .info_text .person_btn {
  display: block;
}
.btn_line {
  border: 1px solid #ccc;
  height: 18px;
  padding: 8px 12px 8px;
}
.box_person_state {
  float: right;
  position: relative;
  padding: 40px 0;
  overflow: hidden;
}
.box_person_state li {
  float: left;
  width: 150px;
  border-right: 1px solid #eee;
}
.box_person_state li .state_num {
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.box_person_state li .state_num a {
  text-decoration: none;
}
.box_person_state li .state_title {
  margin-top: 11px;
  font-size: 13px;
  text-align: center;
}
.box_person_state li.lst {
  border-right: none;
}
.box_person_state li .state_num a {
  text-decoration: none;
}
.btn_line {
  border: 1px solid #ccc;
  height: 18px;
  padding: 8px 12px 8px;
}
a {
  color: #666;
  text-decoration: none;
}
.warp_ticket {
  position: relative;
  margin-top: 20px;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float,
.warp_ticket .tit_sub_float {
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
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  color: #000;
  text-align: left;
}
.ctr {
  position: absolute;
  top: 13px;
  right: 0;
}
.ctr {
  position: absolute;
  top: 18px;
  right: 0;
}
.ctr .ico_more {
  display: inline-block;
  height: 30px;
  padding-right: 12px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_more.png)
    top right no-repeat;
  font-size: 13px;
  line-height: 30px;
  color: #888;
}
.ctr .ico_more {
  display: inline-block;
  height: 30px;
  padding-right: 12px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_more.png)
    top right no-repeat;
  font-size: 13px;
  line-height: 30px;
  color: #999;
}
.box_ticket_list table.tbl_style02 {
  border-top: 1px solid #e9e9e9;
  table-layout: fixed;
}
table.tbl_style02 {
  width: 100%;
  border-top: 1px solid #e9e9e9;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
}
.hide {
  display: none;
}
table.tbl_style02 thead th {
  padding: 12px 0 10px;
  border-bottom: 1px solid #e9e9e9;
  font-size: 12px;
  color: #333;
  font-weight: 400;
  text-align: center;
}
img {
  border: 0 none;
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
table .btn_flexible {
  vertical-align: top;
  margin-top: -6px;
  margin-left: 5px;
}
.box_no_list {
  height: 143px;
  border: 1px solid #eee;
  padding-top: 91px;
  overflow: hidden;
}
.box_no_list p {
  color: #333;
  font-size: 20px;
  text-align: center;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.wrap_taken {
  margin-top: 24px;
}
.wrap_taken .box_event {
  position: relative;
  float: left;
  width: 492px;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float,
.warp_ticket .tit_sub_float {
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
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  color: #000;
  text-align: left;
}
.ctr {
  position: absolute;
  top: 13px;
  right: 0;
}
.ctr .ico_more {
  display: inline-block;
  height: 30px;
  padding-right: 12px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_more.png)
    top right no-repeat;
  font-size: 13px;
  line-height: 30px;
  color: #888;
}
.wrap_taken .list_evnt {
  border: 1px solid #eee;
  padding: 6px 23px 8px;
  margin-top: 4px;
  height: 218px;
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
.btn_line {
  border: 1px solid #ccc;
  height: 18px;
  padding: 8px 12px 8px;
}
.wrap_taken .box_answer {
  position: relative;
  float: right;
  width: 492px;
}
.box_answer .tit_sub_float,
.box_event .tit_sub_float,
.warp_ticket .tit_sub_float {
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
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  color: #000;
  text-align: left;
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
.wrap_taken .list_evnt li .event_title a {
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 84%;
  vertical-align: top;
  padding-right: 3px;
}
.wrap_taken .list_evnt li .event_title .btn_flexible_ico1 {
  margin-left: 5px;
  vertical-align: -3px;
}
.btn_flexible_ico1 {
  background-position: left -110px;
  padding-left: 9px;
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
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  vertical-align: top;
}
</style>
