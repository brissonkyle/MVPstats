<template>
  <v-app class="bg">
    <HeaderComp/>
    <router-view/>
    <FooterComp/>
  </v-app>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',

  components: {
    FooterComp,
    HeaderComp
    
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .bg {
    background-repeat: no-repeat;
    background: url('@/assets/west-studio-weststudio-lol-splash-09.jpg');
    background-size: 100%;
  }
</style>