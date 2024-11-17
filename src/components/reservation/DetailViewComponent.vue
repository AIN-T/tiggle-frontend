<template>
  <div id="wrap" class="index">
    <div id="cont_wrap" class="clear_g">
      <div id="conts_section" class="pr_none">
        <div id="conts" class="clear_g">
          <div class="section_detailview_product">
            <div class="wrap_consert_product">
              <!-- 상품 상세정보 -->
              <br />
              <div class="wrap_consert_cont">
                <div class="box_consert_thumb thumb_180x254">
                  <img
                    :src="
                      programsStore.program.imageUrls.length > 0
                        ? programsStore.program.imageUrls[0]
                        : 'default-image-url.jpg'
                    "
                    width="180"
                    alt=""
                  />
                  <span class="frame"></span>
                </div>
                <div class="box_consert_txt">
                  <div class="title_tab">
                    <p class="tit">
                      {{ programsStore.program.programName }}
                    </p>
                    <p
                      class="like"
                      @click="isLoggedIn && programsStore.like(route.params.id)"
                      :class="{
                        disabled: !isLoggedIn,
                        clickable: isLoggedIn,
                        liked: programsStore.program.like,
                      }"
                    >
                      <font-awesome-icon
                        v-if="programsStore.program.like"
                        :icon="['fas', 'heart']"
                        style="padding-right: 10px; font-size: 20px"
                      />
                      <font-awesome-icon
                        v-else
                        :icon="['far', 'heart']"
                        style="padding-right: 10px; font-size: 20px"
                      />
                      좋아요
                    </p>
                  </div>
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
                          title=""
                        >
                          <span class="place">{{
                            programsStore.program.locationName
                          }}</span>
                          <span class="ico_more">바로가기</span>
                        </a>
                      </dd>
                      <dt class="tit_info">관람등급</dt>
                      <dd class="txt_info">
                        {{ programsStore.program.age }}세 이상
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div v-if="isBeforeOpenDate">
                <div style="display: block" class="btn_ticketing_type">
                  <div class="btn_table">
                    <div class="box_txt" id="box_tkt_txt">
                      예매 오픈일:
                      {{ programsStore.program.reservationOpenDate }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- 날짜 선택 -->
              <div v-else-if="inReservationPeriod">
                <div id="ticketing_process_box">
                  <div class="wrap_ticketing_process">
                    <!-- 예매일 이전엔 안보이게 -->
                    <!-- 예매 오픈 전 -->
                    <div class="box_ticketing_process">
                      <dl class="date_choice">
                        <dt class="tit_process tit_date_choice">
                          <span class="img">날짜 선택</span>
                        </dt>
                        <VueDatePicker
                          :enable-time-picker="false"
                          v-model="selectedDate"
                          locale="ko"
                          inline
                          auto-apply
                          :disabled-dates="disabledDates"
                          @update:model-value="enabledDates"
                        ></VueDatePicker>
                      </dl>
                      <!-- 시간 선택 -->
                      <dl class="time_choice">
                        <dt class="tit_process tit_time_choice">
                          <span class="img">시간 선택</span>
                        </dt>
                        <dd class="cont_process" id="section_time">
                          <div class="box_type_list">
                            <ul class="list_type" id="list_time">
                              <li
                                v-for="round in selectedDateRounds"
                                :key="round.id"
                                class="item_time"
                                :class="{
                                  active:
                                    selectedRound &&
                                    selectedRound.id === round.id,
                                }"
                                @click="selectRound(round)"
                              >
                                <button>
                                  <span class="txt" style="text-align: center">
                                    {{ formatTime(round.date) }}
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </dd>
                      </dl>
                      <!-- 좌석 선택 -->
                      <dl class="seat_choice">
                        <dt class="tit_process tit_seat_choice">
                          <span class="img">좌석 선택</span>
                        </dt>
                        <dd class="cont_process" id="section_seat">
                          <div class="box_type_list box_type_list_all">
                            <p class="seat_text">등급별 가격 현황</p>
                            <ul class="list_seat" id="list_seat">
                              <li
                                v-for="price in programsStore.prices"
                                :key="price.programGradeId"
                                class="item_seat"
                              >
                                <p>
                                  <span class="txt">
                                    <span class="in">
                                      <span>{{ price.gradeName }}석</span>
                                      <strong>{{
                                        formatPrice(price.price)
                                      }}</strong>
                                    </span>
                                  </span>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div style="display: block" class="btn_ticketing_type">
                      <div class="btn_table">
                        <div class="box_txt" id="box_tkt_txt"></div>

                        <div class="box_btn" @click="openPopup">
                          <button
                            class="button btColorGreen"
                            id="ticketReservation_Btn"
                            :class="{ mhover: isHover }"
                            @mouseover="isHover = true"
                          >
                            <span class="btSizeL">예매하기</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else>
                <div style="display: block" class="btn_ticketing_type">
                  <div class="btn_table">
                    <div class="box_txt" id="box_tkt_txt">
                      예매 마감되었습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 상세정보 -->
            <div class="wrap_detail_tab wrap_detail_tab_6">
              <div class="detail_title">상세정보</div>
            </div>

            <div class="wrap_detailview_cont">
              <p class="none">상세정보 콘텐츠</p>

              <div class="wrap_detail_left_cont">
                <div class="box_concert_time">
                  <p class="tit_sub_float">공연기간</p>
                  <p>
                    <span style="font-size: 11pt">
                      {{ formatDate(programsStore.program.programStartDate) }}
                      ~
                      {{
                        formatDate(programsStore.program.programEndDate)
                      }}</span
                    >
                  </p>
                </div>
                <!-- 가격정보 -->
                <div class="box_base_price">
                  <p class="tit_sub_float">가격정보</p>
                  <p class="tit_sub_ss_float">기본가</p>
                  <br />
                  <ul class="list_seat">
                    <li
                      v-for="price in programsStore.prices"
                      :key="price.programGradeId"
                    >
                      <span class="seat_name">{{ price.gradeName }}석</span>
                      <span class="price">
                        {{ formatPrice(price.price) }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="box_img_content" v-if="programsStore.program">
                  <p class="tit_sub_float">좌석 배치도</p>

                  <img
                    :src="'https://daqu2024-s3.s3.ap-northeast-2.amazonaws.com/reservationImg2.jpg'"
                    title=""
                  />
                  <img
                    :src="'https://daqu2024-s3.s3.ap-northeast-2.amazonaws.com/reservationImg.jpg'"
                    title=""
                  />
                  <p class="tit_sub_float">작품 설명</p>
                  <img
                    :src="
                      programsStore.program.imageUrls.length > 1
                        ? programsStore.program.imageUrls[1]
                        : 'default-image-url.jpg'
                    "
                    title=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProgramsStore } from '@/stores/useProgramsStore';
