<template>
  <div id="cont_wrap" class="clear_g">
    <div id="conts_section" class="pr_none">
      <!-- contents -->
      <div id="conts" class="clear_g">
        <!-- 컨텐츠 영역 시작 -->
        <h2 class="screen_out">마이티켓</h2>
        <!-- 구매 티켓 정보 -->
        <div class="wrap_ticket">
          <div class="box_ticket">
            <div class="img">
              <a href="javascript:goPerfBoard();"
                ><img
                  id="imgPerfImgUrl"
                  onerror="noImage(this,180,254)"
                  alt=""
                  src="https://cdnticket.melon.co.kr/resource/image/upload/product/2024/05/2024052819390959351f00-51ba-4540-9c9c-9588bc1ada99.jpg"
              /></a>
            </div>
            <div class="infor_text">
              <span class="ico_list_b ico_list_b1" id="iconType">좌석우위</span>
              <p class="ticket_title">
                <a href="javascript:goPerfBoard();"
                  ><span id="txtPerfMainName"
                    >뮤지컬 {{ exchangeStore.exchange.programName }}</span
                  ></a
                >
              </p>
              <p class="btnzone">
                <a
                  href="javascript: goSetList();"
                  class="btn_flexible btn_arr_down_32"
                  id="btnLinkSetList"
                  style="display: none"
                  ><span>셋리스트 듣기 </span></a
                >
                <a
                  href="javascript: goPerfBoard();"
                  class="btn_flexible btn_arr_down_32"
                  id="btnLinkReview"
                  style="display: none"
                  ><span>관람후기 작성하기</span></a
                >
              </p>
            </div>
            <div class="infor_text_check">
              <dl>
                <dt>예매번호</dt>
                <dd>
                  <span class="fc_green" id="txtRsrvNo">{{
                    exchangeStore.exchange.ticketNumber
                  }}</span>
                </dd>
                <dt id="dtPlaceName">공연장</dt>
                <dd>
                  <a
                    href="javascript: goPlaceHall();"
                    class="theater"
                    id="txtPlaceName"
                    title="충무아트센터 대극장"
                    ><span class="place">{{
                      exchangeStore.exchange.location
                    }}</span
                    ><em></em
                  ></a>
                </dd>
              </dl>
              <dl>
                <dt>예매일시</dt>
                <dd id="txtRsrvDate">2024.08.01</dd>
                <dt id="titleMemberName">예매자</dt>
                <dd id="txtMemberName">차윤슬</dd>
              </dl>
              <dl>
                <dt>관람일시</dt>
                <dd id="txtScheduleDate">2024.08.09 (금) 14:30</dd>
                <dt id="titleCancelDt">취소가능</dt>
                <dd id="txtCancelDt">2024.08.08 17:00 까지</dd>
              </dl>
              <dl>
                <dt>매수</dt>
                <dd id="txtRsrvVolume">1매</dd>
                <dt id="titlePayStatus">상태</dt>
                <dd id="txtPayStatus">예매완료</dd>
              </dl>
            </div>
          </div>
          <div class="ticket_cancelok" id="divPayArea" style="display: none">
            <div class="cancelok_comm">
              <p class="fc_green2" id="infoPayArea"></p>
            </div>
            <div class="btn_ticket" id="btnPayArea" style="display: none">
              <span class="button btColorGreen"
                ><a href="javascript:goPayment();" class="btSizeL"
                  >결제하기</a
                ></span
              >
            </div>
          </div>
        </div>
        <!-- //구매 티켓 정보 -->

        <!-- 좌석정보  -->
        <div class="wrap_seat">
          <h2 class="tit_sub_float" id="titleSeatInfo">교환 요청 좌석</h2>
          <!-- @@@ 2016.02.23 매수추가 -->
          <form id="dtlForm" method="get" name="dtlForm">
            <div class="ctr_detail2" id="btnSeatView" style="">
              <a
                href="javascript:popRsrvSeatCheck('2024080107889918', '82c51f7f4f9174cb973651e73fe44a0e9679e8000860b4253ce2a5b832f6f6df');"
                class="btn_flexible btn_arr"
                ><span>위치보기</span></a
              >
            </div>

            <div class="box_seat">
              <table class="tbl tbl_style03" summary="">
                <colgroup>
                  <col width="12%" />
                  <col width="17%" />
                  <col width="" />
                  <col width="14%" />
                  <col width="20%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>티켓주인</th>
                    <th>좌석등급</th>
                    <th>좌석번호</th>
                    <th>티켓 가격</th>
                    <th>차액</th>
                  </tr>
                </thead>
                <tbody id="seatTable">
                  <tr>
                    <td class="fst lst">내 티켓</td>
                    <td class="fst lst">
                      {{ exchangeStore.exchange.myTicketInfo.grade }}석
                    </td>
                    <td class="seat_site fst lst">
                      {{ exchangeStore.exchange.myTicketInfo.sectionName }}
                      1층 15열
                      {{ exchangeStore.exchange.myTicketInfo.seatNumber }}
                      번
                    </td>
                    <td class="seat_price fst lst">
                      {{
                        formatNumber(exchangeStore.exchange.myTicketInfo.price)
                      }}원
                    </td>
                  </tr>
                </tbody>
                <tbody id="seatTable">
                  <tr>
                    <td class="fst lst">상대 티켓</td>
                    <td class="fst lst">
                      {{ exchangeStore.exchange.otherTicketInfo.grade }}석
                    </td>
                    <td class="seat_site fst lst">
                      {{ exchangeStore.exchange.otherTicketInfo.sectionName }}
                      2층 15열
                      {{ exchangeStore.exchange.otherTicketInfo.seatNumber }}번
                    </td>
                    <td class="seat_price fst lst">
                      {{
                        formatNumber(
                          exchangeStore.exchange.otherTicketInfo.price
                        )
                      }}원
                    </td>
                    <td class="seat_cancle fst lst">
                      {{ formatNumber(exchangeStore.exchange.diffPrice) }}
                      원
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="seat_condition">
                <div class="condition_com">
                  <p class="con1" id="txtCancelCloseDtKr">
                    {{
                      !exchangeStore.exchange.isDone
                        ? '2024년 08월 08일 17시 00분 까지 교환승인가능'
                        : '이미 종료된 교환 요청입니다.'
                    }}
                  </p>
                </div>
                <div
                  class="seat_condition_btn_2 btSizeM"
                  :class="{
                    btColorGreen: !exchangeStore.exchange.isDone,
                    btColorGray: exchangeStore.exchange.isDone,
                  }"
                  @click="
                    !exchangeStore.exchange.isDone ? approval(false) : null
                  "
                >
                  교환 거절
                </div>
                <div
                  class="seat_condition_btn btSizeM"
                  :class="{
                    btColorGreen: !exchangeStore.exchange.isDone,
                    btColorGray: exchangeStore.exchange.isDone,
                  }"
                  @click="
                    !exchangeStore.exchange.isDone ? approval(true) : null
                  "
                >
                  교환 승인
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- 유의사항  -->
        <div class="wrap_note">
          <h2 class="tit_sub_float">유의사항</h2>
          <div class="box_note">
            <ul class="dotlist4x4">
              <li>
                취소마감시간 이후 또는 관람일 당일 예매하신 건에 대해서는
                취소/변경/환불이 불가합니다.
              </li>
              <li>
                예매수수료는 예매 당일 밤 12시 이전까지 취소 시 환불 가능합니다.
              </li>
              <li>
                배송이 시작된 경우 취소마감시간이전까지 멜론티켓 고객센터로
                티켓을 반환해주셔야 환불이 가능하며, 도착한 일자 기준으로
                취소수수료가 부과됩니다.<br />
                (* 단, 반환된 티켓의 배송료는 환불되지 않으며 일괄배송 상품의
                경우 취소에 대한 자세한 문의는 고객센터로 문의해 주시기
                바랍니다.)
              </li>
              <li>
                지역 및 배송서비스 사정에 따라 배송사가 변경될 수 있으며,
                배송일이 추가적으로 소요될 수 있습니다. (CJ대한통운, 우체국 외
                1개 업체)
              </li>
              <li>
                일괄배송의 경우 공연 별로 배송일자가 상이하며 지정된 배송일자
                기준으로 배송이 시작됩니다.<br />
                (* 지정된 배송일자는 상세정보 및 예매공지사항에서 확인할 수
                있습니다.)
              </li>
              <li>
                예매한 모바일티켓을 타인에게 선물한 경우, 예매취소는 선물취소
                또는 선물거절 통해 티켓을 돌려받은 후에 가능합니다.
              </li>
              <li>
                예매취소 시점과 결제 시 사용하신 신용카드사의 환불 처리기준에
                따라 취소금액의 환급방법과 환급일은 다소 차이가 있을 수
                있습니다.
              </li>
              <li>
                신용카드 할부결제로 구매하신 과티켓 수량의 일부를 취소하실 경우,
                신용카드사의 사정에 따라 혜택(무이자 할부 등)의 적용 여부가
                달라질 수 있음을 유의하시기 바랍니다.
              </li>
              <li>
                기타 문의사항은 이용안내를 참조하시거나 고객센터 1899-0042 혹은
                1:1문의를 이용하시기 바랍니다.
              </li>
            </ul>
          </div>
        </div>
        <!-- //유의사항  -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useExchangeStore } from '@/stores/useExchangeStore.js';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { formatNumber } from '@/utils/formatPrice';

