<template>
  <div id="header">
    <div id="header_wrap" class="pr_none">
      <div id="gnb" class="clear_g">
        <div id="util_menu">
          <p class="screen_out">상단 빠른 메뉴</p>
          <div class="top_right">
            <ul class="clear_g">
              <li class="name" id="name_area"></li>
              <li v-if="this.memberStore.isLoggedIn">
                <span id="login_area"
                  ><a
                    class="btn_gnb btn_g_logout"
                    @click="this.memberStore.logout()"
                    >로그아웃</a
                  ></span
                >
              </li>
              <li v-else>
                <span id="login_area"
                  ><router-link class="btn_gnb btn_g_login" to="/login"
                    >로그인</router-link
                  ></span
                >
              </li>
              <li id="sub_area" v-if="!this.memberStore.isLoggedIn">
                <router-link class="btn_gnb btn_g_join" to="/agree"
                  >회원가입</router-link
                >
              </li>
              <li>
                <a class="btn_gnb btn_g_customer">고객센터</a>
              </li>
            </ul>
          </div>
        </div>
        <h1 id="logo">
          <router-link to="/">
            <img
              src="https://daqu2024-s3.s3.ap-northeast-2.amazonaws.com/tiggle.png"
            />
          </router-link>
        </h1>
        <div class="srch_set">
          <fieldset>
            <legend>통합검색영역</legend>
            <input
              type="text"
              title="검색 입력 편집창"
              name=""
              id="top_search"
              class="placeholder"
              placeholder="안녕하세요 반갑습니다"
            />
            <input
              type="hidden"
              id="searchValue"
              value="2024 박서준 팬미팅 ‘서준시（時）’－서울"
            />
            <input
              type="hidden"
              id="placeholderValue"
              value="배우 박서준, 7년만의 만남!"
            />
            <button
              type="button"
              class="btn_icon search_m"
              id="btn_top_search"
              title="검색"
              a_value=""
            >
              <span class="btn_comm">검색</span>
            </button>
          </fieldset>
        </div>
      </div>
      <div id="gnb_menu">
        <ul class="list_gnb">
          <li class="nth1">
            <router-link class="btn_gnb_menu btn_gnb btn_g_menu01" to="/"
              >홈</router-link
            >
          </li>
          <li class="nth2">
            <a class="btn_gnb_menu btn_gnb btn_g_menu02">콘서트</a>
          </li>
          <li class="nth3">
            <a class="btn_gnb_menu btn_gnb btn_g_menu03">뮤지컬/연극</a>
          </li>

          <li class="nth10">
            <a class="btn_gnb_menu btn_gnb btn_g_menu10">클래식</a>
          </li>
          <li class="nth9">
            <router-link class="btn_gnb_menu btn_gnb btn_g_menu09" to="/mypage"
              >마이티켓</router-link
            >
            <div class="lay_menu">
              <ul>
                <li>
                  <a class="btn_gnb btn_g_menu0901">마이티켓홈</a>
                </li>
                <li>
                  <a class="btn_gnb btn_g_menu0902">예매확인/취소</a>
                </li>
                <li>
                  <a class="btn_gnb btn_g_menu0903">할인쿠폰</a>
                </li>
                <li>
                  <a class="btn_gnb btn_g_menu0904">공연예매권</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMemberStore } from '@/stores/useMemberStore.js';

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapStores(useMemberStore),
  },
  data() {
    return {};
  },
  methods: {
    goTo(dest) {
      this.$router.push({ path: `/${dest}` }); // '/main' 경로로 이동
    },
  },
};
</script>

<style>
body,
button,
div,
fieldset,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
p,
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
fieldset,
img {
  border: 0 none;
}
li,
menu,
ul {
  list-style: none;
}
button,
input {
  vertical-align: middle;
}
button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
}
body {
  background: #fff;
  -webkit-text-size-adjust: none;
}
body,
button,
input {
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
legend {
  position: absolute;
  top: -7000px;
  left: -7000px;
  height: 0;
}
.btn,
.button,
button {
  display: inline-block;
  zoom: 1;
  margin: 0;
  padding: 0;
  background: 0 0;
  border: none;
  text-decoration: none !important;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
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
.btn_comm {
  display: block;
  overflow: hidden;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_comm.png)
    no-repeat;
  text-indent: -9999px;
}
.btn_search {
  width: 35px;
  height: 34px;
  background-position: -50px -270px;
}
.btn_gnb {
  display: block;
  overflow: hidden;
  float: left;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_gnb_20240122.png)
    no-repeat;
  text-indent: -9999px;
}
.btn_g_login {
  width: 59px;
  background-position: -740px 0;
}
.btn_g_login:hover {
  background-position: -740px -29px;
}

