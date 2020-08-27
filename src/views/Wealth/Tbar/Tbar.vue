<template>
  <li class="theme">
    <a href="#">
      <div class="invest_bgc" v-bind:class="tb_bgc[i]">
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
</template>
<script>
export default {
  name: 'Tbar',
  props: ['tblist'],
  data() {
    return {
      tb_bgc: ['bgc_1', 'bgc_2', 'bgc_3']
    };
  }
};
</script>
<style lang="scss">
</style>