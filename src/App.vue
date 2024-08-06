<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
body {
  background: #fff;
  -webkit-text-size-adjust: none;
}

body,
th,
td,
input,
select,
textarea,
button {
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

::-webkit-scrollbar {
  width: 16px;
  height: 10px;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
textarea,
p,
blockquote,
th,
td,
input,
select,
textarea,
button {
  margin: 0;
  padding: 0;
}

dl,
ul,
ol,
menu,
li {
  list-style: none;
}

input,
select,
textarea,
button {
  vertical-align: middle;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}

::-webkit-scrollbar {
  width: 16px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  height: 10px;
  width: 16px;
  background: #e1e1e1;
  -webkit-box-shadow: #e1e1e1;
}

::-webkit-scrollbar-track {
  background: #eee;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}
</style>
