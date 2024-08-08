<template>
  <div id="wrap" class="index">
    <div id="footer" class="my_fold">
      <div class="btn_top_wrap" style="display: block;">
      </div>
      <div class="footer_quick_link">
        <div class="l_box">
          <a href="" class="linking5">Tiggle</a>
        </div>
        <div class="r_box">
          <a href="" class="r_box_m1">예매가이드</a>
          <a href="" class="r_box_m2">티켓판매제휴</a>
        </div>
      </div>
      <div class="inner_footer">
        <ul class="clear_g">
          <li class="first_child"><a href="https://kakaoent.com/" title="회사소개" target="_blank">회사소개</a></li>
          <li><a href="" title="멜론이용약관">이용약관</a></li>
          <li><a href="#none" onclick="openWinPop2('',845,750); return false;" title="티켓이용약관">티켓이용약관</a></li>
          <li><a href="" title="개인정보처리방침"><strong>개인정보처리방침</strong></a></li>
        </ul>
        <p>
          <span class="first"><strong>티글엔터테인먼트</strong></span><span>서울 동작구 보라매로 87</span><span>공동대표
            :
            티글 일동</span>
          <span class="first">사업자등록번호 : </span>
          <br>
          <span class="first">통신판매업신고번호 : <a href="" class="btn-info" title="사업자정보확인" target="_blank">사업자정보확인</a></span>
          <span class="first">고객센터(평일/주말 09:00~18:00) (유료)</span><br>
          <span class="first">호스팅서비스사업자 : 티글엔터테인먼트</span><span>© tiggle Entertainment Corp.</span>
        </p>
        <!-- //UX-1513 -->

        <div class="safe_service">
          <dl>
            <dt>구매안전 서비스</dt>
            <dd>고객님의 안전거래를 위해 <br> 항상 노력하는 티글이 되겠습니다.</dd>

          </dl>
        </div>
      </div>
      <br><br>
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
#wrap.index {
  font-size: 12px
}

img {
  border: 0 none
}

dl,
li,
ul {
  list-style: none
}

a {
  color: #666;
  text-decoration: none
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
  cursor: pointer
}

.none {
  overflow: hidden;
  font-size: 0 !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  text-indent: -9999px
}

.clear_g {
  display: block;
  overflow: visible;
  width: auto;
  clear: both
}

.clear_g:after {
  display: block;
  visibility: hidden;
  height: 0;
  font-size: 0;
  clear: both;
  content: ''
}

#footer {
  width: 1008px;
  height: auto;
  margin: 0 auto;
  padding: 0
}

.footer_quick_link {
  overflow: hidden;
  padding: 15px 0 14px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #b8b8b8
}

.footer_quick_link .l_box {
  float: left;
  font-size: 0;
  width: 380px
}

/* 로고 작성 시 여기  background: url()에 추가 */
.footer_quick_link .l_box a {
  display: inline-block;
  margin-right: 23px;
  height: 22px;
  background: url() no-repeat 0 0
}

.footer_quick_link .l_box .linking5 {
  background-position: 0 0;
  width: 49px;
  margin-left: 0
}

.footer_quick_link .l_box .linking5:hover {
  background-position: 0 -22px
}

.footer_quick_link .r_box {
  float: right;
  font-size: 0;
  padding-top: 4px;
  width: 360px;
  text-align: right
}

.footer_quick_link .r_box a {
  display: inline-block;
  height: 14px;
  margin-left: 30px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/footer_r_box_170316.png) no-repeat 0 0
}

.footer_quick_link .r_box a.r_box_m1 {
  background-position: 0 0;
  width: 60px
}

.footer_quick_link .r_box a.r_box_m2 {
  background-position: -88px 0;
  width: 71px
}

.footer_quick_link .r_box .r_box_m3 {
  display: inline-block;
  height: 14px;
  width: 137px;
  margin-left: 30px;
  /* background: url(//cdnticket.melon.co.kr/resource/image/web/common/footer_r_box_170316.png) no-repeat -189px 0 */
}

.inner_footer {
  position: relative;
  padding-right: 150px
}

.inner_footer ul {
  padding: 23px 0 16px
}

.inner_footer li {
  float: left
}

.inner_footer li a {
  display: inline-block;
  padding: 0 9px;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0;
  color: #505050;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_gray_line03.png) no-repeat left 0
}

.inner_footer li a:hover {
  color: #333;
  text-decoration: underline
}

.inner_footer li.first_child a {
  background: 0;
  padding-left: 0;
  padding-right: 7px
}

.inner_footer p {
  color: #909090
}

.inner_footer p span {
  display: inline-block;
  padding: 0 13px 4px 13px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/bg_gray_line03.png) no-repeat left 2px;
  letter-spacing: 0
}



.inner_footer p span a.btn-info:hover {
  text-decoration: underline;
  color: #333
}

#footer .ban {
  padding: 29px 0 31px
}

#footer .ban a {
  margin-right: 39px;
  display: inline-block
}

.btn_top_wrap {
  display: none;
  position: fixed;
  bottom: 350px;
  left: 50%;
  margin-left: 514px;
  width: 50px;
  height: 50px;
  z-index: 10
}

.btn_top_wrap .btn_top span {
  display: inline-block;
  text-indent: -9999px
}

.btn_top_wrap a.btn_top:hover {
  background-position: 0 -50px
}

.inner_footer .safe_service {
  position: absolute;
  right: 0;
  top: 23px;
  width: 193px
}

.inner_footer .safe_service dl dt {
  font-weight: 700;
  color: #505050;
  padding-bottom: 4px
}

.inner_footer .safe_service dl dd {
  font-size: 11px;
  color: #909090;
  line-height: 16px
}

.inner_footer .safe_service a {
  display: inline-block;
  margin-top: 2px;
  color: #505050;
  padding-right: 9px;
  background: url(//cdnticket.melon.co.kr/resource/image/web/common/btn_comm.png) no-repeat right 1px
}

.inner_footer .safe_service a:hover {
  color: #000;
  text-decoration: underline
}

@-moz-document url-prefix() {
  .btn_arr_down_28 {
    height: 28px;
    padding: 0 20px 0 0;
    background-position: right -675px
  }

  .btn_arr_down_28 span {
    padding: 6px 0 0 7px;
    background-position: left -675px;
    margin-top: -1px;
    height: 22px
  }

  .btn_arr_down_28:hover span {
    background-position: left -1184px
  }
}
</style>
