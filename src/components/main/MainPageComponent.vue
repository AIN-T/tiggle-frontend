<template>
  <div id="conts" class="clear_g">
    <div class="wrap_main_concert">
      <h2 class="tit_main_concert">Tiggle Pick 추천 공연!</h2>
      <ul class="list_main_concert" id="perf_poster">
        <CardComponent
          v-for="program in programsStore.programs"
          :key="program.idx"
          v-bind:program="program"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useProgramsStore } from '@/stores/useProgramsStore.js';
import CardComponent from './CardComponent.vue';

export default {
  name: 'MainPageComponent',

  computed: {
    ...mapStores(useProgramsStore),
  },

  mounted() {
    this.programsStore.getPrograms();
  },
  data() {
    return {};
  },
  methods: {},
  components: { CardComponent },
};
</script>

<style>
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ul {
  margin: 0;
  padding: 0;
}
html {
  scrollbar-3dlight-color: #e1e1e1;
  scrollbar-base-color: #e1e1e1;
  scrollbar-face-color: #e1e1e1;
  scrollbar-highlight-color: #e1e1e1;
  scrollbar-shadow-color: #e1e1e1;
  scrollbar-darkshadow-color: #e1e1e1;
  scrollbar-arrow-color: #fff;
  scrollbar-track-color: #eee;
}
::-webkit-scrollbar {
  width: 16px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #eee;
}
::-webkit-scrollbar-thumb {
  height: 10px;
  width: 16px;
  background: #e1e1e1;
  -webkit-box-shadow: #e1e1e1;
}
img {
  border: 0 none;
}
li,
ul {
  list-style: none;
}
body {
  background: #fff;
  -webkit-text-size-adjust: none;
}
body {
  font-size: 12px;
  line-height: 1.5;
  font-family: AppleSDGothicNeo-Regular, '돋움', Dotum, '맑은 고딕',
    'Malgun Gothic', 'Apple Gothic', sans-serif;
  color: #666;
  letter-spacing: -1px;
}
a {
  color: #666;
  text-decoration: none;
}
.clear_g {
  display: block;
  overflow: visible;
  width: auto;
  clear: both;
}
.clear_g:after {
  display: block;
  visibility: hidden;
  height: 0;
  font-size: 0;
  clear: both;
  content: '';
}
.ac {
  text-align: center;
}
.thumb_117x117,
.thumb_130x180,
.thumb_130x184,
.thumb_135x135,
.thumb_160x225,
.thumb_180x250,
.thumb_190x142,
.thumb_234x176,
.thumb_238x178,
.thumb_250x250,
.thumb_268x120,
.thumb_268x155,
.thumb_280x166,
.thumb_314x235,
.thumb_320x400,
.thumb_339x328,
.thumb_340x328,
.thumb_545x150,
.thumb_660x328,
.thumb_661x328,
.thumb_90x125,
.thumb_90x90 {
  display: block;
  overflow: hidden;
  position: relative;
}
.thumb_190x142 .frame,
.thumb_238x178 .frame,
.thumb_268x120 .frame,
.thumb_268x155 .frame,
.thumb_314x235 .frame,
.thumb_545x150 .frame,
.thumb_90x90 .frame {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_frame3.png)
    no-repeat;
}
.thumb_117x117 .frame,
.thumb_135x135 .frame,
.thumb_234x176 .frame,
.thumb_250x250 .frame,
.thumb_280x166 .frame,
.thumb_339x328 .frame,
.thumb_340x328 .frame,
.thumb_660x328 .frame,
.thumb_661x328 .frame {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_frame2.png)
    no-repeat;
  z-index: 99;
}
.thumb_130x180 .frame,
.thumb_130x184 .frame,
.thumb_160x225 .frame,
.thumb_180x250 .frame,
.thumb_320x400 .frame,
.thumb_90x125 .frame {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_frame.png)
    no-repeat;
}
.thumb_545x150,
.thumb_545x150 .frame {
  width: 545px;
  height: 150px;
}
.thumb_268x155,
.thumb_268x155 .frame {
  width: 268px;
  height: 155px;
}
.thumb_190x142,
.thumb_190x142 .frame {
  width: 190px;
  height: 142px;
}
.thumb_314x235,
.thumb_314x235 .frame {
  width: 314px;
  height: 235px;
}
.thumb_238x178,
.thumb_238x178 .frame {
  width: 238px;
  height: 178px;
}
.thumb_339x328,
.thumb_339x328 .frame {
  width: 339px;
  height: 328px;
}
.thumb_340x328,
.thumb_340x328 .frame {
  width: 340px;
  height: 328px;
}
.thumb_660x328,
.thumb_660x328 .frame {
  width: 660px;
  height: 328px;
}
.thumb_661x328,
.thumb_661x328 .frame {
  width: 661px;
  height: 328px;
}
.thumb_250x250,
.thumb_250x250 .frame {
  width: 250px;
  height: 250px;
}
.thumb_117x117,
.thumb_117x117 .frame {
  width: 117px;
  height: 117px;
}
.thumb_135x135,
.thumb_135x135 .frame {
  width: 135px;
  height: 135px;
}
.thumb_280x166,
.thumb_280x166 .frame {
  width: 280px;
  height: 166px;
}
.thumb_268x120,
.thumb_268x120 .frame {
  width: 268px;
  height: 120px;
}
.thumb_234x176,
.thumb_234x176 .frame {
  width: 234px;
  height: 176px;
}
.thumb_320x400,
.thumb_320x400 .frame {
  width: 320px;
  height: 400px;
}
.thumb_180x250,
.thumb_180x250 .frame {
  width: 180px;
  height: 250px;
}
.thumb_160x225,
.thumb_160x225 .frame {
  width: 160px;
  height: 225px;
}
.thumb_130x180,
.thumb_130x180 .frame {
  width: 130px;
  height: 180px;
}
.thumb_90x125,
.thumb_90x125 .frame {
  width: 90px;
  height: 125px;
}
.thumb_90x90,
.thumb_90x90 .frame {
  width: 90px;
  height: 90px;
}
.thumb_130x184,
.thumb_130x184 .frame {
  width: 130px;
  height: 184px;
}
.thumb_545x150 .frame {
  background-position: -190px -413px;
}
.thumb_268x155 .frame {
  background-position: -732px 0;
}
.thumb_190x142 .frame {
  background-position: 0 -413px;
}
.thumb_238x178 .frame {
  background-position: 0 -235px;
}
.thumb_314x235 .frame {
  background-position: 0 0;
}
.thumb_339x328 .frame {
  background: 0 0;
  background-color: #000;
  opacity: 0.5;
}
.thumb_340x328 .frame {
  background: 0 0;
  background-color: #000;
  opacity: 0.5;
}
.thumb_660x328 .frame {
  background: 0 0;
  background-color: #000;
  opacity: 0.25;
}
.thumb_661x328 .frame {
  background: 0 0;
  background-color: #000;
  opacity: 0.25;
}
.thumb_250x250 .frame {
  background-position: 0 -523px;
}
.thumb_117x117 .frame {
  background: 0 0;
  width: 115px;
  height: 115px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_135x135 .frame {
  background: 0 0;
  width: 133px;
  height: 133px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_280x166 .frame {
  background-position: 0 -356px;
}
.thumb_268x120 .frame {
  background: 0 0;
  width: 266px;
  height: 118px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_234x176 .frame {
  background: 0 0;
  width: 232px;
  height: 174px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_320x400 .frame {
  background-position: -650px -500px;
}
.thumb_180x250 .frame {
  background: 0 0;
  width: 178px;
  height: 248px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_160x225 .frame {
  background: 0 0;
  width: 158px;
  height: 223px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_130x180 .frame {
  background: 0 0;
  width: 128px;
  height: 178px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_90x125 .frame {
  background: 0 0;
  width: 88px;
  height: 123px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_90x90 .frame {
  background-position: 0 -740px;
}
.thumb_130x184 .frame {
  background: 0 0;
  width: 128px;
  height: 182px;
  z-index: 10;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
.thumb_117x117 img,
.thumb_130x180 img,
.thumb_130x184 img,
.thumb_135x135 img,
.thumb_160x225 img,
.thumb_180x250 img,
.thumb_190x142 img,
.thumb_234x176 img,
.thumb_238x178 img,
.thumb_268x120 img,
.thumb_268x155 img,
.thumb_280x166 img,
.thumb_314x235 img,
.thumb_320x400 img,
.thumb_339x328 img,
.thumb_340x328 img,
.thumb_545x150 img,
.thumb_660x328 img,
.thumb_661x328 img,
.thumb_90x125 img,
.thumb_90x90 img {
  vertical-align: top;
}
#conts {
  display: block;
  position: relative;
  width: 1008px;
  min-height: 600px;
  padding: 0 20px 53px;
  margin: 0 auto;
}
#conts:after {
  content: '';
  display: block;
  overflow: hidden;
  width: 100%;
  height: 0;
  text-align: -9999px;
  clear: both;
}
.index #conts {
  padding-top: 0;
}
.wrap_main_performance {
  display: block;
  overflow: hidden;
  margin-top: 30px;
  border: 1px solid #ddd;
}
.wrap_main_performance .list_main_performance {
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 73px 0 23px;
}
.wrap_main_performance .list_main_performance .tit {
  position: absolute;
  top: 0;
  height: 48px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #eee;
}
.wrap_main_performance .list_main_performance .tit a {
  display: block;
  height: 48px;
  font-weight: 400;
  font-size: 18px;
  line-height: 48px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  color: #333;
  text-align: center;
}
.wrap_main_performance .list_main_performance .tit a:hover {
  text-decoration: none;
  color: #000;
}
.wrap_main_concert {
  padding-top: 28px;
}
.wrap_main_concert .tit_main_concert {
  display: block;
  padding-bottom: 16px;
  font-size: 20px;
  line-height: 28px;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic';
  color: #333;
}
.wrap_main_concert .list_main_concert {
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-top: -30px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wrap_main_concert .list_main_concert li {
  float: left;
  margin-left: 28px;
  padding-top: 30px;
}
.wrap_main_concert .list_main_concert li.first {
  margin-left: 0;
  padding-right: 1px;
}
.wrap_main_concert .list_main_concert .inner {
  position: relative;
  display: block;
  width: 180px;
  height: 358px;
  padding: 24px 24px 21px;
  border: 1px solid #eee;
}
.wrap_main_concert .list_main_concert .inner:hover {
  text-decoration: none;
}
.wrap_main_concert .list_main_concert .thumb {
  display: block;
  position: relative;
  width: 180px;
  height: 250px;
  overflow: hidden;
}
.wrap_main_concert .list_main_concert .thumb img {
  width: 180px;
}
.wrap_main_concert .list_main_concert .thumb .frame {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 178px;
  height: 248px;
  background: 0 0;
  z-index: 10;
  border: 1px solid #000;
  opacity: 0.03;
}
.wrap_main_concert .list_main_concert .inner:hover .thumb .frame {
  background-position: -820px -230px;
}
.wrap_main_concert .list_main_concert .tit {
  display: block;
  overflow: hidden;
  height: 20px;
  padding: 13px 0 9px;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrap_main_concert .list_main_concert .inner:hover .tit {
  color: #000;
}
.wrap_main_concert .list_main_concert .inner:hover .day {
  color: #000;
}
.wrap_main_concert .list_main_concert .inner:hover .location {
  color: #000;
}
.wrap_main_concert .list_main_concert .day {
  display: block;
  overflow: hidden;
  height: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrap_main_concert .list_main_concert .location {
  display: block;
  overflow: hidden;
  height: 20px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #888;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrap_main_concert .list_main_concert .stat {
  display: block;
  overflow: hidden;
  height: 20px;
  padding-top: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #00cd3c;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.thumb_180x254 {
  width: 180px;
  height: 254px;
  position: relative;
}
.thumb_180x254 .frame {
  position: absolute;
  width: 178px;
  height: 252px;
  z-index: 10;
  top: 0;
  left: 0;
  border: 1px solid #000;
  opacity: 0.03;
}
@-moz-document url-prefix() {
  .btn_arr_down_28 {
    height: 28px;
    padding: 0 20px 0 0;
    background-position: right -675px;
  }
  .btn_arr_down_28 span {
    padding: 6px 0 0 7px;
    background-position: left -675px;
    margin-top: -1px;
    height: 22px;
  }
  .btn_arr_down_28:hover span {
    background-position: left -1184px;
  }
  .ico_list {
    line-height: 15px;
  }
  .ico_list4 {
    line-height: 15px;
  }
}
</style>
