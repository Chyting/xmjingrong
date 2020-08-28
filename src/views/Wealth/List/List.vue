<template>
  <li>
    <a href="#">
      <h3>{{item.h3}}</h3>
      <div class="price"><span>{{item.price_d}}</span>.{{item.price_x}}</div>
      <p>{{item.lilv}}</p>
      <div class="btm">
        <p class="txt">{{item.text_d}}<i class="deliver"></i>{{item.text_x}}</p>
      </div>
    </a>
  </li>

</template>
<script>
export default {
  name: 'List',
  props: ['item', 'jjlist']
};
</script>
<style lang="scss" >
@import './index.scss';
</style>
