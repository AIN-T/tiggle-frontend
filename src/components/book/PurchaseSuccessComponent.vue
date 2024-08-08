<template>
  <div class="section_onestop">
    <div class="wrap_select">
      <div class="wrap_reserve">
        <div class="box_success">
          <p class="tit_gr">결제가 정상적으로 완료되었습니다.</p>
          <p class="txt_mid">
            예매 상세내역은 마이페이지 &gt; 예매확인/취소에서 확인하실 수
            있습니다.
          </p>
        </div>
        <!-- 예매정보-->
        <div class="box_reserve">
          <div class="box_reserve_info">
            <table class="tbl">
              <caption class="hide"></caption>
              <colgroup>
                <col style="width: 122px" />
                <col style="width: 500px" />
              </colgroup>
              <tbody>
                <tr>
                  <th class="txt_gray frt">예매번호</th>
                  <td class="frt" id="txtRsrvNo">M247190855</td>
                </tr>
                <tr>
                  <th class="txt_gray">공연명</th>
                  <td id="txtProdName">뮤지컬 〈베르사유의 장미〉</td>
                </tr>
                <tr>
                  <th class="txt_gray">공연장</th>
                  <td id="txtPlaceName">충무아트센터</td>
                </tr>
                <tr>
                  <th class="txt_gray">좌석</th>
                  <td class="view" id="txtProdSeat">VIP석 1층 15열 28번</td>
                </tr>
                <tr>
                  <th class="txt_gray">수령방법</th>
                  <td id="txtDelvyType">
                    현장수령
                    <p class="reserve_txt">
                      공연 당일 현장 교부처에서 예매번호 및 본인 확인 후 티켓을
                      수령하여 입장이 가능합니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th class="txt_gray">결제수단</th>
                  <td id="txtPayMethod">
                    신용카드 (국민)
                    <div class="payment">
                      <p>- 계좌번호 : 50529073999851</p>
                      <p>
                        - 입금마감시간 :
                        <span style="color: red">2024년 8월 2일 23시 59분</span>
                      </p>
                      <p>- 예금주명 : 멜론티켓</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="txt_gray">취소가능일시</th>
                  <td id="txtFinalCancelDate">2024년 8월 8일 17시 00분 까지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 버튼: 닫기 and 예매내역 확인으로 수정 -->
    <TicketInfoComponent />
  </div>
</template>

<script>
import TicketInfoComponent from '../book/TicketInfoComponent.vue';

export default {
  name: 'PurchaseSuccessComponent',
  components: {
    TicketInfoComponent,
  },
};
</script>

<style scoped>
.section_onestop {
  width: 950px;
  height: 652px;
  position: relative;
}
.wrap_select {
  float: left;
  width: 682px;
}
.wrap_reserve {
  position: relative;
  height: 625px;
  padding: 27px 30px 0;
  overflow: hidden;
  overflow-y: auto;
}
.wrap_reserve .box_success {
  text-align: center;
}
.wrap_reserve .box_success {
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic',
    sans-serif;
}
.tit_gr {
  padding-bottom: 10px;
  font-size: 30px;
  color: #00b523;
}
.txt_frt {
  font-size: 17px;
  color: #333;
  padding-bottom: 3px;
  letter-spacing: -2px;
}
.wrap_reserve .box_reserve {
  position: relative;
  margin: 20px 0;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
}
.hide {
  display: none;
}
.wrap_reserve .box_reserve_info td.frt,
.wrap_reserve .box_reserve_info th.frt {
  border-top: 1px solid #eee;
}
.wrap_reserve .box_reserve_info th {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  text-align: left;
  padding: 9px 10px 8px 20px;
  font-weight: 400;
  background-color: #fafafa;
  vertical-align: top;
}
.txt_gray {
  font-weight: 400;
  color: #888;
}
.wrap_reserve .box_reserve_info td {
  padding: 9px 0 8px 20px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
}
.btn_arr {
  display: inline-block;
  overflow: hidden;
  height: 28px;
  padding: 0 24px 0 0;
  background-position: right -80px;
}
.btn_flexible,
.btn_flexible span {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_flexible_20180510.png)
    no-repeat;
}
.wrap_reserve .box_reserve_info td .btn_view {
  display: inline-block;
  margin-left: 5px;
  height: 26px;
  vertical-align: bottom;
}
.wrap_reserve .box_reserve_info td.view {
  padding: 5px 0 6px 20px;
}
.wrap_reserve .box_reserve_info td .btn_view .btn_arr span {
  padding: 6px 0 0 10px;
  height: 26px;
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
</style>
