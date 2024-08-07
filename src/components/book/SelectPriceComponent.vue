<template>
  <div class="section_onestop">
    <!--가격선택  영역-->
    <div class="wrap_select">
      <div class="location_step">
        <ul class="list_step">
          <li class="step">
            <a
              href="/reservation/popup/stepBlock.htm"
              class="btn_o_menu btn_o_menu01"
              >좌석선택</a
            >
          </li>
          <li class="step">
            <a href="javascript:;" class="btn_o_menu btn_o_menu02 on"
              >가격선택/결제</a
            >
          </li>
          <li class="step">
            <a href="javascript:;" class="btn_o_menu btn_o_menu03">배송/결제</a>
          </li>
        </ul>
      </div>
      <div class="box_select box_r">
        <div class="box_select_t">
          <h3 class="select_tit">티켓가격을 선택하세요</h3>
          <div id="partTicketType" class="box_cont box_ticket">
            <h4>
              <strong class="tit_ticket">지정석</strong
              ><span class="txt"
                ><span class="txt_seat_grade_tot" style="display: "
                  ><span id="seatGrade10015_tot">1</span>매중 </span
                ><em id="seatGrade10015_sel">1</em>매 선택</span
              >
            </h4>
            <div class="list_ticket DP0020">
              <div class="box_ticket_t on">
                <div>
                  <div>
                    <dl>
                      <dt class="tit_tk base_pr">기본가</dt>
                      <dd class="price price_sale_r txt_bd">154,000원</dd>
                      <dd class="price wrap_sel">
                        <select
                          id="volume_10015_10067"
                          name="volume_10015_10067"
                          class="sel_cate selectSeatGrade selectSeatGrade_10015 selectDcType_DP0020_null_null"
                          onchange="sltTicket(this, '10015', '10067', '지정석');"
                        >
                          <option value="0">0매</option>
                          <option value="1">1매</option>
                        </select>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="box_ticket_t on">
                <div>
                  <div>
                    <dl>
                      <dt class="tit_tk base_pr">포인트</dt>
                      <dd class="price price_sale_r txt_bd">4,000원</dd>
                      <dd class="price wrap_sel">
                        <input
                          type="text"
                          class="sel_cate selectSeatGrade selectSeatGrade_10015 selectDcType_DP0020_null_null"
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form id="dForm" method="post" name="dForm">
          <!-- 결제수단 선택-->
          <div id="partPaymentInfo" class="box_payment" style="">
            <h3 class="select_tit">결제수단을 선택하세요</h3>
            <ul class="list_receipt_how">
              <li id="payMethod001">
                <label>
                  <input
                    type="radio"
                    id="payMethodCode001"
                    name="payMethodCode"
                    value="AP0001"
                    onclick="setPayMethodCode(this);"
                    title="신용카드"
                    class="radio_pay_metohd_code"
                  />
                  <span
                    id="payMethodName001"
                    class="txt_lab radio_pay_metohd_label"
                    >신용카드</span
                  >
                </label>
              </li>
              <li id="payMethod003">
                <label>
                  <input
                    type="radio"
                    id="payMethodCode003"
                    name="payMethodCode"
                    value="AP0003"
                    onclick="setPayMethodCode(this);"
                    title="무통장입금"
                    class="radio_pay_metohd_code"
                    disabled=""
                  />
                  <span
                    id="payMethodName003"
                    class="txt_lab radio_pay_metohd_label"
                    style="color: #ccc"
                    >무통장입금</span
                  >
                </label>
              </li>
              <li id="payMethod002">
                <label>
                  <input
                    type="radio"
                    id="payMethodCode002"
                    name="payMethodCode"
                    value="AP0002"
                    onclick="setPayMethodCode(this);"
                    title="휴대폰 결제"
                    class="radio_pay_metohd_code"
                    disabled=""
                  />
                  <span
                    id="payMethodName002"
                    class="txt_lab radio_pay_metohd_label"
                    style="color: #ccc"
                    >휴대폰 결제</span
                  >
                </label>
              </li>
            </ul>
            <div class="box_card box_gray" id="partPaymentCard" style="">
              <!-- 신용 카드 시 노출 -->
              <div class="box_inp_opt">
                <table class="tbl">
                  <caption class="hide"></caption>
                  <colgroup>
                    <col style="width: 68px" />
                    <col style="width: 220px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th class="txt_gray">카드</th>
                      <td>
                        <div class="wrap_sel">
                          <!-- selected된 값이 DP되는 영역 -->
                          <div class="btn_sel">
                            <!-- 셀렉트박스 -->
                            <select
                              id="cardCode"
                              name="cardCode"
                              onchange="setCardContent(this.value);"
                              class="sel_cate"
                            >
                              <option value="" selected="selected">
                                카드를 선택해주세요.
                              </option>
                              <option value="SAMSUNG">삼성카드</option>
                              <option value="KB">KB국민카드</option>
                              <option value="HYUNDAI">현대카드</option>
                              <option value="BC">BC카드</option>
                              <option value="SHINHAN">신한카드</option>
                              <option value="NH">NH농협카드</option>
                              <option value="NHMH">NH문화누리카드</option>
                              <option value="HANA_SK">하나카드</option>
                              <option value="LOTTE">롯데카드</option>
                              <option value="CITI">씨티카드</option>
                              <option value="KAKAOBANK">카카오뱅크카드</option>
                              <option value="BCKA">카카오페이카드</option>
                              <option value="KBANK">케이뱅크카드</option>
                              <option value="WOORI">우리카드</option>
                              <option value="GWANGJU">광주카드</option>
                              <option value="JEONBOOK">전북카드</option>
                              <option value="SOOHYUP">수협카드</option>
                              <option value="KDB">KDB산업은행카드</option>
                              <option value="JEJU">제주카드</option>
                            </select>
                            <input
                              type="hidden"
                              id="cardCodeName"
                              name="cardCodeName"
                            />
                            <input
                              type="hidden"
                              id="kcpCardBpId"
                              name="kcpCardBpId"
                            />
                            <input
                              type="hidden"
                              id="cardBpIssueCode"
                              name="cardBpIssueCode"
                            />
                            <input
                              type="hidden"
                              id="autheTypeCode"
                              name="autheTypeCode"
                            />
                            <input
                              type="hidden"
                              id="cardQuota"
                              name="cardQuota"
                              value="12"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <span id="txtCardDcContext" style="display: none"
                          >5만원이상 2~5개월 무이자 할부 적용</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <th class="txt_gray">할부</th>
                      <td>
                        <div class="wrap_sel">
                          <!-- selected된 값이 DP되는 영역 -->
                          <div class="btn_sel">
                            <!-- 셀렉트박스 -->
                            <select id="quota" name="quota" class="sel_cate">
                              <option value="00" selected="selected">
                                일시불
                              </option>
                              <option value="2">2개월</option>
                              <option value="3">3개월</option>
                              <option value="4">4개월</option>
                              <option value="5">5개월</option>
                              <option value="6">6개월</option>
                              <option value="7">7개월</option>
                              <option value="8">8개월</option>
                              <option value="9">9개월</option>
                              <option value="10">10개월</option>
                              <option value="11">11개월</option>
                              <option value="12">12개월</option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href="#none"
                          class="btn_flexible btn_arr_down"
                          onclick="$('#chargeSale').show(); return false;"
                        >
                          <span>무이자</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="tit_check"
                  id="txtCardPointGuide1"
                  style="display: none"
                ></div>
                <p
                  class="txt_more txt_gray"
                  id="txtCardPointGuide2"
                  style="display: none"
                ></p>
              </div>
            </div>
          </div>
          <div id="partCheckAgree" class="box_cont box_receipt">
            <ul class="box_agree">
              <li class="list_agree frt">
                <div class="select_tit">
                  예매자동의
                  <div class="tit_check_r">
                    <input
                      type="checkbox"
                      id="chkAgreeAll"
                      name="chkAgreeAll"
                      title="전체 동의합니다."
                    />
                    <label for="chkAgreeAll"
                      ><span class="txt_lab">전체동의</span></label
                    >
                  </div>
                </div>
              </li>
              <li class="list_agree">
                <div class="tit_check">
                  <input
                    type="checkbox"
                    id="chkAgree01"
                    name="chkAgree"
                    title="[필수] 예매 및 취소 수수료/ 취소기한을 확인하였으며 동의합니다."
                  />
                  <label for="chkAgree01"
                    ><span class="txt_lab"
                      >[필수] 예매 및 취소 수수료/ 취소기한을 확인하였으며
                      동의합니다.</span
                    ></label
                  >
                </div>
                <div class="box_ar_info">
                  <div class="tb_date">
                    <table class="tbl">
                      <caption class="hide"></caption>
                      <colgroup>
                        <col style="width: 226px" />
                        <col style="width: 326px" />
                      </colgroup>
                      <thead class="tb_date_th">
                        <tr>
                          <th class="txt_gray">취소일</th>
                          <th class="txt_gray">취소수수료</th>
                        </tr>
                      </thead>
                      <tbody id="partCancelFeeList2">
                        <tr>
                          <td>2024.08.01</td>
                          <td>없음</td>
                        </tr>
                        <tr>
                          <td>2024.08.02</td>
                          <td>티켓금액의 30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul class="list_ds">
                    <li>
                      - 예매 당일 취소할 경우에는 예매수수료 및 취소수수료는
                      환불가능 합니다. (취소수수료는 취소 기한 내에 한함)
                    </li>
                  </ul>
                </div>
              </li>
              <li class="list_agree" id="agree05">
                <ul>
                  <li>
                    <div class="tit_check">
                      <input
                        type="checkbox"
                        id="chkAgree05"
                        name="chkAgree"
                        title="[필수] 결제대행 서비스 표준이용약관"
                      />
                      <label for="chkAgree05"
                        ><span class="txt_lab"
                          >[필수] 결제대행 서비스 표준이용약관</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li class="list_agree">
                <ul>
                  <li>
                    <div class="tit_check">
                      <input
                        type="checkbox"
                        id="chkAgree_kakao"
                        name="chkAgree"
                        title="[필수] 카카오 전자금융 이용약관 동의"
                      />
                      <label for="chkAgree_kakao"
                        ><span class="txt_lab"
                          >[필수] 카카오 전자금융 이용약관 동의</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li class="list_agree agree_terms_approval" style="">
                <ul>
                  <li>
                    <div class="tit_check">
                      <input
                        type="checkbox"
                        id="chkAgree03"
                        name="chkAgree"
                        title="[필수] 개인정보 수집/이용에 동의합니다."
                      />
                      <label
                        ><span class="txt_lab"
                          >[필수] 개인정보 수집/이용에 동의합니다.</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li class="list_agree">
                <ul>
                  <li>
                    <div class="tit_check">
                      <input
                        type="checkbox"
                        id="chkAgree04"
                        name="chkAgree"
                        title="[필수] 개인정보 제3자 제공 동의 및 주의사항"
                      />
                      <label for="chkAgree04"
                        ><span class="txt_lab"
                          >[필수] 개인정보 제3자 제공 동의 및 주의사항</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li class="list_agree" id="melonAgree" style="">
                <ul>
                  <li>
                    <div class="tit_check">
                      <input
                        type="checkbox"
                        id="chkAgree02"
                        name="chkAgree"
                        title="[필수] 멜론티켓 이용약관 동의합니다."
                      />
                      <label
                        ><span class="txt_lab"
                          >[필수] 멜론티켓 이용약관 동의합니다.</span
                        ></label
                      >
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <TicketInfoComponent />
  </div>
