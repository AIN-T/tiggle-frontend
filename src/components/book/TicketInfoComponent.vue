<template>
  <div class="wrap_ticket_info">
    <h2 class="logo_onestop">
      <a href="#none"
        ><img
          src="https://cdnticket.melon.co.kr/resource/image/web/onestop/logo_onestop.png"
          alt="Melon 티켓"
      /></a>
    </h2>
    <div class="box_info">
      <h3
        class="select_tit select_t txt_prod_name"
        title="2024（G）I－DLE WORLD TOUR［iDOL］IN SEOUL"
      >
        {{ reservation.programInfo }}
      </h3>
      <div class="box_ticket">
        <ul class="box_ticket_list">
          <li class="nth nth1 txt_prod_schedule">
            {{ formatDateTime(reservation.date) }}
          </li>
          <li class="nth nth2 txt_ticket_info">
            총 1석 선택<br />{{ reservation.seatInfo }}
          </li>
        </ul>
      </div>
    </div>
    <div class="box_info">
      <h3 class="select_tit">결제금액</h3>
      <div class="box_ticket outside">
        <div class="box_total_inner here">
          <p class="tk_b">
            <span class="tk_tit">티켓금액</span
            ><span class="pay pay_comp"
              ><span id="ticketPriceTotal">{{ formatNumber(price) }}</span
              >원</span
            >
          </p>
          <ul class="list_tkpay">
            <li>
              <span class="tk_tit">기본가</span>
              <span class="pay">
                <span id="basePriceTotal">{{ formatNumber(price) }}</span
                >원</span
              >
            </li>
            <li>
              <span class="tk_tit">포인트</span
              ><span class="pay"
                ><span id="dcPriceTotal">- {{ point }}</span
                >원</span
              >
            </li>
            <li>
              <span class="tk_tit tk_tit_b">예매수수료</span>
              <span class="pay pay_comp">
                <span id="reservationFee">4,000</span>원</span
              >
            </li>
          </ul>
        </div>
        <div class="box_total_inner box_result">
          <span class="tk_tit tot_tit">총 결제금액</span>
          <strong class="pay tot_pay">
            <span id="paymentAmount">{{
              formatNumber(price - point + 4000)
            }}</span
            >원
          </strong>
        </div>
      </div>
    </div>
    <div class="box_info_bm">
      <div class="box_info_list">
        <ul class="dotlist1x1 one_list">
          <li>
            취소기한 :
            <span class="txt_og txt_cancel_close_dt">
              {{ formatRefundStringDate(reservation.date) }}
              17:00 까지</span
            >
          </li>
          <li>
            취소수수료 :
            <span class="txt_og txt_cancel_fee_info">티켓금액의 30%</span>
          </li>
        </ul>
      </div>
      <div class="btn_onestop">
        <div class="button btWhite frt">
          <router-link to="/seat" class="btnOne">
            <div class="btn_click">이전</div>
          </router-link>
        </div>
        <div :class="['button', 'btNext on', { invalid: !isValid }]">
          <a id="nextPayment" class="btnOne">
            <div class="btn_click">다음</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDateTime, formatRefundStringDate } from '@/utils/formatDate';
import { formatNumber } from '@/utils/formatPrice';
import { defineProps } from 'vue';

defineProps(['reservation', 'point', 'isValid', 'price']);
</script>