import { useBookingStore } from '@/stores/useBookingStore';
import { useMemberStore } from '@/stores/useMemberStore';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const programsStore = useProgramsStore();
const bookingStore = useBookingStore();
const memberStore = useMemberStore();
const route = useRoute();

const isLoggedIn = memberStore.isLoggedIn;

const selectedDate = ref(null);
const selectedRound = ref(null);
const isHover = ref(false);
const isBeforeOpenDate = ref(true);
const inReservationPeriod = ref(false);

onMounted(async () => {
  const programId = route.params.id;
  await Promise.all([
    programsStore.ProgramDetail(programId),
    programsStore.PriceInfo(programId),
    programsStore.times(programId),
  ]);

  // 프로그램 데이터가 로드된 후에 계산
  const now = new Date();
  isBeforeOpenDate.value =
    now < new Date(programsStore.program.reservationOpenDate);
  inReservationPeriod.value =
    now >= new Date(programsStore.program.reservationOpenDate) &&
    now < new Date(programsStore.program.programEndDate);
});

const enabledDates = computed(() => {
  if (!Array.isArray(programsStore.times)) {
    return [];
  }
  return programsStore.times.map((round) => new Date(round.date));
});

const disabledDates = computed(() => {
  const enabledDatesList = enabledDates.value.map(
    (date) => new Date(date.setHours(0, 0, 0, 0)).toISOString().split('T')[0]
  );
  return (date) =>
    !enabledDatesList.includes(
      new Date(date.setHours(0, 0, 0, 0)).toISOString().split('T')[0]
    );
});

const selectedDateRounds = computed(() => {
  if (!Array.isArray(programsStore.times) || !selectedDate.value) {
    return [];
  }
  const selectedDateString = selectedDate.value.toISOString().split('T')[0];
  return programsStore.times.filter((round) =>
    round.date.startsWith(selectedDateString)
  );
});

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

function formatPrice(value) {
  return new Intl.NumberFormat('ko-KR').format(value) + '원';
}

