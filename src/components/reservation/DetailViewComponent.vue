<template>
  <div id="wrap" class="index">
    <div id="cont_wrap" class="clear_g">
      <div id="conts_section" class="pr_none">
        <div id="conts" class="clear_g">
          <div class="section_detailview_product">
            <!-- 상품상단 띠배너 -->

            <div class="wrap_consert_product">
              <!-- 상품 상세정보 -->
              <div class="wrap_consert_cont" v-if="programsStore.program">
                <div class="box_consert_thumb thumb_180x254">
                  <img
                    :src="programsStore.program.imageUrls[0]"
                    onerror="noImage(this, 180, 254)"
                    width="180"
                    alt=""
                  />
                  <span class="frame"></span>
                </div>
                <div class="box_consert_txt">
                  <p class="tit">
                    {{ programsStore.program.programName }}
                  </p>
                  <div class="tit_s">
                    <p><br /></p>
                  </div>
                  <div class="box_consert_info">
                    <dl class="info_left">
                      <dt class="tit_info">공연기간</dt>
                      <dd class="txt_info" id="periodInfo">
                        {{ formatDate(programsStore.program.programStartDate) }}
                        -
                        {{ formatDate(programsStore.program.programEndDate) }}
                      </dd>
                      <dt class="tit_info">관람시간</dt>
                      <dd class="txt_info">
                        {{ programsStore.program.runtime }} 분
                      </dd>
                      <dt class="tit_info">장르</dt>
                      <dd class="txt_info">콘서트</dd>
                    </dl>

                    <dl class="info_right">
                      <dt class="tit_info">공연장</dt>
                      <dd class="txt_info">
                        <a
                          href=""
                          id="performanceHallBtn"
                          class="link"
                          title="고양종합운동장&nbsp;"
                        >
                          <span class="place">고양종합운동장&nbsp;</span>
                          <span class="ico_more">바로가기</span>
                        </a>
                      </dd>
                      <dt class="tit_info">관람등급</dt>
                      <dd class="txt_info">19세 이상</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <!-- 상품 상세정보 -->

              <!-- 회차 영역 정보 -->
              <div id="ticketing_process_box">
                <!-- [1SS0200] -->
                <div class="wrap_ticketing_process">
                  <!-- wrap_ticketing_process 상세 예매프로세스 -->
                  <div class="box_ticketing_process" style="">
                    <dl class="date_choice">
                      <dt class="tit_process tit_date_choice">
                        <span class="img">날짜 선택</span>
                      </dt>
                      <dd class="sorting">
                        <!-- 클래식, 콘서트 -->
                        <button class="type_calendar show">캘린더형</button>
                      </dd>
                      <dd class="cont_process">
                        <div
                          class="box_type_list"
                          id="box_list_date"
                          style="display: none"
                        ></div>
                        <div
                          class="box_type_calendar"
                          id="box_calendar"
                          style=""
                        >
                          <!-- 캘린더 타입일시 show -->
                          <div class="box_date">
                            <a href="" class="btn_calendar_prev">이전</a>
                            <p class="tit_date">
                              <span id="year_month">2024.8</span>
                            </p>
                            <a href="" class="btn_calendar_next">다음</a>
                          </div>
                          <table class="tbl_calendar">
                            <colgroup>
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                              <col style="width: 38px" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th scope="col" class="sun">SUN</th>
                                <!-- class holi은 공휴일 컬러 -->
                                <th scope="col">MON</th>
                                <th scope="col">TUE</th>
                                <th scope="col">WED</th>
                                <th scope="col">THU</th>
                                <th scope="col">FRI</th>
                                <th scope="col" class="sat">SAT</th>
                              </tr>
                            </thead>
                            <tbody id="cal_wrapper">
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240801"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240801"
                                  >
                                    1
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240802"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240802"
                                  >
                                    2
                                  </button>
                                </td>
                                <td class="sat">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240803"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240803"
                                  >
                                    3
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td class="sun">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240804"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240804"
                                  >
                                    4
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240805"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240805"
                                  >
                                    5
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240806"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240806"
                                  >
                                    6
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240807"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240807"
                                  >
                                    7
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240808"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240808"
                                  >
                                    8
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240809"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240809"
                                  >
                                    9
                                  </button>
                                </td>
                                <td class="sat">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240810"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240810"
                                  >
                                    10
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td class="sun">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240811"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240811"
                                  >
                                    11
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240812"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240812"
                                  >
                                    12
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240813"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240813"
                                  >
                                    13
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240814"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240814"
                                  >
                                    14
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240815"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240815"
                                  >
                                    15
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240816"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240816"
                                  >
                                    16
                                  </button>
                                </td>
                                <td class="sat">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240817"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240817"
                                  >
                                    17
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td class="sun">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240818"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240818"
                                  >
                                    18
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240819"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240819"
                                  >
                                    19
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240820"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240820"
                                  >
                                    20
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240821"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240821"
                                  >
                                    21
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240822"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240822"
                                  >
                                    22
                                  </button>
                                </td>
                                <td class="default">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240823"
                                    id="calendar_SelectId_20240823"
                                    data-prodid="210164"
                                    data-poccode="SC0002"
                                    data-perftypecode="GN0001"
                                    data-selltypecode="ST0001"
                                    data-seatcntdisplayyn="Y"
                                  >
                                    23
                                  </button>
                                </td>
                                <td class="sat">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240824"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240824"
                                  >
                                    24
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td class="sun">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240825"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240825"
                                  >
                                    25
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240826"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240826"
                                  >
                                    26
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240827"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240827"
                                  >
                                    27
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240828"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240828"
                                  >
                                    28
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240829"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240829"
                                  >
                                    29
                                  </button>
                                </td>
                                <td class="">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240830"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240830"
                                  >
                                    30
                                  </button>
                                </td>
                                <td class="sat">
                                  <button
                                    class="ticketCalendarBtn"
                                    data-perfday="20240831"
                                    disabled="disabled"
                                    id="calendar_SelectId_20240831"
                                  >
                                    31
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </dd>
                    </dl>
                    <dl class="time_choice">
                      <dt class="tit_process tit_time_choice">
                        <span class="img">시간 선택</span>
                      </dt>
                      <dd class="cont_process" id="section_time">
                        <div class="box_type_list">
                          <ul class="list_type" id="list_time">
                            <li
                              class="item_time first on"
                              data-prodid="210164"
                              data-poccode="SC0002"
                              data-perfday="20240823"
                              data-scheduleno="100001"
                              data-selltypecode="ST0001"
                              data-seatcntdisplayyn="Y"
                              data-perftypecode="GN0001"
                              data-seatpoc="1"
                              data-cancelclosedt="20240822170000"
                            >
                              <button>
                                <span class="txt" style="text-align: center"
                                  >20시 00분
                                  <span
                                    class="soldouttext_20240823_100001_ST0001"
                                  >
                                  </span>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </dd>
                    </dl>

                    <dl class="seat_choice">
                      <dt class="tit_process tit_seat_choice">
                        <span class="img">좌석 선택</span>
                      </dt>
                      <dd class="cont_process" id="section_seat">
                        <div class="box_type_list box_type_list_all">
                          <p class="seat_text">선택한 회차별 좌석 현황</p>
                          <ul class="list_seat" id="list_seat">
                            <li class="item_seat first">
                              <p class="">
                                <span class="txt">
                                  <span class="in">
                                    <span>VIP석</span>
                                    <strong>250,000원</strong>
                                  </span>
                                  <span
                                    class="seat prodId_210164_gradeNo_10000_schedule_100001_sellTypeCode_ST0001"
                                  >
                                    <span class="cnt">
                                      <strong>매진</strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </li>
                            <li class="item_seat">
                              <p class="">
                                <span class="txt">
                                  <span class="in">
                                    <span>RS석</span>
                                    <strong>210,000원</strong>
                                  </span>
                                  <span
                                    class="seat prodId_210164_gradeNo_11958_schedule_100001_sellTypeCode_ST0001"
                                  >
                                    <span class="cnt">
                                      <strong>235석</strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </li>
                            <li class="item_seat">
                              <p class="">
                                <span class="txt">
                                  <span class="in">
                                    <span>R석</span>
                                    <strong>170,000원</strong>
                                  </span>
                                  <span
                                    class="seat prodId_210164_gradeNo_10001_schedule_100001_sellTypeCode_ST0001"
                                  >
                                    <span class="cnt">
                                      <strong>5,234석</strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </li>
                            <li class="item_seat">
                              <p class="">
                                <span class="txt">
                                  <span class="in">
                                    <span>S석</span>
                                    <strong>130,000원</strong>
                                  </span>
                                  <span
                                    class="seat prodId_210164_gradeNo_10002_schedule_100001_sellTypeCode_ST0001"
                                  >
                                    <span class="cnt">
                                      <strong>28석</strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </li>
                            <li class="item_seat">
                              <p class="">
                                <span class="txt">
                                  <span class="in">
                                    <span>A석</span>
                                    <strong>80,000원</strong>
                                  </span>
                                  <span
                                    class="seat prodId_210164_gradeNo_10003_schedule_100001_sellTypeCode_ST0001"
                                  >
                                    <span class="cnt">
                                      <strong>479석</strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </dd>
                    </dl>
                  </div>

                  <!-- 일반 상품 -->
                  <div style="display: block" class="btn_ticketing_type">
                    <div class="btn_table">
                      <div class="box_txt" id="box_tkt_txt"></div>

                      <div class="box_btn" @click="openPopup">
                        <button
                          class="button btColorGreen"
                          id="ticketReservation_Btn"
                          data-prodid="210164"
                          data-prodtypecode="PT0001"
                          data-authetypecode=""
                        >
                          <span class="btSizeL">예매하기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 회차 영역 정보 -->
            </div>

            <!-- 탭 메뉴 영역 -->
            <div class="wrap_detail_tab wrap_detail_tab_6">
              <ul class="list_detail_menu">
                <li class="nth1 on" data-type="tab1">
                  <a href="">
                    <span class="line">
                      <span class="menu ir_pm">상세정보</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 상세정보 -->
            <div class="wrap_detailview_cont">
              <p class="none">상세정보 콘텐츠</p>

              <div class="wrap_detail_left_cont">
                <div class="box_concert_time">
                  <p class="tit_sub_float">공연시간</p>
                  <p>
                    <span style="font-size: 11pt"
                      >2024년 8월 23일(금) 오후 8시</span
                    >
                  </p>
                </div>
                <!-- 가격정보 -->

                <div class="box_base_price">
                  <p class="tit_sub_float">가격정보</p>
                  <p class="tit_sub_ss_float">기본가</p>
                  <ul class="list_seat">
                    <li
                      v-for="price in programsStore.prices"
                      :key="price.programGradeId"
                    >
                      <span class="seat_name">{{ price.gradeName }}석</span>
                      <span class="price">
                        {{ price.price }}
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="box_img_content">
                  <p class="tit_sub_float">작품설명</p>
                  <img
                    src="https://cdnticket.melon.co.kr/resource/image/upload/product/2024/07/20240730195146c0370cba-e834-4971-b035-c18575facefc.jpg/melon/quality/90/optimize"
                    title=""
                  /><br style="clear: both" /><br style="clear: both" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useProgramsStore } from '@/stores/useProgramsStore';

