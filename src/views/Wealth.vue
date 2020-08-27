<template>
  <div id="wealth">
    <Header />
    <Navi />
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Navi from '../components/Navi.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Wealth',
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
<style lang="scss"></style>