const openPopup = () => {
  if (!selectedRound.value) {
    alert('회차를 선택해주세요.');
    return;
  }

  const programId = route.params.id;
  const timesId = selectedRound.value.id;
  bookingStore.setData(
    programsStore.program.locationId,
    programsStore.program.programName,
    programId,
    timesId,
    1
  );

  const popUrl = '/seat';
  const popOption =
    'width=986, height=682, resizable=no, scrollbars=no, status=no;'; // 팝업창 옵션
  window.open(popUrl, '', popOption);
};

function selectRound(round) {
  selectedRound.value = round;
}

function formatTime(dateString) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(dateString).toLocaleString('ko-KR', options);
}
</script>

<style scoped>
@charset "utf-8";

.dp__flex_display {
  display: flex;
  flex-direction: column;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.clickable {
  cursor: pointer;
  transition: background-color 0.1s;
}

.clickable:hover {
  background-color: #d3d3d3;
  color: #000;
}

.title_tab {
  display: flex;
  align-items: center;
}

.like {
  border: 2px solid #a1a0a0;
  border-radius: 20px;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 600;
  color: #686868;
}

.like.liked {
  color: #00cd3c;
  border: 2px solid #00cd3c;
}

#calender {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.wrap_detail_tab_6 .detail_title {
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #333;
}

.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li.active
  button {
  background-color: #fff;
  border: 1px solid #41d26b;
  width: 276.6px;
  padding: 1px;
}

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

.wrap_seat {
  position: relative;
  margin-top: 22px;
}

.wrap_seat .box_seat {
  border: 1px solid #ddd;
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

.wrap_detail_tab {
  overflow: hidden;
  padding-top: 40px;
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
  padding-top: 30px;
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
  height: 290px;
  background-color: #fafafa;
}

.wrap_ticketing_process .box_ticketing_process .date_choice .box_type_list {
  overflow: hidden;
  overflow-y: auto;
  height: 216px;
  border-right: 1px solid #ebebeb;
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
  li
  button:hover {
  background-color: #fff;
  border: 1px solid #41d26b;
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
  border: 1px solid #eee;
  text-align: center;
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
  li
  button:hover {
  background-color: #fff;
  border: 1px solid #41d26b;
  padding: 1px;
  width: 276.6px;
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
  padding: 0 50px;
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

.wrap_detailview_cont {
  display: flex;
  justify-content: left;
}

.wrap_detailview_cont .wrap_detail_left_cont {
  width: 702px;
}

.wrap_detailview_cont .wrap_detail_left_cont .tit_sub_float {
  margin-left: 2px;
}

.wrap_detailview_cont .wrap_detail_left_cont .box_concert_time {
  margin-top: 38px;
}

.wrap_detailview_cont .wrap_detail_left_cont .box_base_price {
  margin-top: 36px;
}

.wrap_detailview_cont .wrap_detail_left_cont .box_base_price .list_seat {
  padding: 10px 0 10px 19px;
  margin-top: -8px;
  border: 1px solid #f7f7f7;
  background-color: #fbfbfb;
  overflow: hidden;
}

.wrap_detailview_cont .wrap_detail_left_cont .box_base_price .list_seat li {
  display: inline-block;
  position: relative;
  width: 49%;
  height: 28px;
  vertical-align: middle;
}

.wrap_detailview_cont
  .wrap_detail_left_cont
  .box_base_price
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
  .box_base_price
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
  .box_base_price
  .list_seat
  li
  .price {
  float: right;
  padding-right: 20px;
  color: #888;
  vertical-align: middle;
  letter-spacing: 0;
}

.wrap_ticketing_process
  .box_ticketing_process
  .time_choice
  .list_type
  li
  button:hover {
  background-color: #fff;
  border: 1px solid #41d26b;
}

.wrap_detailview_cont .wrap_detail_left_cont .box_price_info {
  margin-top: 32px;
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

.wrap_detailview_cont .box_concert_img .box_thumb .list_thumb li {
  float: left;
  height: 176px;
  margin-left: 24px;
  padding-bottom: 24px;
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

.btSizeL {
  display: inline-block;
  height: 48px;
  line-height: 46px;
  font-size: 16px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
}

.btSizeL:hover {
  text-decoration: none;
}

.btColorGreen:hover {
  border: 1px solid #00b523;
  background: #00b523;
}
</style>
