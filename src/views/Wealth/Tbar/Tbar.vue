<template>
  <li class="theme">
    <a href="#">
      <div class="invest_bgc" v-bind:class="this.tb_bgc[tblist.id-1]">
        <div class="cover"></div>
        <div class="wrap">
          <p class="title">{{tblist.title_b}}<br />{{tblist.title_x}}</p>
          <p class="tags">
            <span>{{tblist.tags_b}}&nbsp;{{tblist.tags_x}}</span>
          </p>
        </div>
      </div>
      <div class="invest_info">
        <p>{{tblist.content}}</p>
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
@import './index.scss';
</style>