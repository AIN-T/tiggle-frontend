<template>
  <div id="container" class="container login">
    <header></header>
    <div class="loginWrap">
      <div class="loginLogo">
        <router-link to="/">
          <h1 class="logo">
            <span>interpark</span>
          </h1>
        </router-link>
      </div>
      <form
        id="loginFrm"
        name="loginFrm"
        method="post"
        action="/login/submit"
        data-onsubmit="return false;"
        onsubmit="return false;"
        autocomplete="off"
        data-method="ajax"
      >
        <div class="loginInner">
          <div class="loginForm">
            <div class="inputBox">
              <div class="inputStyle inputId">
                <label>
                  <input
                    value=""
                    autofocus=""
                    v-model="member.email"
                    type="email"
                    class="inputText id"
                    name="userId"
                    id="userId"
                    placeholder="아이디"
                  />
                  <span class="focusLine"></span>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        stroke="#999"
                        stroke-linecap="round"
                        d="M7.789 9.867A4.444 4.444 0 0 1 12 4a4.444 4.444 0 1 1 0 8.885c-.947 0-1.945-.167-2.667-.672"
                      ></path>
                      <path
                        fill="#999"
                        d="M9.489 12.685a.5.5 0 1 0-.311-.95l.31.95Zm10.378 5.822.492-.088-.492.088ZM5.5 20.5h13v-1h-13v1Zm-.885-1.912c.463-2.81 2.293-5.058 4.874-5.903l-.311-.95c-2.965.97-5.031 3.545-5.55 6.69l.987.163Zm9.671-5.903c2.597.85 4.584 3.113 5.089 5.911l.984-.177c-.57-3.156-2.811-5.718-5.762-6.684l-.31.95ZM5.5 19.5c-.58 0-.96-.456-.885-.912l-.987-.163C3.434 19.603 4.423 20.5 5.5 20.5v-1Zm13 1c1.075 0 2.073-.898 1.86-2.081l-.985.177c.08.448-.293.904-.875.904v1Z"
                      ></path>
                    </svg>
                  </i>
                  <button type="button" class="inputBtn btnDel">
                    <span class="blind">삭제</span>
                  </button>
                </label>
              </div>
              <div class="inputStyle inputPw">
                <label>
                  <input
                    type="password"
                    v-model="member.password"
                    class="inputText pw"
                    name="userPwd"
                    id="userPwd"
                    placeholder="비밀번호"
                  />
                  <span class="focusLine"></span>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        stroke="#999"
                        stroke-linecap="round"
                        d="M19.5 15.6V11A1.5 1.5 0 0 0 18 9.5H6A1.5 1.5 0 0 0 4.5 11v8A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-.75"
                      ></path>
                      <circle cx="12" cy="14" r="1" fill="#999"></circle>
                      <path
                        fill="#999"
                        d="M11.5 14h1l.5 3h-2l.5-3Z"
                        class="pathFill"
                      ></path>
                      <path
                        stroke="#999"
                        d="M16.5 9.5V8a4.5 4.5 0 0 0-9 0v1.5"
                      ></path>
                    </svg>
                  </i>
                  <button type="button" class="inputBtn btnShowToggle">
                    <span class="blind">비밀번호 노출상태 변경버튼</span>
                  </button>
                </label>
              </div>
            </div>
            <div class="errorMessage">
              <div class="message"></div>
            </div>
          </div>
          <div class="signinStay">
            <div class="checkbox">
              <input type="checkbox" id="saveSess" name="saveSess" value="N" />
              <label for="saveSess">로그인 상태 유지</label>
            </div>
          </div>
          <div class="loginButtonBox">
            <button
              type="button"
              class="loginBtn"
              id="btn_login"
              @click="login"
            >
              <span>로그인</span>
            </button>
          </div>
          <div class="findList">
            <ul>
              <li>
                <a id="findId" class="findId" href="#">아이디 찾기</a>
              </li>
              <li>
                <a id="findPwd" href="#">비밀번호 찾기</a>
              </li>
              <li>
                <a id="join" href="#">회원가입</a>
              </li>
            </ul>
          </div>
          <div class="snsLogin">
            <ul>
              <li id="kakao_li">
                <a href="#" class="kakao" id="openid_kakao">
                  <span>카카오톡</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="nonMember"></div>
        </div>
      </form>
    </div>
    <div class="layerContainer" id="findIdLayer">
      <div class="layer">
        <p class="layerTitle">
          <b>아이디 또는 비밀번호가 틀려<br />로그인 할 수 없어요.</b>
        </p>
        <p class="layerText">먼저 계정을 찾아주세요.</p>
        <div class="btn">
          <button type="button" class="btnClose">취소</button>
          <a href="#" class="btnFind findId">계정 찾기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMemberStore } from '@/stores/useMemberStore';

const memberStore = useMemberStore();
const router = useRouter();
const route = useRoute();
const member = ref({ email: null, password: null });

