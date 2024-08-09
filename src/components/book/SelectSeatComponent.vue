<template>
  <div class="section_onestop">
    <div class="wrap_select">
      <!--좌석선택  영역-->
      <div class="box_seat_top">
        <h3 class="tit_seat">
          좌석 선택<span
            class="tit_s txt_prod_name"
            title="2024（G）I－DLE WORLD TOUR［iDOL］IN SEOUL"
            >{{ bookingStore.book.programName }}</span
          >
          <span class="seat_wrap_sel">
            <!-- 셀렉트박스 -->
            <select
              id="scheduleNo"
              name="scheduleNo"
              class="sel_cate"
              onchange="selectSchedule(this.value);"
            >
              <option value="100001" selected="selected">
                2024.08.03 (토) 18:00
              </option>
              <option value="100002">2024.08.04 (일) 17:00</option>
            </select>
          </span>
        </h3>
      </div>
      <div class="wrap_seat">
        <!-- 좌석영역-->
        <div class="box_stage" style="">
          <!-- 구역설명-->
          <div class="stage"><span>무대방향 (STAGE)</span></div>
          <div class="txt_stage">
            현재 보고 계신 구역은
            <span id="areaName">{{ bookingStore.book.sectionId }}구역</span
            >입니다.
          </div>
        </div>
        <div class="stage_img">
          <div id="wrapper" style="width: 682px; height: 526px">
            <div
              id="scroller"
              style="
                transform-origin: 0px 0px;
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                transition-duration: 0ms;
                transform: translate(0px, 0px) scale(1);
                width: 682px;
                height: 526px;
              "
            >
              <div
                class="seat_block"
                id="ez_canvas_zone"
                style="width: 682px; height: 602px; display: none"
              ></div>
              <SeatComponent @seatInfo="getData" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_ticket_info">
      <h2 class="logo_onestop">
        <a href="#none"
          ><img
            src="https://daqu2024-s3.s3.ap-northeast-2.amazonaws.com/tiggle.png"
            alt="TIGGLE"
        /></a>
      </h2>
      <div class="wrap_seat_list">
        <div class="seat_list">
          <h3 class="select_tit">
            좌석등급/잔여석<span
              class="ico_info"
              onmouseover="toolTip('layer_ticket');"
              >유의사항</span
            ><a
              href="#none"
              id="btnReloadSchedule"
              class="btn_flexible btn_flexible_ico2 btn_detail"
              ><span>새로고침</span></a
            >
          </h3>
          <div class="box_seat">
            <div class="box_seat_inner box_seat_area">
              <table class="tbl">
                <caption class="hide"></caption>
                <colgroup>
                  <col style="width: 26px" />
                  <col />
                  <col style="width: 65px" />
                  <col style="width: 60px" />
                  <col style="width: 22px" />
                </colgroup>
                <tbody id="divGradeSummary">
                  <tr id="gd10015">
                    <th class="seat_color open">
                      <em
                        class="seat_color seat_vip"
                        style="background-color: #bea886"
                      ></em>
                    </th>
                    <td class="seat_name open">지정석</td>
                    <td class="price open">154,000원</td>
                    <td class="seat_remain open"></td>
                    <td class="area_info open">좌석보기</td>
                  </tr>
                  <tr class="box_list_area">
                    <td colspan="5">
                      <div class="list_area listOn">
                        <ul>
                          <li v-for="seat in seatList" :key="seat.idx">
                            <span class="area_tit"
                              >{{ seat.floor }} 층 {{ seat.section }} 구역</span
                            ><span class="seat_residual">
                              <strong>{{ seat.seat }}</strong
                              >석</span
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="layer_ticket"
            id="layer_ticket"
            style="position: absolute; top: 15px; left: 0; width: 238px"
          >
            <div class="layer_arr" style="left: 114px"></div>
            <div class="tk_header">
              <div class="tk_header1">
                <span class="tk_tit"></span>
              </div>
            </div>
            <div class="tk_middle">
              <div class="tk_middle1">
                <div>
                  <p>
                    좌석선택 이후 5분이내 결제가 완료되지 않을 시 선택하신
                    좌석의 선점 기회를 잃게 됩니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="tk_footer"><div class="tk_footer1"></div></div>
          </div>
        </div>
        <div class="box_seat">
          <div class="select_seat_info">
            <div class="select_seat_title">선택 좌석</div>
            <div class="select_seat_price" v-if="selectedSeat != null">
              1구역 {{ selectedSeat.row }}열 {{ selectedSeat.seatNumber }}번
            </div>
          </div>
        </div>
      </div>
      <div class="box_info_bm" @click="next">
        <div class="btn_onestop">
          <span class="button btNext"
            ><div id="nextTicketSelection" class="btnOne btnOneB" to="/price">
              좌석 선택 완료<em class="one_arr next_ar">다음</em>
            </div></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SeatComponent from "../book/SeatComponent.vue";
