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
              <Tbar v-for="tblist in tblists" v-bind:tblist='tblist' v-bind:key='tblist.id'></Tbar>
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
              <Jlist v-for="jjlist in jjlists" v-bind:key='jjlist.id' v-bind:jjlist='jjlist'></Jlist>

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
import Jlist from './Jlist/Jlist';
import Tubi from './Tubi/Tubi';
import Tbar from './Tbar/Tbar';
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
        { id: 2, title_b: '5G引领', title_x: '科技强国', tags_b: '#5G', tags_x: '#概念', content: '2020年将是5G手机大年。5G手机生产进度略超预期，此外5G终端换...' },
        { id: 3, title_b: '全球抗疫', title_x: '70亿人健康大事', tags_b: '#生物', tags_x: '#疫苗', content: '2019年底流感强势来袭，紧接着新型冠状病毒感染情况亦牵动人心。生物...' }
      ],
      jjlists: [
        { id: 1, h3: '大成中证红利指数', price_d: '60', price_x: '31%', lilv: '近一年收益率', text_d: '紧密跟踪标的指数', text_x: '' },
        { id: 1, h3: '易方达中小盘混合', price_d: '15', price_x: '33%', lilv: '近一年收益率', text_d: '价值投资', text_x: '长期增长' },
        { id: 1, h3: '大成中证红利指数', price_d: '15', price_x: '31%', lilv: '近一年收益率', text_d: 'QDII', text_x: '互联网红利' }
      ]
    };
  },
  components: {
    List,
    Tubi,
    Tbar,
    Jlist
  }
};
</script>
<style lang="scss" >
@import 'styles/common.scss';
@import './index.scss';
</style>