const exchangeStore = useExchangeStore();
const route = useRoute();

onMounted(async () => {
  await exchangeStore.getData(route.params.id);
});

const approval = async (isAgree) => {
  await axios.post(
    '/api/approval',
    {
      exchangeId: exchangeStore.exchange.exchangeId,
      isAgree: isAgree,
    },
    { withCredentials: true }
  );
};
</script>

<style scoped>
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
.wrap_ticket {
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  border: 1px solid #ddd;
}
.wrap_ticket .box_ticket {
  overflow: hidden;
  position: relative;
  min-height: 254px;
  margin: 29px 29px 29px;
  padding-left: 219px;
}
.wrap_ticket .box_ticket .img {
  position: absolute;
  left: 0;
  top: 0;
  width: 219px;
}
.wrap_ticket .box_ticket .img a {
  display: block;
  overflow: hidden;
  width: 180px;
}
.wrap_ticket .box_ticket .img img {
  width: 180px;
  vertical-align: top;
}
img {
  border: 0 none;
}
.wrap_ticket .box_ticket .infor_text {
  overflow: hidden;
  width: 725px;
}
.ico_list_b1 {
  background-color: #41d26b;
}
.ico_list_b {
  display: inline-block;
  overflow: hidden;
  height: 16px;
  padding: 3px 7px;
  font-size: 14px;
  line-height: 19px;
  color: #fff;
  text-align: center;
}
.wrap_ticket .box_ticket .infor_text .ticket_title a {
  font-size: 28px;
  line-height: 32px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  text-decoration: none;
}
.wrap_ticket .box_ticket .infor_text .btnzone {
  margin-top: 15px;
}
.btn_arr_down_32 {
  display: inline-block;
  overflow: hidden;
  height: 32px;
  padding: 0 20px 0 0;
  background-position: right -705px;
}
.btn_flexible,
.btn_flexible span {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_flexible_20180510.png)
    no-repeat;
}
.btn_arr_down_32 span {
  display: inline-block;
  overflow: hidden;
  height: 19px;
  padding: 9px 10px 4px 15px;
  background-position: left -705px;
  font-size: 14px;
  line-height: 16px;
  color: #666;
  text-align: center;
  vertical-align: top;
}
.wrap_ticket .box_ticket .infor_text_check {
  margin-top: 42px;
}
.wrap_ticket .box_ticket .infor_text_check dt {
  display: inline-block;
  width: 62px;
  font-size: 14px;
  margin-bottom: 11px;
}
.wrap_ticket .box_ticket .infor_text_check dd {
  display: inline-block;
  width: 240px;
  font-size: 14px;
  margin-bottom: 11px;
  margin-right: 6px;
  vertical-align: top;
}
.fc_green {
  color: #00b523;
}
.wrap_ticket .box_ticket .infor_text_check dd .theater {
  text-decoration: underline;
  vertical-align: top;
}
.wrap_ticket .box_ticket .infor_text_check dd .place {
  display: inline-block;
  overflow: hidden;
  max-width: 225px;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.wrap_ticket .ticket_cancelok {
  position: relative;
  width: 100%;
  border-top: 1px solid #eee;
  padding: 22px 0 22px;
}
.wrap_ticket .ticket_cancelok .cancelok_comm {
  width: 730px;
}
.wrap_ticket .ticket_cancelok p {
  text-align: center;
  font-size: 20px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.wrap_ticket .ticket_cancelok .btn_ticket {
  position: absolute;
  top: 11px;
  right: 30px;
}
.btColorGreen {
  border: 1px solid #41d26b;
  background: #41d26b;
  height: 50px;
}
.btColorGray {
  border: 1px solid #a8a8a8;
  background: #a8a8a8;
  height: 50px;
}
.wrap_ticket .ticket_cancelok .btn_ticket .btSizeL {
  padding-left: 93px;
  padding-right: 93px;
}
.btColorGreen a.btSizeL {
  color: #fff;
}
.wrap_get {
  position: relative;
  margin-top: 22px;
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
.ctr_detail {
  position: absolute;
  top: 15px;
  right: 0;
}

table.tbl_style01 {
  width: 100%;
  border: 1px solid #eee;
  color: #666;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
}
table.tbl_style01 tbody th.fst {
  padding-top: 26px;
  padding-bottom: 12px;
}
table.tbl_style01 tbody th {
  width: 166px;
  padding: 10px 10px 9px 30px;
  background: #fafafa;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  vertical-align: top;
}
table.tbl_style01 tbody td.fst {
  padding-top: 27px;
}
table.tbl_style01 tbody td {
  padding: 10px 20px 9px 45px;
  font-size: 14px;
}
.wrap_get table .btn_flexible {
  vertical-align: top;
  margin-top: -6px;
  margin-left: 5px;
}
.btn_arr {
  display: inline-block;
  overflow: hidden;
  height: 28px;
  padding: 0 24px 0 0;
  background-position: right -80px;
}
.btn_arr span {
  display: inline-block;
  overflow: hidden;
  height: 18px;
  padding: 5px 0 5px 13px;
  background-position: left -80px;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  text-align: center;
  vertical-align: top;
}
.wrap_seat {
  position: relative;
  margin-top: 22px;
}
.wrap_seat .ctr_detail2 {
  position: absolute;
  top: 15px;
  left: 140px;
}

.wrap_seat .box_seat {
  border: 1px solid #ddd;
}
table.tbl_style03 {
  width: 100%;
}
.wrap_seat .box_seat table.tbl_style03 th {
  padding: 17px 0 15px;
  font-size: 14px;
}
table.tbl_style03 thead th {
  background: #fafafa;
  font-weight: 400;
  text-align: center;
}
.wrap_seat .box_seat table.tbl_style03 td.lst {
  padding-bottom: 20px;
}
.wrap_seat .box_seat table.tbl_style03 td.fst {
  padding-top: 20px;
}
.wrap_seat .box_seat table.tbl_style03 td {
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
}
table.tbl_style03 tbody td {
  vertical-align: top;
}
.wrap_seat .box_seat table.tbl_style03 td.seat_site {
  text-align: left;
  padding-left: 32px;
}
.wrap_seat .box_seat table.tbl_style03 td.seat_infor {
  padding-left: 40px;
  text-align: left;
}
.wrap_seat .box_seat table.tbl_style03 td.seat_price {
  padding-right: 35px;
  text-align: right;
}
.wrap_seat .box_seat table.tbl_style03 td.seat_cancle {
  padding-left: 70px;
  text-align: left;
}
.wrap_seat .box_seat .seat_condition {
  position: relative;
  border-top: 1px solid #eee;
  margin: 0 20px 20px;
}
.wrap_seat .box_seat .seat_condition .condition_com {
  display: block;
  width: 794px;
  padding: 22px 0 0;
}
.wrap_seat .box_seat .seat_condition .condition_com p.con1 {
  font-size: 20px;
  color: #00cd3c;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  text-align: center;
}
.wrap_seat .box_seat .seat_condition .condition_com p.con2 {
  margin-top: 3px;
  font-size: 13px;
  color: #666;
  text-align: center;
}
.wrap_seat .box_seat .seat_condition .seat_condition_btn {
  position: absolute;
  top: 10px;
  right: 0;
}
.seat_condition_btn {
  /* border: 1px solid #41d26b;
  background: #41d26b; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 120px;
  position: absolute;
  top: 10px;
}
.seat_condition_btn_2 {
  position: absolute;
  top: 10px;
  right: 130px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.wrap_seat .box_seat .seat_condition .seat_condition_btn .btSizeL {
  width: 170px;
}
.btSizeL {
  display: inline-block;
  height: 48px;
  line-height: 46px;
  font-size: 16px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}
.wrap_note {
  position: relative;
  margin-top: 22px;
}
.wrap_note .box_note {
  background: #fafafa;
  padding: 29px 25px 20px;
}
.wrap_note .box_note .dotlist4x4 li {
  margin-bottom: 11px;
  color: #888;
}
.dotlist4x4 li {
  margin-bottom: 7px;
  padding: 0 0 0 13px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/dot_4x4.png)
    no-repeat 0 7px;
  font-size: 13px;
  line-height: 18px;
}
.btSizeM {
  font-size: 14px;
  font-weight: 700;
}
</style>
