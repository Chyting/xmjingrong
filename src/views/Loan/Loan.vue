<template>
  <div id="loan">
    <div class="loan-slide">
      <div class="loan-content">
        <div class="loan-content__left">
          <p>小米贷款</p>
          <p class="txt">震撼低息 日息2万起</p>
          <div class="btn">下载小米贷款APP</div>

        </div>
        <div class="loan-content__right">
          <div class="login">
            <img src="~assets/xm_images/loan-xmd.png" alt="" />
            <p>震撼低息，一分钟放款</p>
            <div class="loginbtn"><a href="#">点击登录</a></div>
            <!-- <el-button plain class="loginbtn">点击登录</el-button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="loan-items">
      <div class="savemoney">
        <label>省钱</label>
        <div class="text">
          <p>日利率低至0.02%</p>
          <p>随借随还</p>
        </div>
      </div>
      <div class="fast">
        <label>快速</label>
        <div class="text">
          <p>认证快</p>
          <p>极速放款</p>
        </div>
      </div>
      <div class="friendly">
        <label>好用</label>
        <div class="text">
          <p>贷款、分期购</p>
          <p>米粉生活全覆盖</p>
        </div>
      </div>
      <div class="safety">
        <label>安全</label>
        <div class="text">
          <p>全方面风控保障</p>
          <p>费用透明</p>
        </div>
      </div>
    </div>
    <div class="loan-process">
      <div class="loan-process__left">
        <p>简单几步开通额度</p>
        <div class="process-img"></div>
        <div class="process-desc">
          <div class="d1">1.绑定银行卡实名</div>
          <div class="d2">2.上传身份证</div>
          <div class="d3">3.人脸识别</div>
          <div class="d4">4.开通额度</div>
        </div>
        <div class="lic-download u-text-center"><a>下载小米贷款APP&nbsp;&gt;</a></div>
      </div>
      <div class="loan-process__right"></div>
    </div>
    <div class="loan-ques">
      <div class="loan-ques--header">常见问题</div>
      <div class="loan-ques--line"></div>
      <div class="loan-ques--content">
        <p class="question">如何获得贷款额度？</p>
        <p class="answer">若您符合贷款申请条件，打开小米贷款app或小米金融app，确认授权信息后，即可看到贷款额度。 若您的资料不满足我们的授信条件，您可以提交实名认证或开启更多的服务，您将有机会获得贷款额度。</p>
        <p class="question">小米贷款利息计算</p>
        <div class="answer">
          <p>小米贷款利息会在每个月还款日当天系统自动扣取。 每日利率计算公式=未还本金*日利率（小米贷款日利率会根据账户及个人信用情况进行综合评估，请以您页面显示为准）。</p>
          <p>例如：您的日利率为万分之五，贷款10000元，则每日利息为5元。 若您已经有本金或者利息的逾期，逾期部分的本金或利息的逾期利率为正常贷款利率的1.5倍。</p>
        </div>
        <p class="question">什么是小米分期？</p>
        <p class="answer">
          小米分期是小米公司旗下小米贷款推出的一款先享受产品，再分期付款的服务。支持符合分期条件的用户在小米网分期购买商品。 哪些用户可以使用小米分期？
          小米分期服务目前仅向部分用户内测开放，用户登录小米贷款app或小米金融app，切换到贷款页面，点击激活额度，就有机会获得分期额度，激活后您在小米网购物即可使用分期服务。我们会逐步开发服务，暂时没有额度的用户，请耐心等待。
        </p>
        <p class="question">分期购物费率如何？</p>
        <p class="answer">小米分期支持3/6/12期支付。小米分期3期总手续率为2.22%，6期总手续费率为3.9%，12期总手续费率为7.2%。正常还款时您每月仅需支付当期的本金和手续费即可，提前还款会对提前还的部分加收总手续费（以分期数为准）。</p>
      </div>
    </div>
    <div class="loan-official">
      <div class="loan-official-content">
        <div class="img-weibo"></div>
        <div class="info">
          <i class="weibo-logo"></i>
          <span>官方微博</span>
          <p>关注了解我们最新活动信息</p>
        </div>
        <div class="img-weixin"></div>
        <div class="info">
          <i class="weixin-logo"></i>
          <span>官方微信</span>
          <p>关注了解更多业务详情</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loan'
};
</script>
<style lang="scss">
@import './index.scss';
</style>