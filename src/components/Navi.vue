<template>
  <nav class="clear">
    <div class="m-headernav clear">
      <h1 class="xm-logo">
        <a><img src="~assets/xm_images/logo_pc-xiaomi.png" /></a>
      </h1>
      <div class="tabs clear">
        <ul>
          <li>
            <router-link :to="{name: 'home'}">
              首页
            </router-link>
          <li class="menu-wrap">
            <router-link :to="{name: 'wealth'}">
              财富
            </router-link>
            <div class="tabs__menu">
              <ul class="tabs__menu--item">
                <li><a href="#">定期活期</a></li>
                <li><a href="#">基金投资</a></li>
              </ul>
            </div>
          </li>

          <li>
            <router-link :to="{name:'loan'}">
              贷款
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'insurance'}">
              保险
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'asset'}">资产</router-link>
          </li>
          <li>
            <router-link :tp="{name:'community'}">社区</router-link>
          </li>
          <li>
            <router-link :to="{name:'client'}">客户端</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navi',
  methods: {
    handleJump(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style lang="scss">
ul li {
  list-style: none;
}
nav {
  height: 100px;
}
.m-headernav {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.m-headernav a {
  float: left;
}
.xm-logo {
  float: left;
  padding: 22px 0 23px;
}
.tabs {
  float: right;
  font-size: 19px;
  margin-top: 39px;
  li {
    float: left;
    padding: 0 21px;
  }
  li:last-child {
    padding-right: 0;
  }
}
.tabs li a {
  color: black;
}
.tabs li a:hover {
  cursor: pointer;
  color: red;
}
.menu-wrap {
  position: relative;
  display: inline-block;
}
.menu-wrap:hover .tabs__menu {
  display: block;
}
.tabs__menu {
  position: absolute;
  left: -66px;
  top: 5px;
  padding: 25px 30px;
  display: none;
  z-index: 1;
}
.tabs__menu--item {
  position: absolute;
  width: 150px;
  border: 1px solid #e5e5e5;
  padding: 10px 0px;
  background-color: #fff;
  border-radius: 2px;
  text-align: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  &::before {
    display: block;
    content: '◆';
    font-size: 23px;
    position: absolute;
    left: 69.5px;
    top: -12.7px;
    color: #e5e5e5;
  }
  &::after {
    display: block;
    content: '◆';
    font-size: 22px;
    position: absolute;
    left: 70px;
    top: -10px;
    color: white;
  }
}
.tabs .tabs__menu--item li {
  display: block;
  float: none;
  padding: 0;
}
.tabs .tabs__menu--item li a {
  padding: 11px 43px;
  color: #434343;
  font-family: 微软雅黑;
  font-size: 16px;
  &:hover {
    color: red;
  }
}
.tabs .tabs__menu--item li a:hover {
  background-color: #f1f3f4;
}
.tabs .menu-wrap a:hover .tabs__menu {
  display: none;
}
</style>
