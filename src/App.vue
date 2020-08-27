<template>
  <div id="home">
    <Header />
    <Navi />
    <article>
      <div class="slider">
        <div class="slider-text">
          <h3>小米用科技畅想金融</h3>
        </div>
        <el-button type="primary">下载小米金融APP</el-button>
        <!-- <div class="slider-buttom"><a href="#">下载小米金融APP</a></div> -->
      </div>
      <div class="msgboard">
        <div class="msg-content clear">
          <ul class="link-list">
            <li class="lc">
              <a href="#" id="linkToFinance">
                <div class="dever">
                  <p>财富</p>
                  <p>新手最高领888元</p>
                </div>
                <div class="dec-list">
                  <p class="item">
                    <span>小米官方</span>
                    米家的综合财富平台
                  </p>
                  <p class="item">
                    <span>安全可靠</span>
                    严控资金，多重风控审核
                  </p>
                  <p class="item">
                    <span>优质产品</span>
                    知名合作伙伴，精选理财产品
                  </p>
                  <p class="link-more">
                    <a href="../xm_HTML/wealth.html"><span>了解更多</span></a>
                  </p>
                </div>
              </a>
            </li>
            <li class="dk">
              <a href="#" id="linkToFinance">
                <div class="dever">
                  <p>贷款</p>
                  <p>1分钟放款</p>
                </div>
                <div class="dec-list">
                  <p class="item">
                    <span>借还灵活</span>
                    最高20万，随借随还
                  </p>
                  <p class="item">
                    <span>极速放款</span>
                    最宽1分钟到账
                  </p>
                  <p class="item">
                    <span>超低利率</span>
                    日息2万起，按日计息
                  </p>
                  <p class="link-more">
                    <a href="../xm_HTML/loan.html"><span>了解更多</span></a>
                  </p>
                </div>
              </a>
            </li>
            <li class="bx">
              <a href="#" id="linkToFinance">
                <div class="dever">
                  <p>保险</p>
                  <p>领最高5000元保障</p>
                </div>
                <div class="dec-list">
                  <p class="item">
                    <span>健康险</span>
                    精选产品，全面守护
                  </p>
                  <p class="item">
                    <span>意外险</span>
                    小小投入，十分保障
                  </p>
                  <p class="item">
                    <span>财产险</span>
                    贴心保障，售后无忧
                  </p>
                  <p class="link-more">
                    <a href="../xm_HTML/insurance.html"><span>了解更多</span></a>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
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
@import './assets/scss/reset.css';
@import './assets/scss/common.css';
@import './assets/scss/home.scss';
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
