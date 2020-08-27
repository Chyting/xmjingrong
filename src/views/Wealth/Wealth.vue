<template>
  <div id="wealth">
    <div class="wealth-item">
      <article>
        <div class="wealth-section">
          <div class="slide"></div>
          <ul class="wealth-list clear content-list">
            <div id="hqlist">
              <List v-for="item in list" v-bind:key='item.id' v-bind:item='item'></List>
              <li class="more">
                <div class="item-dw"></div>
                <div class="item-link">
                  <p class="title com">定期活期理财</p>
                  <a href="#" class="btn-more com"></a>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div class="wealth-jj">
          <div class="slide"></div>
          <ul class="wealth-list clear content-list">
            <em class="themeList invest_msg">
              <li class="theme">
                <a href="#">
                  <div class="bgc_1 invest_bgc">
                    <div class="cover"></div>
                    <div class="wrap">
                      <p class="title">紧跟趋势<br />刚需造就吸金板块</p>
                      <p class="tags">
                        <span>#内需 &nbsp;#大消费</span>
                      </p>
                    </div>
                  </div>
                  <div class="invest_info">
                    <p>近期国内消费复苏超出预期，3月底中央政治局强调要有效扩大内需，4月社...</p>
                  </div>
                </a>
              </li>
              <li class="theme">
                <a href="#">
                  <div class="invest_bgc bgc_2">
                    <div class="cover"></div>
                    <div class="wrap">
                      <p class="title">5G引领<br />科技强国</p>
                      <p class="tags">
                        <span>#5G &nbsp;#概念</span>
                      </p>
                    </div>
                  </div>
                  <div class="invest_info">
                    <p>2020年将是5G手机大年。5G手机生产进度略超预期，此外5G终端换...</p>
                  </div>
                </a>
              </li>
              <li class="theme">
                <a href="#">
                  <div class="invest_bgc bgc_3">
                    <div class="cover"></div>
                    <div class="wrap">
                      <p class="title">全球抗疫<br />70亿人健康大事</p>
                      <p class="tags">
                        <span>#生物 &nbsp;#疫苗</span>
                      </p>
                    </div>
                  </div>
                  <div class="invest_info">
                    <p>2019年底流感强势来袭，紧接着新型冠状病毒感染情况亦牵动人心。生物...</p>
                  </div>
                </a>
              </li>
            </em>
            <em class="goldList">
              <li class="theme">
                <a href="#">
                  <div class="bg"></div>
                  <div class="gold">
                    <div class="price"><span>436</span><small>元</small></div>
                    <p class="dec">昨日金价</p>
                  </div>
                </a>
              </li>
            </em>
            <em class="jjList">
              <li>
                <a href="#">
                  <h3>大成中证红利指数</h3>
                  <div class="price"><span>15</span>.31%</div>
                  <p>近一年收益率</p>
                  <div class="btm">
                    <p>紧密跟踪标的指数</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>易方达中小盘混合</h3>
                  <div class="price"><span>60</span>.33%</div>
                  <p>近一年收益率</p>
                  <div class="btm">
                    <p class="txt">价值投资<i class="deliver"></i>长期增长</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>交银中证海外中国互联网指数(QDII)</h3>
                  <div class="price"><span>79</span>.20%</div>
                  <p>近一年收益率</p>
                  <div class="btm">
                    <p class="txt">QDII<i class="deliver"></i>互联网红利</p>
                  </div>
                </a>
              </li>
            </em>
            <li class="more">
              <div class="item-dw"></div>
              <div class="item-link">
                <p class="title com">定期活期理财</p>
                <a href="#" class="btn-more com"></a>
              </div>
            </li>
          </ul>
        </div>
        <Tubi />
      </article>
    </div>

  </div>
</template>
<script>
import List from './List/List';
import Tubi from './Tubi/Tubi';
export default {
  name: 'Wealth',
  data() {
    return {
      list: [
        { id: 1, h3: '金慧存季季盈', price_d: 4, price_x: '40%', lilv: '每期返息收益率', text_d: '金城银行', text_x: '按季派息' },
        { id: 2, h3: '金慧存年年盈', price_d: 4, price_x: '80%', lilv: '每期返息收益率', text_d: '金城银行', text_x: '按季派息' },
        { id: 3, h3: '蓝贝贝', price_d: 5, price_x: '00%', lilv: '储蓄存款年化利率', text_d: '随存随取3.7%', text_x: '按季派息' },
        { id: 4, h3: '智慧存一月', price_d: 4, price_x: '30%', lilv: '每期返息收益率', text_d: '振兴银行', text_x: '按期派息' },
        { id: 5, h3: '心动存', price_d: 3, price_x: '90%', lilv: '最新支取收益率', text_d: '按期派息', text_x: '按季派息' }
      ],
      tblists: [
        { id: 1, title_b: '紧跟趋势', title_x: '刚需造就吸金板块', tags_b: '内需', tags_x: '大消费', content: '近期国内消费复苏超出预期，3月底中央政治局强调要有效扩大内需，4月社...' },
        { id: 1, title_b: '紧跟趋势', title_x: '刚需造就吸金板块', tags_b: '内需', tags_x: '大消费', content: '近期国内消费复苏超出预期，3月底中央政治局强调要有效扩大内需，4月社...' },
        { id: 1, title_b: '紧跟趋势', title_x: '刚需造就吸金板块', tags_b: '内需', tags_x: '大消费', content: '近期国内消费复苏超出预期，3月底中央政治局强调要有效扩大内需，4月社...' }
      ]
    };
  },
  components: {
    List,
    Tubi
  }
};
</script>
<style lang="scss" >
@import 'styles/common.scss';
@import './index.scss';
</style>