.btn_g_logout {
  width: 73px;
  background-position: -798px -58px;
}
.btn_g_logout:hover {
  background-position: -798px -87px;
}

.btn_g_join {
  width: 71px;
  background-position: -799px 0;
}
.btn_g_join:hover {
  background-position: -799px -29px;
}
.btn_g_customer {
  width: 71px;
  background-position: -870px 0;
}
.btn_g_customer:hover {
  background-position: -870px -29px;
}
.btn_g_menu01 {
  position: absolute;
  top: 0;
  left: 7px;
  width: 44px;
  background-position: -7px -159px;
}
.btn_g_menu01:hover {
  background-position: -7px -209px;
}
.btn_g_menu02 {
  position: absolute;
  top: 0;
  left: 234px;
  width: 68px;
  background-position: -51px -159px;
}
.btn_g_menu02:hover {
  background-position: -51px -209px;
}
.btn_g_menu03 {
  position: absolute;
  top: 0;
  left: 461px;
  width: 113px;
  background-position: -119px -159px;
}
.btn_g_menu03:hover {
  background-position: -119px -209px;
}
.btn_g_menu06 {
  position: absolute;
  top: 0;
  left: 598px;
  width: 132px;
  background-position: -598px -159px;
}
.btn_g_menu06:hover {
  background-position: -598px -209px;
}
.btn_g_menu07 {
  position: absolute;
  top: 0;
  left: 730px;
  width: 71px;
  background-position: -730px -159px;
}
.btn_g_menu07:hover {
  background-position: -730px -209px;
}
.btn_g_menu08 {
  position: absolute;
  top: 0;
  left: 832px;
  width: 83px;
  background-position: -832px -159px;
}
.btn_g_menu08:hover {
  background-position: -832px -209px;
}
.btn_g_menu09 {
  position: absolute;
  top: 0;
  left: 915px;
  width: 86px;
  background-position: -915px -159px;
}
.btn_g_menu09:hover {
  background-position: -915px -209px;
}
.btn_g_menu0701 {
  width: 75px;
  background-position: -23px -375px;
}
.btn_g_menu0701:hover {
  background-position: -23px -416px;
}
.btn_g_menu0702 {
  width: 117px;
  background-position: -135px -457px;
}
.btn_g_menu0702:hover {
  background-position: -135px -498px;
}
.btn_g_menu0703 {
  width: 72px;
  background-position: -275px -457px;
}
.btn_g_menu0703:hover {
  background-position: -275px -498px;
}
.btn_g_menu0704 {
  width: 71px;
  background-position: -391px -457px;
}
.btn_g_menu0704:hover {
  background-position: -391px -498px;
}
.btn_g_menu0901 {
  width: 75px;
  background-position: -23px -557px;
}
.btn_g_menu0901:hover {
  background-position: -23px -598px;
}
.btn_g_menu0902 {
  width: 93px;
  background-position: -142px -557px;
}
.btn_g_menu0902:hover {
  background-position: -142px -598px;
}
.btn_g_menu0903 {
  width: 56px;
  background-position: -281px -557px;
}
.btn_g_menu0903:hover {
  background-position: -281px -598px;
}
.btn_g_menu0904 {
  width: 71px;
  background-position: -382px -557px;
}
.btn_g_menu0904:hover {
  background-position: -382px -598px;
}
.btn_g_menu0905 {
  width: 76px;
  background-position: -497px -557px;
}
.btn_g_menu0905:hover {
  background-position: -497px -598px;
}
.btn_g_menu0301:hover {
  background-position: 0 -417px;
}
.btn_g_menu0302:hover {
  background-position: -86px -417px;
}
.btn_g_menu0303:hover {
  background-position: -209px -417px;
}
.btn_g_menu0304:hover {
  background-position: -328px -417px;
}
.btn_g_menu10 {
  position: absolute;
  top: 0;
  left: 688px;
  width: 92px;
  background-position: -232px -159px;
}
.btn_g_menu10:hover {
  background-position: -232px -209px;
}
.btn_g_menu11 {
  position: absolute;
  top: 0;
  left: 324px;
  width: 108px;
  background-position: -324px -159px;
}
.btn_g_menu11:hover {
  background-position: -324px -209px;
}
#header {
  display: block;
  background: #fff
    url(//cdnticket.melon.co.kr/resource/image/web/common/bg_header2.jpg) top
    center repeat-x;
}
#header.search {
  display: block;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_header_search.jpg)
    top center repeat-x;
}
#header:after {
  content: '';
  display: block;
  clear: both;
}
#header_wrap {
  width: 1008px;
  min-height: 154px;
  padding: 0;
  margin: 0 auto;
}
#header_wrap #gnb {
  display: block;
  width: 100%;
  height: 112px;
}
#header_wrap #gnb:after {
  content: '';
  display: block;
  clear: both;
}
#header_wrap #gnb .srch_set {
  display: inline;
  position: relative;
  float: left;
  width: 272px;
  height: 36px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 18px;
  padding-left: 18px;
  padding-right: 55px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_cmn_search4.png)
    no-repeat;
  z-index: 15;
  vertical-align: top;
}
#header_wrap #gnb #top_search {
  padding: 3px 0 2px;
  border: 0;
  font-size: 14px;
  background: 0 0;
  width: 100%;
  height: 36px;
  line-height: 34px;
  color: #333;
  letter-spacing: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#header_wrap #gnb #top_search::-webkit-input-placeholder {
  color: #a9a9a9;
}
#header_wrap #gnb #top_search::-moz-placeholder {
  color: #a9a9a9;
}
#header_wrap #gnb #top_search:-ms-input-placeholder {
  color: #a9a9a9;
}
#header_wrap #gnb .search_m {
  position: absolute;
  right: 16px;
  top: 8px;
  width: 23px;
  height: 23px;
}
#header_wrap #gnb .search_m .btn_comm {
  display: block;
  height: 100%;
  background-position: -57px -275px;
  width: 23px;
}
#header_wrap #gnb .search_m:hover .btn_comm {
  background-position: -85px -275px;
}
#header_wrap #logo {
  float: left;
  margin-top: 20px;
  margin-right: 20px;
}
#header_wrap #logo a {
  display: block;
}
#header_wrap #logo.srch_logo {
  margin-top: 36px;
}
#header_wrap #util_menu {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 29px;
}
#header_wrap #util_menu .btn_gnb {
  height: 29px;
}
#header_wrap #util_menu .top_right {
  float: right;
}
#header_wrap #util_menu .top_right ul {
  overflow: hidden;
}
#header_wrap #util_menu .top_right ul,
#header_wrap #util_menu .top_right ul li {
  float: left;
}
#header_wrap #gnb_menu {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 42px;
  font-size: 0;
  line-height: 0;
}
#header_wrap #util_menu .top_right ul li.name {
  color: #333;
  height: 20px;
  padding: 9px 14px 0 0;
}
#header_wrap #gnb_menu .btn_gnb_menu,
#header_wrap #gnb_menu2 .btn_gnb_menu {
  height: 42px;
}
#header_wrap #gnb_menu .lay_menu {
  display: none;
  position: relative;
}
#header_wrap #gnb_menu .nth3 .lay_menu {
  left: 180px;
}
#header_wrap #gnb_menu2 {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  font-size: 0;
  line-height: 0;
}
#header_wrap #gnb_menu .nth7 .lay_menu {
  left: 679px;
}
#header_wrap #gnb_menu .nth9 .lay_menu {
  left: 472px;
}
#header_wrap #gnb_menu .lay_menu ul {
  display: block;
}
#header_wrap #gnb_menu .lay_menu ul li {
  float: left;
}
#header_wrap #gnb_menu .lay_menu a {
  float: left;
  margin-right: 38px;
}
#header_wrap #gnb_menu .lay_menu .btn_gnb {
  height: 41px;
}
.btn_top_wrap {
  display: none;
  position: fixed;
  bottom: 350px;
  left: 50%;
  margin-left: 514px;
  width: 50px;
  height: 50px;
  z-index: 10;
}
.btn_top_wrap .btn_top {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_top2.png)
    no-repeat;
}
.btn_top_wrap .btn_top span {
  display: inline-block;
  text-indent: -9999px;
}
.btn_top_wrap a.btn_top:hover {
  background-position: 0 -50px;
}
.wrap_main_concert {
  padding-top: 28px;
}
.wrap_main_concert .list_main_concert {
  display: block;
  overflow: hidden;
  width: 100%;
  margin-top: -30px;
}
.wrap_main_concert .list_main_concert li {
  float: left;
  margin-left: 28px;
  padding-top: 30px;
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
#header_wrap #util_menu {
  overflow: visible;
}
</style>
