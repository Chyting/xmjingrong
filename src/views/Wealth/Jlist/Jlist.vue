<template>
  <li>
    <a href="#">
      <h3>{{jjlist.h3}}</h3>
      <div class="price"><span>{{jjlist.price_d}}</span>.{{jjlist.price_x}}</div>
      <p>{{jjlist.lilv}}</p>
      <div class="btm">
        <p class="txt">{{jjlist.text_d}}<i class="deliver"></i>{{jjlist.text_x}}</p>
      </div>
    </a>
  </li>
</template>
<script>
export default {
  name: 'Jlist',
  props: ['jjlist']
};
</script>
<style lang="scss" >
@import './index.scss';
</style>
