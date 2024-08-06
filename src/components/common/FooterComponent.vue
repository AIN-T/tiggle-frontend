<template>
  <div id="wrap" class="index">
    <div id="footer" class="my_fold">
      <div class="btn_top_wrap" style="display: block"></div>
      <div class="footer_quick_link">
        <div class="l_box">
          <a class="linking5">Tiggle</a>
        </div>
        <div class="r_box">
          <a
            href="https://ticket.melon.com/customerservice/howto.htm"
            class="r_box_m1"
            >예매가이드</a
          >
          <a
            href="https://ticket.melon.com/customerservice/partnership_guide.htm"
            class="r_box_m2"
            >티켓판매제휴</a
          >
          <span class="r_box_m3">예매문의(1588-2314)</span>
        </div>
      </div>
      <div class="inner_footer">
        <ul class="clear_g">
          <li class="first_child">
            <a title="회사소개" target="_blank">회사소개</a>
          </li>
          <li>
            <a
              href="javascript:MELON.WEBSVC.POC.link.goTerms('use', 'use');"
              title="멜론이용약관"
              >이용약관</a
            >
          </li>
          <li>
            <a
              onclick="openWinPop2('https://ticket.melon.com/common/popup/ticketAgreementPop.htm',845,750); return false;"
              title="멜론티켓이용약관"
              >멜론티켓이용약관</a
            >
          </li>
          <li>
            <a title="개인정보처리방침"><strong>개인정보처리방침</strong></a>
          </li>
          <li>
            <a title="청소년보호정책">청소년보호정책</a>
          </li>
          <li>
            <a
              href="https://ticketpartner.melon.com/login/loginForm.htm"
              title="파트너센터"
              target="_blank"
              >파트너센터</a
            >
          </li>
        </ul>
        <p>
          <span class="first"><strong>㈜카카오엔터테인먼트</strong></span
          ><span>경기도 성남시 분당구 판교역로 221</span
          ><span>공동대표이사 : 권기수, 장윤중</span
          ><span class="first">사업자등록번호 : 220-88-02594</span><br />
          <span class="first"
            >통신판매업신고번호 : 2018-성남분당B-0004
            <a class="btn-info" title="사업자정보확인" target="_blank"
              >사업자정보확인</a
            ></span
          ><span class="first"
            >고객센터(평일/주말 09:00~18:00) : 1899-0042 (유료)</span
          ><br />
          <span class="first">호스팅서비스사업자 : (주)카카오엔터테인먼트</span
          ><span>© Kakao Entertainment Corp.</span>
        </p>
        <!-- //UX-1513 -->
        <!-- 20160509 구매안전 서비스 -->
        <div class="safe_service">
          <dl>
            <dt>신한은행 구매안전 서비스</dt>
            <dd>
              고객님은 안전거래를 위해 현금으로 결제시 <br />멜론티켓에서 가입한
              신한은행으로 <br />구매안전서비스를 이용하실 수 있습니다.
            </dd>
            <dd>
              <a
                href="https://cdnticket.melon.co.kr/resource/image/web/etc/melonticket_ent_guarantee_2023.pdf"
                target="_blank"
                >서비스 가입사실 확인</a
              >
            </dd>
          </dl>
        </div>
      </div>
      <a href="#" class="btn_top" title="맨 위로 가기" style="display: none"
        >맨 위로 가기</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