import { useBookingStore } from "@/stores/useBookingStore";

const selectedSeat = ref(null);

// 좌석 리스트 상태 정의
const seatList = ref([
  { floor: 1, section: "A", seat: 0 },
  { floor: 1, section: "B", seat: 0 },
  { floor: 1, section: "C", seat: 0 },
  { floor: 1, section: "D", seat: 1 },
  { floor: 1, section: "E", seat: 0 },
  { floor: 1, section: "F", seat: 0 },
  { floor: 2, section: "A", seat: 2 },
  { floor: 2, section: "B", seat: 0 },
  { floor: 2, section: "C", seat: 0 },
  { floor: 2, section: "D", seat: 3 },
  { floor: 2, section: "E", seat: 1 },
  { floor: 2, section: "F", seat: 0 },
]);

const getData = (seatInfo) => {
  selectedSeat.value = seatInfo;
};

const bookingStore = useBookingStore();

const next = () => {
  bookingStore.setSeat(
    bookingStore.book.programId,
    bookingStore.book.timesId,
    selectedSeat.value.seatId
  );
};
</script>

<style scoped>
#wrapper {
  position: absolute;
  overflow: hidden;
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;
}
#scroller {
  position: absolute;
  width: inherit;
  height: inherit;
  -webkit-tap-highlight-color: transparent;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