<style scoped>
.btn_click {
  width: auto;
  display: flex;
  justify-content: center;
  font-weight: 700;
}
.here {
  height: 90px;
}
.outside {
  height: 160px;
}
.wrap_select {
  float: left;
  width: 682px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list {
  margin: 10px 9px;
  font-size: 13px;
  line-height: 20px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list .nth1 {
  padding: 0 0 10px;
  border-bottom: 1px solid #eee;
  letter-spacing: 0;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list .nth {
  margin-left: 5px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list .nth2 {
  padding-top: 10px;
}
.wrap_ticket_info .box_info .box_ticket .box_ticket_list .nth {
  margin-left: 5px;
}
.box_select_t {
  position: relative;
}
.select_tit {
  padding-bottom: 6px;
  font-weight: 700;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic',
    sans-serif;
  font-size: 16px;
  color: #333;
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
strong {
  font-weight: 700;
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
.box_select .list_ticket {
  display: block;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  line-height: 38px;
}
.box_select .list_ticket .box_ticket_t {
  display: block;
  overflow: hidden;
  margin: 0 8px;
}
.box_select .list_ticket .box_ticket_t .tit_tk {
  display: inline-block;
  width: 270px;
  color: #333;
  height: 38px;
  vertical-align: top;
  margin-top: -3px;
}
.wrap_ticket_info {
  position: relative;
  float: left;
  width: 245px;
  padding: 14px 10px 14px 13px;
  height: 624px;
  background-color: #fafafa;
}
.wrap_ticket_info .logo_onestop {
  padding-left: 65px;
  height: 22px;
}
.wrap_ticket_info .box_info .box_ticket .box_result .tot_tit {
  font-size: 14px;
  color: #333;
}
.wrap_ticket_info .box_info {
  padding-top: 20px;
}
.wrap_ticket_info .box_info .select_tit.select_t {
  overflow: hidden;
  line-height: 19px;
  max-height: 33px;
  margin-top: 7px;
  margin-bottom: 7px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-weight: 400;
}
.wrap_ticket_info .select_tit {
  font-weight: 400;
}
.wrap_ticket_info .box_info .box_ticket {
  position: relative;
  width: 240px;
  border: 1px solid #eee;
  background-color: #fff;
}
.wrap_ticket_info .box_info .box_ticket .box_total_inner {
  margin: 10px 14px;
  line-height: 20px;
}
.wrap_ticket_info .box_info .box_ticket .box_total_inner .tk_b {
  font-size: 14px;
  color: #333;
}
.wrap_ticket_info .box_info .box_ticket .box_total_inner .tk_tit {
  float: left;
  width: 37%;
}
.wrap_ticket_info .box_info .box_ticket .box_total_inner .pay {
  float: right;
  width: 63%;
  text-align: right;
  letter-spacing: 0;
}
.wrap_ticket_info .box_info .box_ticket .box_total_inner .list_tkpay {
  line-height: 24px;
  color: #888;
  padding-top: 25px;
}
.wrap_ticket_info .box_info .box_ticket .box_result {
  margin: 0;
  padding: 15px;
  border-top: 1px solid #eee;
  font-weight: 700;
}
.wrap_ticket_info .box_info .box_ticket .box_result .tot_pay {
  font-size: 22px;
  color: #00b523;
}
.wrap_ticket_info .box_info_bm .box_info_list {
  padding: 10px 0;
}
.one_list li {
  position: relative;
  font-size: 12px;
}
.dotlist1x1 li {
  margin-bottom: 1px;
  padding: 0 0 0 6px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/dot_1x1.png)
    no-repeat 0 6px;
  font-size: 13px;
  line-height: 18px;
}
.txt_og {
  color: #f28e47;
}
.wrap_ticket_info .box_info_bm .box_info_list {
  padding: 10px 0;
}
.btn_onestop {
  position: absolute;
  left: 15px;
  bottom: 10px;
}
.btn_onestop .button.frt {
  margin-right: -3px;
  color: #000;
}
.btn_onestop .button {
  display: inline-block;
  position: relative;
  line-height: 48px;
  font-size: 14px;
}
.btn_onestop .button.btWhite a {
  border: 1px solid #ccc;
  background: #fff;
}
.btn_onestop .button .btnOne {
  display: block;
  width: 118px;
  height: 48px;
  text-decoration: none;
}
.btn_onestop .button {
  display: inline-block;
  position: relative;
  line-height: 48px;
  font-size: 14px;
}
.btn_onestop .button.btNext.on {
  border: none;
  background: #41d26b;
}

.btn_onestop .button.btNext.on.invalid a {
  border: 1px solid #888;
  background: #888;
  pointer-events: none; /* 클릭 이벤트를 비활성화 */
  cursor: not-allowed;
}

.btn_onestop .button.btNext.on.invalid {
  border: 1px solid #888;
  background: #888;
  cursor: not-allowed;
}

.btn_onestop .button.btNext {
  border: 1px solid #888;
  background: #888;
}
.btn_onestop .button.btNext.on a {
  border: 1px solid #41d26b;
  background: #41d26b;
}
.btn_onestop .button.btNext .btnOne {
  color: #fff;
}
.btn_onestop .button.btWhite .btnOne {
  color: #000;
}
.btn_onestop .button .btnOne {
  display: block;
  width: 118px;
  height: 48px;
  text-decoration: none;
}
</style>