export default {
  name: 'DetailViewComponent',
  computed: {
    ...mapStores(useProgramsStore),
  },
  mounted() {
    const programId = this.$route.params.id;
    this.programsStore.ProgramDetail(programId);
    this.programsStore.PriceInfo(programId);
    this.programsStore.Sections(programId);
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
      }).format(value);
    },

    openPopup() {
      var popUrl = '/seat'; //팝업창에 출력될 페이지 URL

      var popOption =
        'width=986, height=682, resizable=no, scrollbars=no, status=no;'; //팝업창 옵션(optoin)

      window.open(popUrl, '', popOption);
    },

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
</script>

<style scoped>
@charset "utf-8";
.clear_g {
  display: block;
  overflow: visible;
  width: auto;
  clear: both;
}
.index #conts {
  padding-top: 0;
}
#conts {
  display: block;
  position: relative;
  width: 1008px;
  min-height: 600px;
  padding: 0 20px 53px;
  margin: 0 auto;
}
.none {
  overflow: hidden;
  font-size: 0 !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  text-indent: -9999px;
}
img {
  border: 0 none;
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
.btColorGreen {
  border: 1px solid #41d26b;
  background: #41d26b;
}
.btColorGreen a.btSizeL {
  color: #fff;
}
.btSizeL {
  display: inline-block;
  height: 48px;
  line-height: 46px;
  font-size: 16px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
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
.btn_flexible,
.btn_flexible span {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_flexible_20180510.png)
    no-repeat;
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
table.tbl_style01 tbody th {
  width: 166px;
  padding: 10px 10px 9px 30px;
  background: #fafafa;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  vertical-align: top;
}
table.tbl_style01 tbody td {
  padding: 10px 20px 9px 45px;
  font-size: 14px;
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
table.tbl_style01 {
  width: 100%;
  border: 1px solid #eee;
  color: #666;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
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
table.tbl_style01 tbody td {
  padding: 10px 20px 9px 45px;
  font-size: 14px;
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
.wrap_seat {
  position: relative;
  margin-top: 22px;
}
.wrap_seat .box_seat {
  border: 1px solid #ddd;
}
table.tbl_style03 {
  width: 100%;
}
.tbl {
  border-collapse: collapse;
  border-spacing: 0;
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
.wrap_seat .box_seat table.tbl_style03 td {
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
}
table.tbl_style03 tbody td {
  vertical-align: top;
}
.wrap_seat .box_seat table.tbl_style03 td.seat_price {
  padding-right: 35px;
  text-align: right;
}
.btColorGreen {
  border: 1px solid #41d26b;
  background: #41d26b;
}
.btColorGreen a.btSizeL {
  color: #fff;
}
.btSizeL {
  display: inline-block;
  height: 48px;
  line-height: 46px;
  font-size: 16px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
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
table.tbl_style01 tbody th {
  width: 166px;
  padding: 10px 10px 9px 30px;
  background: #fafafa;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  vertical-align: top;
}
.wrap_detail_tab {
  overflow: hidden;
  padding-top: 20px;
}
.wrap_detail_tab .list_detail_menu {
  width: 1008px;
  height: 51px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/detailview/detail_tab_bg.png)
    repeat-x 0 0;
}
.wrap_detail_tab .list_detail_menu li {
  float: left;
  width: 252px;
  height: 51px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/detail_tab.png)
    no-repeat 0 0;
  text-align: center;
  vertical-align: top;
  position: relative;
  letter-spacing: 0;
}
.wrap_detail_tab .list_detail_menu li a {
  display: block;
  height: 51px;
}
.wrap_detail_tab .list_detail_menu li a .line {
  display: inline-block;
  height: 32px;
  line-height: 51px;
  padding: 18px 12px 0;
  border-bottom: 1px solid #f1f1f1;
}
.wrap_detail_tab .list_detail_menu li a .line .menu {
  display: inline-block;
  height: 16px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/detailview/detail_tab_menu.png)
    no-repeat;
  vertical-align: top;
}
.wrap_detail_tab .list_detail_menu li a .line .menu + .btn_num_radius {
  vertical-align: top;
  margin-left: 4px;
}
.wrap_detail_tab .list_detail_menu .btn_num_radius {
  height: 20px;
  background-position: 0 -1213px;
  margin-top: -2px;
}
.wrap_detail_tab .list_detail_menu .btn_num_radius span {
  background-position: 100.2% -1213px;
  line-height: 17px;
  height: 18px;
  color: #666;
}
.wrap_detail_tab .list_detail_menu li.on .line {
  border-bottom: 1px solid #00cd3c;
}
.wrap_detail_tab .list_detail_menu li.nth1 {
  background-position: -1px 0;
}
.wrap_detail_tab .list_detail_menu li.nth2 {
  background-position: 0 0;
}
.wrap_detail_tab .list_detail_menu li.nth3 {
  background-position: 0 0;
}
.wrap_detail_tab .list_detail_menu li.nth4 {
  background-position: 0 0;
}
.section_detailview_consert .wrap_detail_tab_2 .list_detail_menu li {
  width: 220px;
}
.section_detailview_consert .wrap_detail_tab_2 .list_detail_menu li.nth1 .menu {
  width: 59px;
  height: 16px;
  background-position: 0 -16px;
}
.section_detailview_consert .wrap_detail_tab_2 .list_detail_menu li.nth2 .menu {
  width: 94px;
  height: 16px;
  background-position: -200px -16px;
}
.section_detailview_consert
  .wrap_detail_tab_2
  .list_detail_menu
  li.nth1.on
  .menu {
  background-position: 0 0;
}
.section_detailview_consert
  .wrap_detail_tab_2
  .list_detail_menu
  li.nth2.on
  .menu {
  background-position: -200px 0;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li {
  width: 168px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth1 .menu {
  width: 59px;
  height: 16px;
  background-position: 0 -16px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth2 .menu {
  width: 60px;
  height: 16px;
  background-position: 0 -48px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth3 .menu {
  width: 44px;
  height: 16px;
  background-position: -200px -48px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth4 .menu {
  width: 36px;
  height: 16px;
  background-position: -400px -48px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth5 .menu {
  width: 77px;
  height: 16px;
  background-position: -600px -48px;
}
.section_detailview_product .wrap_detail_tab_6 .list_detail_menu li.nth6 .menu {
  width: 60px;
  height: 16px;
  background-position: -800px -48px;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth1.on
  .menu {
  background-position: 0 0;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth2.on
  .menu {
  background-position: 0 -32px;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth3.on
  .menu {
  background-position: -200px -32px;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth4.on
  .menu {
  background-position: -400px -32px;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth5.on
  .menu {
  background-position: -600px -32px;
}
.section_detailview_product
  .wrap_detail_tab_6
  .list_detail_menu
  li.nth6.on
  .menu {
  background-position: -800px -32px;
}
.wrap_consert_product {
  border: 1px solid #ddd;
}
.wrap_consert_product .wrap_consert_cont {
  overflow: hidden;
  position: relative;
  padding: 30px 30px 20px;
}
.wrap_consert_product .wrap_consert_cont .box_consert_thumb {
  float: left;
  width: 180px;
  height: 254px;
  overflow: hidden;
}
.wrap_consert_product .wrap_consert_cont .box_consert_thumb img {
  width: 180px;
}
.wrap_consert_product .wrap_consert_cont .box_consert_txt {
  float: right;
  padding-left: 30px;
  width: 736px;
  min-height: 254px;
}
.wrap_consert_product .wrap_consert_cont .box_consert_txt .tit {
  padding: 3px 170px 0 0;
  font-size: 26px;
  line-height: 32px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '맑은고딕', 'Malgun Gothic';
}
.wrap_consert_product .wrap_consert_cont .box_consert_txt .tit_s {
  padding-top: 10px;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  padding-right: 170px;
  font-family: AppleSDGothicNeo-Regular, '맑은고딕', 'Malgun Gothic';
  word-wrap: break-word;
  word-break: break-all;
}
.wrap_consert_product .wrap_consert_cont .price_info {
  padding: 0 0 15px;
  overflow: hidden;
}
.wrap_consert_product .wrap_consert_cont .price_info .tit_info {
  float: left;
  width: 67px;
  color: #666;
  font-size: 14px;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_consert_product .wrap_consert_cont .price_info .txt_info {
  padding-left: 67px;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info {
  overflow: hidden;
  padding-top: 48px;
  font-size: 14px;
  line-height: 32px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .info_left {
  overflow: hidden;
  float: left;
  width: 320px;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .info_right {
  overflow: hidden;
  float: left;
  width: 416px;
}
.wrap_consert_product
  .wrap_consert_cont
  .box_consert_info
  .info_left
  .tit_info {
  display: inline-block;
  width: 67px;
}
.wrap_consert_product
  .wrap_consert_cont
  .box_consert_info
  .info_left
  .txt_info {
  display: inline-block;
  width: calc(100% - 72px);
}
.wrap_consert_product
  .wrap_consert_cont
  .box_consert_info
  .info_right
  .tit_info {
  display: inline-block;
  width: 67px;
}
.wrap_consert_product
  .wrap_consert_cont
  .box_consert_info
  .info_right
  .txt_info {
  display: inline-block;
  width: calc(100% - 72px);
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .link {
  display: inline-block;
  color: #666;
  vertical-align: top;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .link .place {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 300px;
  vertical-align: top;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .link:hover {
  color: #000;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info .ico_more {
  display: inline-block;
  width: 12px;
  height: 32px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_more.png)
    top right no-repeat;
  text-indent: -9999px;
  vertical-align: top;
}
.wrap_consert_product .wrap_consert_cont .box_consert_info a:hover .ico_more {
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_more.png)
    right -30px no-repeat;
}
.wrap_consert_product
  .wrap_consert_cont
  .box_consert_info
  .txt_info
  .btn_arr_down {
  vertical-align: middle;
  margin-right: 2px;
}
.wrap_consert_product .wrap_consert_cont .btn_ticketing {
  height: 43px;
  margin-top: 25px;
  padding: 1px 26px 0 22px;
  border: 1px solid #d6f9dc;
  font-size: 13px;
  line-height: 24px;
  color: #00b523;
  background: #ebfcee;
  letter-spacing: 0.063em;
  text-align: left;
}
.wrap_consert_product .wrap_consert_cont .btn_ticketing .ico_ticketing_arr {
  display: inline-block;
  width: 5px;
  height: 10px;
  margin: 7px 0 0 4px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/detailview/ico_ticketing_arr.png)
    no-repeat;
  vertical-align: top;
}
.wrap_ticketing_process {
  position: relative;
}
.wrap_ticketing_process .box_ticketing_process {
  overflow: hidden;
}
.wrap_ticketing_process .box_ticketing_process .date_choice {
  position: relative;
  float: left;
  width: 336px;
  text-align: center;
}
.wrap_ticketing_process .box_ticketing_process .time_choice {
  float: left;
  width: 346px;
  text-align: center;
}
.wrap_ticketing_process .box_ticketing_process .seat_choice {
  float: left;
  width: 324px;
  text-align: center;
}
.wrap_ticketing_process .box_ticketing_process .tit_process {
  padding: 16px 0;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  text-align: center;
  height: 16px;
}
.wrap_ticketing_process .box_ticketing_process .tit_process .img {
  display: inline-block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat;
  text-indent: -9999px;
}
.wrap_ticketing_process .box_ticketing_process .tit_date_choice {
  width: 336px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat right -200px;
}
.wrap_ticketing_process .box_ticketing_process .tit_time_choice {
  width: 346px;
}
.wrap_ticketing_process .box_ticketing_process .tit_date_choice .img {
  width: 60px;
  height: 16px;
  background-position: 0 -80px;
}
.wrap_ticketing_process .box_ticketing_process .tit_time_choice .img {
  width: 61px;
  height: 16px;
  background-position: 0 -120px;
  margin-left: 304px;
}
.wrap_ticketing_process .box_ticketing_process .tit_seat_choice .img {
  width: 89px;
  height: 16px;
  background: 0 0;
}
.wrap_ticketing_process .box_ticketing_process .cont_process {
  height: 216px;
  background-color: #fafafa;
}
.wrap_ticketing_process .box_ticketing_process .sorting {
  position: absolute;
  top: 16px;
  left: 30px;
  overflow: hidden;
  width: 49px;
  height: 18px;
}
.wrap_ticketing_process .box_ticketing_process .sorting .type_calendar {
  float: left;
  width: 17px;
  height: 18px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat -40px -40px;
  text-indent: -9999px;
}
.wrap_ticketing_process .box_ticketing_process .sorting .type_calendar.show {
  background-position: 0 -40px;
}
.wrap_ticketing_process .box_ticketing_process .sorting .type_list {
  float: right;
  width: 17px;
  height: 18px;
  margin: 3px 0;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat -40px 0;
  text-indent: -9999px;
}
.wrap_ticketing_process .box_ticketing_process .sorting .type_list.show {
  background-position: 0 0;
}
.wrap_ticketing_process .box_ticketing_process .date_choice .box_type_list {
  overflow: hidden;
  overflow-y: auto;
  height: 216px;
  border-right: 1px solid #ebebeb;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_list
  + .more_view {
  left: 15px;
  margin-top: 15px;
}
.wrap_ticketing_process .box_ticketing_process .date_choice .list_type {
  padding: 12px 0 15px 30px;
  width: 275px;
}
.wrap_ticketing_process .box_ticketing_process .date_choice .list_type li {
  border-top: 1px solid #eee;
  text-align: center;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .list_type
  li.first {
  border-top: 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .list_type
  li
  button {
  width: 237px;
}
.wrap_ticketing_process .box_ticketing_process .date_choice .list_type li .txt {
  display: block;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  letter-spacing: 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .list_type
  li.on
  .txt {
  color: #00b523;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .list_type
  li
  button:hover,
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .list_type
  li.on
  button {
  background-color: #fff;
  border: 1px solid #41d26b;
  margin: -1px 0;
}
.wrap_ticketing_process .box_ticketing_process .date_choice .box_type_calendar {
  overflow: hidden;
  height: 216px;
  padding: 0 47px 0 30px;
  border-right: 1px solid #ebebeb;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_calendar
  .box_date {
  height: 22px;
  padding: 5px 0 9px;
  text-align: center;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_calendar
  .box_date
  .tit_date {
  display: inline-block;
  padding: 0 18px;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_calendar
  .box_date
  .btn_calendar_prev {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat 0 -280px;
  text-indent: -9999px;
  vertical-align: top;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_calendar
  .box_date
  .btn_calendar_next {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/ico_process.png)
    no-repeat -40px -280px;
  text-indent: -9999px;
  vertical-align: top;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .box_type_calendar
  .tbl_calendar {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  th {
  width: 38px;
  height: 16px;
  border-bottom: 1px solid #efefef;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #a2a2a2;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td {
  width: 38px;
  height: 26px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td
  button {
  width: 38px;
  height: 26px;
  font-size: 14px;
  line-height: 26px;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td.sun
  button,
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  th.sun {
  color: #e64646;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td.sat
  button,
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  th.sat {
  color: #3a8bef;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td.holi
  button {
  color: #e64646;
}
.wrap_ticketing_process
  .box_ticketing_process
  .date_choice
  .tbl_calendar
  tr
  td
  button:disabled {
  opacity: 0.3;
}
.wrap_ticketing_process .box_ticketing_process .more_view {
  display: block;
  width: 255px;
  padding: 0 30px 0 10px;
  margin: 0 auto;
  background: url(//cdnticket.melon.co.kr/resource/image/web/detailview/box_type_calendar_more.png)
    no-repeat 0 -34px;
  text-align: left;
}
.wrap_ticketing_process .box_ticketing_process .more_view:hover {
  background-position: 0 0;
}
.wrap_ticketing_process .box_ticketing_process .more_view span {
  display: block;
  width: 100%;
  height: 34px;
  line-height: 34px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.wrap_ticketing_process .box_ticketing_process .time_choice .cont_process {
  position: relative;
}
.wrap_ticketing_process .box_ticketing_process .time_choice .box_type_list {
  overflow: hidden;
  overflow-y: auto;
  background-color: #fafafa;
  height: 216px;
}
.wrap_ticketing_process .box_ticketing_process .time_choice .list_type {
  padding: 12px 0 15px 30px;
  width: 275px;
}
.wrap_ticketing_process .box_ticketing_process .time_choice .list_type li {
  border-top: 1px solid #eee;
  text-align: center;
}
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li.first {
  border-top: 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li
  button {
  width: 237px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li
  button
  .txt {
  display: block;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  letter-spacing: 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li.on
  .txt {
  color: #00b523;
}
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li
  button:hover,
.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li.on
  button {
  background-color: #fff;
  border: 1px solid #41d26b;
  margin: -1px 0;
}
.wrap_ticketing_process .box_ticketing_process .seat_choice .cont_process {
  background-color: #fafafa;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list {
  text-align: left;
  height: 178px;
  padding: 12px 0 0 35px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat {
  overflow: hidden;
  overflow-y: auto;
  height: 146px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat
  li {
  letter-spacing: 0;
  padding-bottom: 12px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat
  li
  .txt {
  display: block;
  overflow: hidden;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat
  li
  .txt
  .in {
  display: block;
  overflow: hidden;
  font-size: 12px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  text-align: left;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat
  li
  .txt
  .in
  span {
  display: inline-block;
  width: 132px;
  float: left;
  padding-right: 20px;
  text-align: right;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .list_seat
  li
  .txt
  .in
  strong {
  display: inline-block;
  width: 138px;
  float: left;
  font-weight: 400;
  text-align: left;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .seat_text {
  color: #000;
  padding: 12px 0 8px 0;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list
  .seat_text2 {
  color: #999;
  padding: 8px 0 8px 0;
  line-height: 20px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list_all
  .list_seat
  li
  .txt {
  display: block;
  overflow: hidden;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list_all
  .list_seat
  li
  .txt
  .in {
  display: inline-block;
  overflow: hidden;
  float: left;
  width: 200px;
  font-size: 12px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  vertical-align: top;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list_all
  .list_seat
  li
  .txt
  .in
  span {
  display: inline-block;
  float: left;
  max-width: 130px;
  text-align: left;
  padding: 0;
  line-height: 18px;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list_all
  .list_seat
  li
  .txt
  .in
  strong {
  display: inline-block;
  float: right;
  width: auto;
  font-weight: 400;
  text-align: right;
}
.wrap_ticketing_process
  .box_ticketing_process
  .seat_choice
  .cont_process
  .box_type_list_all
  .list_seat
  li
  .txt
  .seat {
  display: inline-block;
  float: right;
  width: 55px;
  text-align: right;
  padding-right: 15px;
  font-size: 12px;
  color: #666;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.btn_ticketing_type {
  position: relative;
  height: 49px;
  padding: 10px 30px 10px 30px;
  border-top: 1px solid #ddd;
}
.btn_ticketing_type .btn_table {
  display: table;
  width: 100%;
}
.btn_ticketing_type .box_txt {
  display: table-cell;
  text-align: center;
  font-size: 17px;
  line-height: 24px;
  color: #00cd3c;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  padding-top: 12px;
  vertical-align: top;
}
.btn_ticketing_type .box_btn {
  display: table-cell;
  width: 260px;
}
.btn_ticketing_type .box_btn .btColorGreen {
  width: 260px;
  color: #fff;
}
.section_detailview_product {
  position: relative;
  padding-top: 40px;
}
.wrap_detailview_cont .wrap_detail_left_cont {
  float: left;
  width: 702px;
}
.wrap_detailview_cont .wrap_detail_left_cont .tit_sub_float {
  margin-left: 2px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_artist_checking {
  position: relative;
  margin-top: 22px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .casting_view {
  display: inline-block;
  line-height: 28px;
  padding: 0 7px;
  margin-left: 10px;
  border: 1px solid #ccc;
  color: #666;
  font-size: 12px;
  vertical-align: middle;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .casting_view:hover {
  border-color: #666;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_artist_checking .scroll {
  height: 150px;
  overflow: hidden;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_artist_checking .scroll.on {
  height: 494px;
  overflow-y: auto;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_artist_checking .list_artist {
  padding: 12px 11px 0;
  margin-left: -42px;
  margin-right: -20px;
  overflow: hidden;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li {
  float: left;
  width: auto;
  height: 138px;
  margin: 0 0 32px 42px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li.first {
  margin-left: 42px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  label {
  display: block;
  width: 76px;
  height: 76px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check {
  display: inline-block;
  position: relative;
  width: 76px;
  height: 76px;
  text-align: center;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check
  .thumb {
  display: block;
  vertical-align: top;
  padding: 0;
  width: 76px;
  height: 76px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check
  .thumb
  img {
  width: 76px;
  height: 76px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check
  .thumb
  .frame_100_100_radius {
  width: 76px;
  height: 76px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/frame_76_76_radius.png)
    no-repeat 0 0;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check
  .btn_check {
  width: 24px;
  height: 24px;
  background-size: 24px 48px;
  background-position: 0 -24px;
  background-image: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_check4.png);
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .check
  .btn_check.on {
  background-position: 0 0;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .txt_name {
  display: block;
  font-size: 16px;
  line-height: 31px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  text-align: center;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .txt_name:hover
  .singer {
  color: #000;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .txt_name:hover
  .part {
  color: #000;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .singer {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 76px;
  font-weight: 400;
  font-size: 13px;
  line-height: 30px;
  color: #333;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  li
  .part {
  display: block;
  max-width: 76px;
  height: 32px;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: #888;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  .no_artist
  .check
  .thumb {
  display: block;
  width: 76px;
  height: 76px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/frame_76_76_radius_noimg.png)
    no-repeat 0 0;
  background-size: 100%;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  .no_artist
  .check
  .thumb
  img {
  display: none;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .list_artist
  .no_artist
  .txt_name {
  display: none;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_artist_checking .button_more {
  margin-top: 32px;
  text-align: center;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .button_more
  .more {
  width: 89px;
  height: 30px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/detailview/button_more.png)
    no-repeat;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .button_more
  .more:hover {
  background-position: -111px 0;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .button_more
  .more
  span {
  display: inline-block;
  text-indent: -9999em;
  overflow: hidden;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .button_more
  .more.on {
  background-position: 0 -30px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_artist_checking
  .button_more
  .more.on:hover {
  background-position: -111px -30px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_concert_time {
  margin-top: 38px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_concert_time .data_txt {
  margin: 7px 0 0 4px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_concert_time .data_txt li {
  font-size: 16px;
  line-height: 30px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_bace_price {
  margin-top: 36px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_bace_price .list_seat {
  padding: 10px 0 10px 19px;
  margin-top: -8px;
  border: 1px solid #f7f7f7;
  background-color: #fbfbfb;
  overflow: hidden;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_bace_price .list_seat li {
  display: inline-block;
  position: relative;
  width: 49%;
  height: 28px;
  vertical-align: middle;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_bace_price
  .list_seat
  li
  span {
  display: inline-block;
  font-size: 16px;
  line-height: 28px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_bace_price
  .list_seat
  li
  .seat_color {
  width: 15px;
  height: 15px;
  margin: 6px 7px 7px 0;
  background: red;
  vertical-align: middle;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_bace_price
  .list_seat
  li
  .seat_name {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  max-width: 205px;
  padding-right: 1px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_bace_price
  .list_seat
  li
  .price {
  float: right;
  padding-right: 20px;
  color: #888;
  vertical-align: middle;
  letter-spacing: 0;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_ticke_notice {
  margin-top: 33px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_ticke_notice .notice_txt {
  margin-left: 4px;
  overflow: hidden;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_ticke_notice .notice_txt li {
  font-size: 16px;
  line-height: 30px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_ticke_notice img {
  max-width: 700px;
  border: 1px solid #eee;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_price_info {
  margin-top: 32px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_price_info .notice_price {
  margin-left: 4px;
  font-size: 16px;
  line-height: 30px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_price_info img {
  max-width: 700px;
  border: 1px solid #eee;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_img_content {
  margin-top: 40px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_img_content .tit_sub_float {
  margin-bottom: 14px;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_img_content img {
  max-width: 700px;
  border: 1px solid #eee;
}
.wrap_detailview_cont .wrap_detail_left_cont .box_product_notice {
  margin-top: 32px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_product_notice
  .tbl_product_notice {
  table-layout: fixed;
  border: 1px solid #e9e9e9;
  border-spacing: 0;
  margin-top: 4px;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_product_notice
  .tbl_product_notice
  tr
  th {
  width: 120px;
  padding-left: 20px;
  background-color: #fafafa;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
  text-align: left;
  vertical-align: top;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_product_notice
  .tbl_product_notice
  tr
  td {
  padding: 0 30px;
  font-size: 14px;
  line-height: 40px;
  color: #333;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum;
}
.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_product_notice
  .tbl_product_notice
  .first
  td {
  padding-top: 10px;
}
.wrap_detailview_cont .wrap_detail_right_cont {
  float: left;
  width: 280px;
  margin-left: 26px;
}
.wrap_detailview_cont .wrap_detail_right_cont .tit_sub_float {
  height: auto;
  line-height: inherit;
  margin-left: 2px;
}
.wrap_detailview_consert {
  overflow: hidden;
  border: 1px solid red;
}
.wrap_detailview_cont .box_concert_img {
  margin-top: 33px;
}
.wrap_detailview_cont .box_concert_img .box_thumb {
  padding-top: 13px;
}
.wrap_detailview_cont .box_concert_img .box_thumb .list_thumb {
  display: block;
  width: 100%;
  overflow: hidden;
  height: 200px;
}
.wrap_detailview_cont .box_concert_img .box_thumb .list_thumb.on {
  height: auto;
}
.wrap_detailview_cont .box_concert_img .box_thumb .list_thumb li {
  float: left;
  height: 176px;
  margin-left: 24px;
  padding-bottom: 24px;
}
.wrap_detailview_cont .box_concert_img .box_thumb .list_thumb li.first {
  margin-left: 0;
}
.wrap_detailview_cont
  .box_concert_img
  .box_thumb
  .list_thumb
  li
  .thumb_234x176 {
  display: block;
  width: 234px;
  height: 176px;
  vertical-align: top;
}
.wrap_detailview_cont
  .box_concert_img
  .box_thumb
  .list_thumb
  li
  .thumb_234x176
  .crop {
  display: block;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.wrap_detailview_cont
  .box_concert_img
  .box_thumb
  .list_thumb
  li
  .thumb_234x176
  .crop
  img {
  display: block;
  width: 180%;
  height: auto;
  margin: auto;
  position: absolute;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
}
.wrap_ico_concert {
  padding-top: 0;
}
.wrap_ico_concert li .ico_list {
  margin-top: 10px;
}
.section_detailview_consert {
  overflow: hidden;
  padding-top: 40px;
}
</style>