.section_onestop {
  width: 950px;
  heigth: 652px;
  position: relative;
}
.section_onestop:after {
  content: "";
  display: block;
  clear: both;
}
.wrap_select {
  float: left;
  width: 682px;
}
.wrap_ticket_info {
  position: relative;
  float: left;
  width: 245px;
  padding: 14px 10px 14px 13px;
  height: 624px;
  background-color: #fafafa;
}
.wrap_sel .btn_sel .sel_cate {
  padding-left: 5px;
  line-height: 24px;
  text-align: left;
  border: 1px solid #ddd;
}
.select_tit {
  padding-bottom: 6px;
  font-weight: 700;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic",
    sans-serif;
  font-size: 16px;
  color: #333;
}
.one_list li {
  position: relative;
  font-size: 12px;
}
.one_list .btn_detail {
  margin-left: 0;
}
.btn_onestop {
  position: absolute;
  left: 15px;
  bottom: 10px;
}
.btn_onestop .button {
  display: inline-block;
  position: relative;
  line-height: 48px;
  font-size: 14px;
}
.btn_onestop .button.btNext .btnOne {
  color: #fff;
}
.btn_onestop .button.btNext {
  border: 1px solid #888;
  background: #888;
}
.btn_onestop .button .btnOne {
  display: block;
  width: 118px;
  height: 48px;
  text-decoration: none;
}
.btn_onestop .button .btnOne.btnOneB {
  width: 243px;
}
.btn_onestop .button .btnOne .one_arr {
  display: inline-block;
  overflow: hidden;
  width: 6px;
  height: 17px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/btn_onestop.png)
    no-repeat;
  background-size: 100px auto;
  text-indent: -9999px;
}
.btn_onestop .button .btnOne .one_arr.next_ar {
  position: absolute;
  top: 18px;
  right: 20px;
  background-position: -30px -20px;
}
.box_select .box_ticket {
  width: 620px;
}
.box_select .box_ticket h4 {
  display: block;
  overflow: hidden;
  position: relative;
  height: 40px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #fafafa;
}
.box_select .box_ticket h4 .tit_ticket {
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin: 0 8px;
  color: #333;
}
.box_select .box_ticket h4 .txt {
  display: block;
  position: absolute;
  top: 0;
  right: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 38px;
  letter-spacing: 0;
  color: #333;
}
.box_select .box_ticket h4 .txt em {
  font-weight: 700;
  color: #00b523;
}
.box_select .list_ticket {
  display: block;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  line-height: 38px;
}
.box_top {
  padding-top: 30px;
}
.ticket_btn {
  width: 605px;
  height: 38px;
}
.box_seat_top {
  height: 49px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.box_seat_top .tit_seat {
  position: relative;
  padding: 11px 0 0 28px;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic",
    sans-serif;
  font-size: 16px;
  color: #404040;
  height: 38px;
  width: 655px;
  overflow: hidden;
  margin: 0;
}
.box_seat_top .tit_seat .tit_s {
  font-weight: 400;
  margin-left: 18px;
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 52%;
}
.box_seat_top .seat_wrap_sel {
  position: absolute;
  top: 9px;
  right: 1px;
  border: 1px solid #ccc;
  height: 31px;
}
.box_seat_top .seat_wrap_sel .sel_cate {
  width: 218px;
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  border: 0 none;
  padding-left: 3px;
}
.wrap_seat {
  position: relative;
  height: 602px;
  background-color: #e2e2e2;
}
.wrap_seat .box_stage {
  text-align: center;
  padding-top: 10px;
}
.wrap_seat .box_stage .stage {
  width: 485px;
  height: 40px;
  margin-left: 98px;
  background-color: #c8c8c8;
}
.wrap_seat .box_stage .stage span {
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic",
    sans-serif;
  font-size: 16px;
  color: #fff;
  line-height: 40px;
}
.wrap_seat_box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 682px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/bg_seat.png)
    repeat;
}
.wrap_seat .box_stage .txt_stage {
  margin: 15px;
  font-size: 14px;
}
.seat_box .seat_btn {
  height: 35px;
  padding: 0 10px 0 30px;
  font-family: AppleSDGothicNeo-Regular, "맑은 고딕", "Malgun Gothic",
    sans-serif;
  font-size: 16px;
  color: #fff;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/bg_onestop_bigarr.png)
    right -34px no-repeat;
  background-size: 40px auto;
  line-height: 35px;
  cursor: pointer;
}
.seat_box.open .seat_btn {
  background-position: right 0;
}
.seat_box .seat_btn .txt_seat {
  margin-left: 5px;
  color: #00b523;
}
.seat_box .seat_btn .txt_seat_s {
  margin-left: 5px;
  font-size: 14px;
  color: #ccc;
}
.seat_box.open .seat_btn .txt_seat {
  text-decoration: underline;
}
.btn_detail {
  margin-left: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
  background-color: #fff;
}
.wrap_ticket_info .logo_onestop {
  padding-left: 65px;
  height: 22px;
}
.wrap_ticket_info .box_info {
  padding-top: 20px;
}
.wrap_ticket_info .box_info .box_ticket {
  position: relative;
  width: 240px;
  border: 1px solid #eee;
  background-color: #fff;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list {
  margin: 10px 9px;
  font-size: 13px;
  line-height: 20px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_inner {
  padding: 10px 15px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_inner th {
  text-align: left;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_inner td {
  padding: 8px 0;
}
.wrap_ticket_info .box_info_bm .box_info_list {
  padding: 10px 0;
}
.wrap_ticket_info .box_info_bm .box_info_list .info_list li .btn_detail {
  vertical-align: top;
}
.wrap_ticket_info .wrap_seat_list {
  padding-top: 25px;
}
.wrap_ticket_info .wrap_seat_list .seat_list {
  position: relative;
}
.wrap_ticket_info .wrap_seat_list .seat_list .select_tit .ico_info {
  overflow: hidden;
  display: inline-block;
  margin-left: 4px;
  width: 14px;
  height: 14px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/btn_onestop.png)
    no-repeat -20px -40px;
  background-size: 100px auto;
  text-indent: -9999px;
  vertical-align: middle;
  cursor: pointer;
}
.wrap_ticket_info .wrap_seat_list .seat_list .select_tit .btn_detail {
  margin-left: 57px;
}
.box_seat {
  margin-top: 10px;
}
.wrap_ticket_info .wrap_seat_list .box_seat {
  width: 240px;
  border: 1px solid #eee;
  background-color: #fff;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner {
  margin: 8px 0;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner.box_seat_area {
  overflow-y: auto;
  margin: 0;
  padding-top: 9px;
  height: 240px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner.box_seat_area2 {
  overflow-y: scroll;
  margin: 0;
  height: 110px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .seat_area {
  border: 1px solid red;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .list_seat li {
  display: inline;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner_inner .list_seat li .seat li {
  font-size: 13px;
  font-weight: 400;
  line-height: 32px;
}
.wrap_ticket_info
  .wrap_seat_list
  .box_seat_inner
  .list_seat
  li
  .seat
  .seat_name
  .seat_color {
  display: block;
  margin-right: 7px;
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
.wrap_ticket_info
  .wrap_seat_list
  .box_seat_inner
  .list_seat
  li
  .seat
  .seat_name
  .seat_color.seat_vip {
  background-color: #6f68ae;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .tbl {
  width: 100%;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner tr {
  cursor: pointer;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner tr:hover {
  background-color: #eee;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner tr.box_list_area:hover {
  background-color: #fff;
}
.select_seat_title,
.wrap_ticket_info .wrap_seat_list .box_seat_inner td {
  font-size: 13px;
  font-weight: 400;
  padding: 7px 0 6px;
  text-align: right;
  vertical-align: top;
  letter-spacing: 0;
}
.select_seat_title,
.wrap_ticket_info .wrap_seat_list .box_seat_inner td.seat_name {
  text-align: left;
}
.select_seat_price,
.select_seat_title {
  font-weight: 600;
}
.select_seat_info {
  padding: 10px;
}
.select_seat_price {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #fcf0dd;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner th.seat_color {
  display: inline-block;
  vertical-align: top;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner th.seat_color em.seat_color {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 10px 4px 0 10px;
  text-indent: -9999px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner th.seat_color.seat_vip {
  background-color: #6f68ae;
}
.wrap_ticket_info
  .wrap_seat_list
  .box_seat_inner
  th.seat_color.seat_color.seat_s {
  background-color: #f9d02c;
}
.wrap_ticket_info
  .wrap_seat_list
  .box_seat_inner
  th.seat_color.seat_color.seat_a {
  background-color: #a2d747;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner td.seat_remain {
  color: #00b523;
  padding-right: 3px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner td.area_info {
  overflow: hidden;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/bg_onestop_arr2.png)
    no-repeat -5px -5px;
  text-indent: -9999px;
  font-size: 0;
  padding: 0;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner td.area_info.open {
  background-position: right -5px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .box_list_area td {
  padding: 0;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .box_list_area .list_area {
  display: none;
}
.wrap_ticket_info
  .wrap_seat_list
  .box_seat_inner
  .box_list_area
  .list_area.listOn {
  display: block;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .box_list_area .list_area {
  color: #888;
  text-align: left;
  line-height: 20px;
}
.wrap_ticket_info .wrap_seat_list .box_seat_inner .box_list_area .list_area li {
  padding: 0 10px 0 28px;
}
.layer_ticket {
  z-index: 2;
  display: none;
  width: 165px;
  position: absolute;
  top: 90px;
  left: 73px;
}
.layer_ticket .layer_arr {
  position: absolute;
  top: 1px;
  right: 78px;
  display: block;
  width: 15px;
  height: 10px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/btn_onestop.png)
    no-repeat;
  background-size: 100px auto;
  background-position: -50px -20px;
}
.layer_ticket .tk_tit {
  display: inline-block;
}
.layer_ticket .tk_footer,
.layer_ticket .tk_footer .tk_footer1,
.layer_ticket .tk_header,
.layer_ticket .tk_header .tk_header1 {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/bg_popup.png)
    no-repeat;
}
.layer_ticket .tk_middle,
.layer_ticket .tk_middle .tk_middle1 {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/bg_popup1.png)
    repeat-y;
}
.layer_ticket .tk_header {
  width: 100%;
  height: 18px;
  padding: 0 0 0 8px;
  background-position: 0 0;
}
.layer_ticket .tk_header .tk_header1 {
  width: 100%;
  height: 18px;
  padding: 0 0 0 2px;
  background-position: right 0;
}
.layer_ticket .tk_footer {
  width: 100%;
  height: 20px;
  padding: 0 0 0 8px;
  background-position: 0 -40px;
}
.layer_ticket .tk_footer .tk_footer1 {
  width: 100%;
  height: 20px;
  padding: 0 0 0 2px;
  background-position: right -40px;
}
.layer_ticket .tk_middle {
  width: 100%;
  padding: 0 0 0 8px;
  background-position: 0 0;
}
.layer_ticket .tk_middle .tk_middle1 {
  width: 100%;
  padding: 0 0 0 2px;
  background-position: right 0;
}
.layer_ticket .layer_ticket_inner.layer_info {
  width: 234px;
  padding: 12px 5px;
  font-size: 12px;
}
.wrap_onestop {
  width: 1008px;
  border-top: 1px solid #ddd;
}
.wrap_onestop .wrap_select {
  width: 680px;
}
.wrap_onestop .wrap_select .wrap_seat {
  height: 624px;
}
.wrap_onestop .wrap_ticket_info {
  width: 288px;
  padding: 0 20px;
}
.box_seat h4 {
  color: #333;
  background: #fafafa;
  padding: 6px 10px;
  font-weight: 400;
}
.box_seat h4 strong {
  color: #00b523;
}
.box_seat .seat_info li {
  padding: 2px 10px;
  color: #666;
  letter-spacing: 0;
}
.box_seat .seat_info li:hover {
  background-color: #eee;
}
.seat_info li a {
  line-height: 13px;
}
.seat_info em.seat_color {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 7px 7px 0 5px;
  text-indent: -9999px;
}
.seat_info .seat_color.seat_vip {
  background-color: #6f68ae;
}
.seat_info .seat_color.seat_s {
  background-color: #f9d02c;
}
.seat_info .seat_color.seat_a {
  background-color: #a2d747;
}
.btn_flexible_ico2 {
  background-position: left -860px;
  padding-left: 7px;
}
.btn_flexible_ico2 span {
  background-position: right -860px;
  padding-right: 8px;
}
.wrap_ticket_info .select_tit {
  font-weight: 400;
}
.list-title {
  display: block;
  color: #888;
  line-height: 22px;
  padding-bottom: 2px;
}
.btn_flexible_ico2 span {
  background-position: right -130px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, "돋움", Dotum, "맑은 고딕",
    "Malgun Gothic", "Apple Gothic", sans-serif;
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
.btn_flexible {
  display: inline-block;
  border: 2px solid #aaa3a3;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  height: 10px;
  width: 16px;
  background: #e1e1e1;
  -webkit-box-shadow: #e1e1e1;
}
::-webkit-scrollbar-track {
  background: #eee;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
}
.btn_flexible_ico1,
.btn_flexible_ico2,
.btn_flexible_ico3 {
  display: inline-block;
  overflow: hidden;
  height: 18px;
  padding-left: 11px;
}
</style>
