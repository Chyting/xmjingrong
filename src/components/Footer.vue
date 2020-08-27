<template>
  <footer>
    <div class="helpmsg">
      <div class="help-l">
        <i class="icon"></i>
        <ul class="links">
          <li><a href="#" class="res">帮助中心</a></li>
          <li><a href="#" class="res">关注我们</a></li>
          <li><a href="#">新浪微博</a></li>
          <br />
        </ul>
        <ul class="copright">
          <li><span class="res">Copyright © mi.com 京ICP备10046444号-7</span></li>
          <li><span class="res">京公网安备 11010802020134号</span></li>
          <li><span>京ICP证110507号</span></li>
        </ul>
      </div>
      <div class="help-r">
        <ul class="tel">
          <li class="help-r--msg">客服电话</li>
          <li class="tel-num">400-100-3399</li>
          <li class="help-r--msg">周一至周日 9:00-19:00(仅收市话费)</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
};
</script>

<style lang="scss">
footer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.helpmsg {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  margin-top: 45px;
}
.helpmsg .help-l {
  float: left;
}
.helpmsg .help-l i {
  position: absolute;
  background-image: url(../assets/xm_images/footer_icon-cf1f052c34.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  width: 46px;
  height: 46px;
}
.helpmsg .help-l .copright {
  margin: 10px 0;
}
.helpmsg .help-l .links,
.helpmsg .help-l .copright {
  margin-left: 70px;
}
.helpmsg .help-l .links li,
.helpmsg .help-l .copright li {
  float: left;
}
.helpmsg .help-l .links li a {
  color: #6d6d6d;
  font-size: 16px;
  position: relative;
  margin-right: 17px;
}
.helpmsg .help-l .copright li {
  color: #6d6d6d;
  font-size: 11px;
  position: relative;
  margin-right: 17px;
}
.helpmsg .help-l .links li .res:after {
  content: '';
  position: absolute;
  top: 5px;
  right: -2px;
  width: 1px;
  height: 13px;
  background-color: #979797;
  margin-right: -7px;
}
.helpmsg .help-l .copright li .res:after {
  content: '';
  position: absolute;
  top: 2px;
  right: -2px;
  width: 1px;
  height: 13px;
  background-color: #979797;
  margin-right: -7px;
}
.helpmsg .help-r {
  float: right;
}
.helpmsg .help-r li {
  margin-bottom: 4px;
}
.helpmsg .help-r .help-r--msg {
  font-size: 13px;
  color: black;
}
.helpmsg .help-r .tel-num {
  font-size: 22px;
  color: #e84519;
  font-family: 微软雅黑;
}
</style>
