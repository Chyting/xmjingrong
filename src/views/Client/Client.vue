<template>
  <div id="client">
    <article>
      <div class="container">
        <div class="client-banner"></div>
        <!-- <ul class="client-btmbar">
          <li class="bar1">
            <div class="avatar"></div>
          </li>
          <li class="bar2">
            <div class="avatar"></div>
          </li>
          <li class="bar3">
            <div class="avatar"></div>
          </li>
          
        </ul> -->
        <Tubi />
        <div class="client-info">
          <div class="content"></div>
        </div>
        <div class="client-pub">
          <div class="content">
            <a href="#" class="link">新浪微博</a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import Tubi from './Tubi/Tubi';
export default {
  name: 'Client',
  components: {
    Tubi
  }
};
</script>
<style lang="scss">
@import './index.scss';
</style>