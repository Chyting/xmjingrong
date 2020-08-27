<template>
  <div id="home">
    <Header />
    <Navi />
    <router-view />
    <Footer />
    <div class="erweima_bgc clear">
      <div class="erweima">
        <p class="sjd">小米金融手机端</p>
        <img src="https://fundres.mipay.com/res/pc/images/index_qrcode-b5faf81747.png" alt="二维码" />
        <p class="f">iPhone & Android</p>
        <p class="s">扫码立即下载</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navi from './components/Navi.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Header,
    Navi,
    Footer
  }
};
</script>

<style lang="scss">
@import 'src/styles/reset.scss';
@import 'src/styles/common.scss';
@import 'src/views/Home/index';
.slider .el-button--primary {
  padding: 18px 30px;
  background-color: #f93f2b;
  border-color: #f93f2b;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  position: absolute;
  left: 50%;
  margin-left: -131.5px;
  margin-top: 40px;
  &:hover {
    background-color: #fd5f4e;
    border-color: #fd5f4e;
  }
  &:active {
    background-color: #fd5f4e;
    border-color: #fd5f4e;
  }
  &:focus {
    background-color: #fd5f4e;
    border-color: #fd5f4e;
  }
}
</style>