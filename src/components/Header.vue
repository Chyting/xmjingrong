<template>
  <header class="topnav clear">
    <div class="contanier">
      <div class="topnav-left clear">
        <ul>
          <li><a href="#">小米网</a> <span class="sep">|</span></li>
          <li><a href="#">MIUI</a> <span class="sep">|</span></li>
          <li><a href="#">米聊</a><span class="sep">|</span></li>
          <li><a href="#">游戏</a><span class="sep">|</span></li>
          <li><a href="#">多看阅读</a><span class="sep">|</span></li>
          <li><a href="#">云服务</a><span class="sep">|</span></li>
          <li><a href="#" class="m_noborder">小米移动版</a></li>
        </ul>
      </div>
      <div class="topnav-right">
        <ul>
          <li><a href="#">登陆</a><span class="sep">|</span></li>
          <li><a href="#" class="m_noborder">注册</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: {}
};
</script>

<style lang="scss">
li {
  list-style: none;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: white;
  }
}

.topnav {
  background-color: #333333;
  font-size: 12px;
}
.contanier {
  height: 40px;
  width: 1200px;
  margin: 0 auto;
}
.topnav-left {
  float: left;
  height: 40px;
  line-height: 40px;
}
.topnav-left li,
.topnav-right li {
  float: left;
}
.topnav-left li a,
.topnav-right li a {
  font-size: 12px;
}
.topnav li a:hover {
  color: #a9a9a9;
}
.sep {
  display: inline-block;
  color: white;
  margin: 0 0.4em;
}
.topnav-right {
  float: right;
  height: 40px;
  line-height: 40px;
}
.m_noborder {
  border: 0;
}
</style>