const login = async () => {
  const result = await memberStore.login(member.value);

  if (result) {
    const redirectPath = route.query.redirect || '/';

    if (redirectPath == '/seat') {
      window.close();
      return;
    }

    router.push(redirectPath);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
i {
  font-style: normal;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  text-decoration: none;
}
input {
  vertical-align: middle;
}
input {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
input[type='checkbox'] {
  -webkit-appearance: none;
  appearance: none;
}
button,
input {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  border: 0;
  border-radius: 0;
  outline: 0;
  text-decoration: none;
  -webkit-appearance: none;
  appearance: none;
  background: 0 0;
  padding: 0;
}
button {
  cursor: pointer;
}
input[type='text']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type='text']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

.container * {
  line-height: 1.5;
  font-family: Pretendard, Pretendard, -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
}
.container .blind {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  margin: -0.1rem;
  width: 0.1rem;
  height: 0.1rem;
}
.login header {
  display: flex;
  height: 5rem;
  padding: 0 0.8rem;
  align-items: center;
  justify-content: right;
}
.login header .btnClose {
  width: 4rem;
  height: 4rem;
  background: url(//openimage.interpark.com/UI/login/btn_close.svg) 0 0
    no-repeat;
}
.loginLogo {
  margin-top: 1.6rem;
  text-align: center;
}
.loginLogo h1 {
  display: inline-block;
  width: 15.6rem;
  height: 4.2rem;
  background: url(../../assets/tiguri.png) 0 0 no-repeat;
  background-size: 100%;
}
.loginLogo h1 span {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
.loginInner {
  margin-top: 6.8rem;
  padding: 0 2rem 2.5rem;
}
.loginInner .loginForm .inputBox {
  width: 100%;
  margin: 0 auto;
  border: 0.1rem solid #ddd;
  border-radius: 1.2rem;
  box-sizing: border-box;
  background-color: #fff;
}
.loginInner .loginForm .inputBox .inputStyle {
  position: relative;
  display: block;
  padding: 1.5rem 1.4rem;
  box-sizing: border-box;
}
.loginInner .loginForm .inputBox .inputStyle + .inputStyle {
  border-top: 0.1rem solid #ddd;
}
.loginInner .loginForm .inputBox .inputStyle label {
  display: flex;
}
.loginInner .loginForm .inputBox .inputStyle i {
  order: 1;
  width: 2.4rem;
  height: 2.4rem;
}
.loginInner .loginForm .inputBox .inputStyle .inputText {
  position: relative;
  display: block;
  width: calc(100% - 4rem - 2.4rem);
  height: 2.4rem;
  margin-left: 1.2rem;
  font-size: 1.5rem;
  color: #000;
  order: 2;
}
.loginInner .loginForm .inputBox .inputStyle .inputText:focus + .focusLine {
  display: block;
  position: absolute;
  left: -0.1rem;
  right: 0;
  top: -0.1rem;
  bottom: 0;
  width: 100%;
  height: 5.4rem;
  border: 0.1rem solid #666;
  z-index: 1;
}
.loginInner .loginForm .inputBox .inputStyle .inputText.id:focus + .focusLine {
  border-radius: 1.2rem 1.2rem 0 0;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.id:focus:not(:placeholder-shown)
  ~ .btnDel {
  opacity: 1;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.id:focus
  ~ i
  path:first-child {
  stroke: #1c1c1e;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.id:focus
  ~ i
  path:last-child {
  fill: #1c1c1e;
}
.loginInner .loginForm .inputBox .inputStyle .inputText.pw:focus + .focusLine {
  border-radius: 0 0 1.2rem 1.2rem;
}
.loginInner .loginForm .inputBox .inputStyle .inputText.pw:focus ~ i path {
  stroke: #1c1c1e;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.pw:focus
  ~ i
  path.pathFill {
  stroke: transparent;
  fill: #1c1c1e;
}
.loginInner .loginForm .inputBox .inputStyle .inputText.pw:focus ~ i circle {
  fill: #1c1c1e;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.pw[type='password']
  ~ .btnShowToggle {
  background: url(//openimage.interpark.com/UI/login/icon_eye_on.svg) center
    center no-repeat;
}
.loginInner
  .loginForm
  .inputBox
  .inputStyle
  .inputText.pw[type='text']
  ~ .btnShowToggle {
  background: url(//openimage.interpark.com/UI/login/icon_eye_off.svg) center
    center no-repeat;
}
.loginInner .loginForm .inputBox .inputStyle .inputText::placeholder {
  color: #999;
}
.loginInner .loginForm .errorMessage {
  margin-top: 1.2rem;
}
.loginInner .loginForm .errorMessage .message {
  font-size: 1.3rem;
  color: #ff322e;
  word-break: keep-all;
}
.loginInner .loginForm .inputBtn {
  position: absolute;
  top: 1.7rem;
  right: 2rem;
  z-index: 1;
  width: 2rem;
  height: 2rem;
}
.loginInner .loginForm .inputBtn:focus {
  outline: auto;
}
.loginInner .loginForm .inputBtn.btnDel {
  opacity: 0;
  background: url(//openimage.interpark.com/UI/login/mobile/input_del.svg)
    center center no-repeat;
}
.loginInner .loginForm .inputBtn.btnDel:focus {
  opacity: 1;
}
.loginInner .signinStay {
  position: relative;
  display: flex;
  margin-top: 1.6rem;
}
.loginInner .signinStay .checkbox {
  position: relative;
  display: inline-block;
}
.loginInner .signinStay .checkbox input[type='checkbox'] {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: none;
  opacity: 0.00001;
}
.loginInner .signinStay .checkbox input[type='checkbox']:checked + label {
  background: url(//openimage.interpark.com/UI/login/mobile/icon_checkbox_on.svg)
    no-repeat;
  background-size: 2.1rem 2.1rem;
}
.loginInner .signinStay .checkbox label {
  display: inline-block;
  height: 2.1rem;
  padding-left: 2.8rem;
  font-size: 1.3rem;
  color: #1c1c1e;
  background: url(//openimage.interpark.com/UI/login/mobile/icon_checkbox_off.svg)
    no-repeat;
  background-size: 2.1rem 2.1rem;
}
.loginInner .signinStay .checkbox label:focus {
  outline: auto;
}
.loginInner .loginButtonBox {
  margin-top: 2rem;
}
.loginInner .loginButtonBox .loginBtn {
  display: block;
  width: 100%;
  height: 5.2rem;
  border-radius: 1.2rem;
  background-color: #1769ff;
}
.loginInner .loginButtonBox .loginBtn:disabled {
  background-color: #ddd;
}
.loginInner .loginButtonBox .loginBtn:focus {
  outline: auto;
}
.loginInner .loginButtonBox .loginBtn span {
  font-weight: 700;
  font-size: 1.7rem;
  color: #fff;
}
.loginInner .findList {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3.2rem;
}
.loginInner .findList ul {
  font-size: 0;
}
.loginInner .findList li {
  position: relative;
  display: inline-block;
  padding: 0 1.2rem;
  box-sizing: border-box;
}
.loginInner .findList li + li:before {
  content: '';
  position: absolute;
  top: 0.4rem;
  left: 0;
  width: 0.1rem;
  height: 1.2rem;
  background-color: #ddd;
}
.loginInner .findList li a {
  font-size: 1.3rem;
  color: #666;
}
.loginInner .findList li:last-child a {
  color: #1769ff;
}
.loginInner .snsLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4.6rem 0 5.2rem;
}
.loginInner .snsLogin ul {
  font-size: 0;
}
.loginInner .snsLogin li {
  position: relative;
  display: inline-block;
  padding: 0 1rem;
  box-sizing: border-box;
}
.loginInner .snsLogin li a {
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;
  box-sizing: border-box;
}
.loginInner .snsLogin li a.kakao {
  background: url(//openimage.interpark.com/UI/login/mobile/icon_kakao.svg)
    no-repeat center #fedd35;
}
.loginInner .nonMember {
  text-align: center;
}
.loginInner .nonMember a {
  text-decoration: underline;
  color: #666;
  font-size: 1.3rem;
}
.layerContainer {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.layerContainer .layer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 32rem;
  padding: 2.8rem 1.6rem 2rem;
  border-radius: 1.6rem;
  background-color: #fff;
  box-sizing: border-box;
}
.layerContainer .layerTitle {
  margin-bottom: 0.8rem;
  font-weight: 700;
  color: #1c1c1e;
  font-size: 2rem;
}
.layerContainer .layerText {
  font-size: 1.5rem;
  color: #666;
}
.layerContainer .layer .btn {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.layerContainer .layer .btn a,
.layerContainer .layer .btn button {
  width: calc(50% - 0.4rem);
  height: 5.2rem;
  line-height: 5.2rem;
  text-align: center;
  border-radius: 1.2rem;
  font-size: 1.7rem;
  font-weight: 700;
}
.layerContainer .layer .btnClose {
  background-color: #fff;
  border: 0.1rem solid #ddd;
  color: #1c1c1e;
}
.layerContainer .layer .btnFind {
  margin-left: 0.8rem;
  background-color: #1769ff;
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .login header {
    display: none;
  }
  .loginWrap {
    max-width: 40rem;
    margin: 0 auto;
  }
  .loginLogo {
    margin-top: 6.8rem;
  }
  .loginLogo h1 {
    width: 18.6rem;
    height: 5rem;
  }
  .loginInner {
    padding: 0 0 2.5rem;
  }
}
@media screen and (max-width: 320px) {
  .layerContainer .layer {
    width: calc(100% - 1rem);
  }
}
</style>