body,
dd,
div,
dl,
dt,
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
img {
  border: 0 none;
}
dl,
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
.btn {
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
.none {
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
.btn_g_link1 {
  width: 38px;
  background-position: -7px 0;
}
.btn_g_link1:hover {
  background-position: -7px -29px;
}
.btn_g_link2 {
  width: 77px;
  background-position: -45px 0;
}
.btn_g_link2:hover {
  background-position: -45px -29px;
}
.btn_g_link3 {
  width: 65px;
  background-position: -7px -58px;
}
.btn_g_link5 {
  width: 49px;
  background-position: -72px -58px;
}
.btn_g_link6 {
  width: 93px;
  background-position: -121px -58px;
}
.btn_g_link7 {
  width: 61px;
  background-position: -214px -58px;
}
.btn_g_link8 {
  width: 55px;
  background-position: -275px -58px;
}
.btn_g_link9 {
  width: 72px;
  background-position: -330px -58px;
}
.btn_g_link3:hover {
  background-position: -7px -87px;
}
.btn_g_link5:hover {
  background-position: -72px -87px;
}
.btn_g_link6:hover {
  background-position: -121px -87px;
}
.btn_g_link7:hover {
  background-position: -214px -87px;
}
.btn_g_link8:hover {
  background-position: -275px -87px;
}
.btn_g_link9:hover {
  background-position: -330px -87px;
}
.btn_g_login {
  width: 59px;
  background-position: -740px 0;
}
.btn_g_login:hover {
  background-position: -740px -29px;
}
.btn_g_howto {
  width: 67px;
  background-position: -941px -116px;
  margin-right: 4px;
}
.btn_g_howto:hover {
  background-position: -874px -116px;
}
#footer {
  width: 1008px;
  height: auto;
  margin: 0 auto;
  padding: 0;
}
.footer_quick_link {
  overflow: hidden;
  padding: 15px 0 14px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #b8b8b8;
}
.footer_quick_link .l_box {
  float: left;
  font-size: 0;
  width: 380px;
}
.footer_quick_link .l_box a {
  display: inline-block;
  margin-right: 23px;
  height: 22px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/footer_l_box3.png)
    no-repeat 0 0;
}
.footer_quick_link .l_box .linking1 {
  background-position: -79px 0;
  width: 75px;
}
.footer_quick_link .l_box .linking3 {
  background-position: -185px 0;
  width: 73px;
}
.footer_quick_link .l_box .linking4 {
  background-position: -281px 0;
  width: 50px;
}
.footer_quick_link .l_box .linking5 {
  background-position: 0 0;
  width: 49px;
  margin-left: 0;
}
.footer_quick_link .l_box .linking1:hover {
  background-position: -79px -22px;
}
.footer_quick_link .l_box .linking3:hover {
  background-position: -185px -22px;
}
.footer_quick_link .l_box .linking4:hover {
  background-position: -281px -22px;
}
.footer_quick_link .l_box .linking5:hover {
  background-position: 0 -22px;
}
.footer_quick_link .r_box {
  float: right;
  font-size: 0;
  padding-top: 4px;
  width: 360px;
  text-align: right;
}
.footer_quick_link .r_box a {
  display: inline-block;
  height: 14px;
  margin-left: 30px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/footer_r_box_170316.png)
    no-repeat 0 0;
}
.footer_quick_link .r_box a.r_box_m1 {
  background-position: 0 0;
  width: 60px;
}
.footer_quick_link .r_box a.r_box_m2 {
  background-position: -88px 0;
  width: 71px;
}
.footer_quick_link .r_box .r_box_m3 {
  display: inline-block;
  height: 14px;
  width: 137px;
  margin-left: 30px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/footer_r_box_170316.png)
    no-repeat -189px 0;
}
.inner_footer {
  position: relative;
  padding-right: 150px;
}
.inner_footer ul {
  padding: 23px 0 16px;
}
.inner_footer li {
  float: left;
}
.inner_footer li a {
  display: inline-block;
  padding: 0 9px;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0;
  color: #505050;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_gray_line03.png)
    no-repeat left 0;
}
.inner_footer li a:hover {
  color: #333;
  text-decoration: underline;
}
.inner_footer li.first_child a {
  background: 0;
  padding-left: 0;
  padding-right: 7px;
}
.inner_footer p {
  color: #909090;
}
.inner_footer p span {
  display: inline-block;
  padding: 0 13px 4px 13px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_gray_line03.png)
    no-repeat left 2px;
  letter-spacing: 0;
}
.inner_footer p span.first {
  background: 0;
  padding-left: 0;
}
.inner_footer p span a.btn-info {
  display: inline-block;
  color: #505050;
  margin-left: 10px;
  padding-right: 10px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_comm.png)
    no-repeat right 2px;
}
.inner_footer p span a.btn-info:hover {
  text-decoration: underline;
  color: #333;
}
#footer .ban {
  padding: 29px 0 31px;
}
#footer .ban a {
  margin-right: 39px;
  display: inline-block;
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
.popup .popup_title {
  padding: 8px 30px 11px;
  border-bottom: 1px solid #ccc;
  background-color: #81ba16;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4em;
  font-family: AppleSDGothicNeo-Regular, '맑은 고딕', 'Malgun Gothic', arial,
    '돋움', dotum, sans-serif, 'Apple Gothic', sans-serif;
  letter-spacing: -2px;
}
.inner_footer .safe_service {
  position: absolute;
  right: 0;
  top: 23px;
  width: 193px;
}
.inner_footer .safe_service dl dt {
  font-weight: 700;
  color: #505050;
  padding-bottom: 4px;
}
.inner_footer .safe_service dl dd {
  font-size: 11px;
  color: #909090;
  line-height: 16px;
}
.inner_footer .safe_service a {
  display: inline-block;
  margin-top: 2px;
  color: #505050;
  padding-right: 9px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_comm.png)
    no-repeat right 1px;
}
.inner_footer .safe_service a:hover {
  color: #000;
  text-decoration: underline;
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
#link00 {
  width: 100%;
  display: block;
  background-color: transparent;
  height: 30px;
}
#link00:hover {
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/top_ticket_global.png)
    no-repeat 0 -131px;
}
#link01 {
  width: 100%;
  display: none;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/top_ticket_global.png)
    no-repeat 0 -60px;
  height: 20px;
}
#link01:hover {
  background-position: 0 -161px;
}
#link02 {
  width: 100%;
  display: none;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/top_ticket_global.png)
    no-repeat 0 -80px;
  height: 20px;
}
#link02:hover {
  background-position: 0 -181px;
}
#link03 {
  width: 100%;
  display: none;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/top_ticket_global.png)
    no-repeat 0 -100px;
  height: 20px;
  padding-bottom: 10px;
}
#link03:hover {
  background-position: 0 -201px;
}
</style>