</template>

<script setup>
import TicketInfoComponent from './TicketInfoComponent.vue';
</script>

<style scoped>
.section_onestop {
  width: 950px;
  height: 652px;
  position: relative;
}
.section_onestop:after {
  content: '';
  display: block;
  clear: both;
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
.location_step .list_step {
  display: block;
  overflow: hidden;
  position: relative;
  height: 50px;
  background: #f9f9f9;
}
.location_step .list_step .btn_o_menu01 {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  background-position: 0 0;
}
.location_step .list_step .btn_o_menu {
  display: block;
  overflow: hidden;
  height: 50px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/onestop/btn_onestop_tit.jpg)
    no-repeat 0 0;
  font-size: 0;
}
.location_step .list_step .btn_o_menu02.on {
  background-position: -240px -50px;
}
.location_step .list_step .btn_o_menu02 {
  position: absolute;
  top: 0;
  left: 240px;
  width: 240px;
  background-position: -240px 0;
}
.location_step .list_step .btn_o_menu03 {
  position: absolute;
  top: 0;
  left: 480px;
  width: 202px;
  background-position: -478px 0;
}
.box_r {
  overflow-y: auto;
  width: 636px;
  height: 574px;
  padding: 29px 16px 0 30px;
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
.box_select .list_ticket .box_ticket_t .tit_tk.base_pr {
  font-weight: 700;
  width: 270px;
  margin-top: 0;
}
.box_select .list_ticket .box_ticket_t .tit_tk {
  display: inline-block;
  width: 270px;
  color: #333;
  height: 38px;
  vertical-align: top;
  margin-top: -3px;
}
.box_select .list_ticket .box_ticket_t .price.price_sale_r.txt_bd {
  color: #000;
}
.box_select .list_ticket .box_ticket_t .price.price_sale_r {
  width: 96px;
  vertical-align: top;
  letter-spacing: 0;
}
.box_select .list_ticket .box_ticket_t dd.price {
  display: inline-block;
  text-align: right;
}
.txt_bd {
  font-weight: 700;
}
dd {
  display: block;
  margin-inline-start: 40px;
  unicode-bidi: isolate;
}
.box_select .list_ticket .box_ticket_t .price.wrap_sel {
  width: 113px;
  vertical-align: middle;
}
.box_select .list_ticket .box_ticket_t dd.price {
  display: inline-block;
  text-align: right;
}
.box_select .list_ticket .box_ticket_t dd.wrap_sel .sel_cate {
  overflow: hidden;
  width: 64px;
  height: 24px;
  padding-left: 18px;
  border: 1px solid #ddd;
  margin-top: -1px;
  letter-spacing: 0;
  color: #333;
}
.wrap_ticket_info {
  position: relative;
  float: left;
  width: 245px;
  padding: 14px 10px 14px 13px;
  height: 624px;
  background-color: #fafafa;
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
.btn_flexible,
.btn_flexible span {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_flexible_20180510.png)
    no-repeat;
}
.btn_onestop {
  position: absolute;
  left: 15px;
  bottom: 10px;
}
.box_payment {
  margin-top: 24px;
}
.list_receipt_how {
  padding: 10px 0 0 6px;
}
.list_receipt_how li {
  display: inline-block;
  vertical-align: top;
}
.box_payment .list_receipt_how label {
  padding-right: 28px;
}
.list_receipt_how label {
  line-height: 18px;
  padding-right: 38px;
}
.list_receipt_how label input,
.list_receipt_how label span {
  vertical-align: middle;
}
.list_receipt_how .txt_lab {
  display: inline-block;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  vertical-align: bottom;
}
.box_gray {
  width: 580px;
  margin-top: 20px;
  padding: 14px 20px 22px;
  background-color: #fafafa;
  line-height: 30px;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
}
.hide {
  display: none;
}
.box_inp_opt th {
  text-align: left;
}
.txt_gray {
  font-weight: 400;
  color: #888;
}
.box_inp_opt td {
  padding: 8px 0;
  letter-spacing: 0;
}
.wrap_sel .btn_sel .sel_cate {
  padding-left: 5px;
  line-height: 24px;
  text-align: left;
  border: 1px solid #ddd;
}
.box_payment select {
  width: 198px;
  height: 24px;
}
.box_inp_opt select {
  width: 490px;
  height: 24px;
}
.box_gray input,
.box_gray select {
  height: 22px;
}
.box_inp_opt td {
  padding: 8px 0;
  letter-spacing: 0;
}
.box_inp_opt th {
  text-align: left;
}
.box_payment select {
  width: 198px;
  height: 24px;
}
.box_payment .btn_arr_down {
  height: 25px;
  margin-bottom: -6px;
  background-position: right -285px;
}
.btn_arr_down {
  display: inline-block;
  overflow: hidden;
  height: 28px;
  padding: 0 23px 0 0;
  background-position: right -675px;
}
.btn_flexible,
.btn_flexible span {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_flexible_20180510.png)
    no-repeat;
}
.box_payment .btn_arr_down span {
  background-position: left -285px;
}
.box_receipt {
  margin: 20px 0;
}
.box_receipt .box_agree {
  font-size: 13px;
  line-height: 38px;
}
.box_receipt .box_agree .list_agree.frt {
  border-top: 0;
}
.box_receipt .box_agree .list_agree {
  border-top: 1px solid #ddd;
}
.box_receipt .box_agree .list_agree .select_tit {
  position: relative;
}
.box_receipt .box_agree .list_agree .tit_check_r {
  display: block;
  position: absolute;
  top: 0;
  right: 10px;
  font-weight: 400;
  color: #333;
  font-size: 14px;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.box_receipt .box_agree .list_agree .txt_lab {
  padding-left: 2px;
}
.box_receipt .box_agree .list_agree .txt_lab {
  vertical-align: middle;
}
.box_receipt .box_agree .list_agree .tit_check {
  line-height: 40px;
}
.box_receipt .box_agree .list_agree .box_ar_info {
  padding: 0 20px;
  margin: 0 0 18px;
}
.box_receipt .box_agree .list_agree .box_ar_info .tb_date {
  width: 552px;
  padding: 5px 0;
  text-align: center;
  background-color: #fafafa;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
}
.box_receipt .box_agree .list_agree .box_ar_info .tb_date .tb_date_th {
  border-bottom: 1px solid #eee;
}
.box_receipt .box_agree .list_agree .box_ar_info .tb_date td {
  padding: 4px 0;
  color: #888;
  letter-spacing: 0;
}
.box_receipt .box_agree .list_agree .box_ar_info .list_ds {
  padding-top: 10px;
  color: #888;
  line-height: 24px;
}
.box_receipt .box_agree .list_agree .tit_check {
  line-height: 40px;
}
</style>
