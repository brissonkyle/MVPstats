<template>
<div>
  <v-container class="container">
    <v-card dark class="mt-10" elevation="8">
        <v-card-title class="orange--text justify-center"><h1>Welcome To MVP Stats</h1></v-card-title>
        <v-card-subtitle class="orange--text text-center mt-1">A. PLACE. TO. IMPROVE. THROUGH. STAT. TRACKING.</v-card-subtitle>
        <v-row align="center">
        <v-img class="ml-6 mr-6 mb-6"
        width="50px"
        height="200px"
        src="https://cdnb.artstation.com/p/assets/images/images/023/263/365/large/west-studio-fantasy-env-color-8jan2020.jpg?1578626657">
        </v-img>
        </v-row>
        <v-text-field v-on:mouseout="nameAlert = true" 
        class="orange--text text-center"
        v-model="summonerName"
        outlined
        label="Search a Summoner Name..."
        >
        </v-text-field>
        <v-alert dense type="success" v-model="notify" dismissible>Name Set.. To Continue Click See Stats</v-alert>
        <v-btn class="orange--text" v-on:click="notify = true" @click="handleUserPuuid" dark>Set Name</v-btn>
        <v-btn class="orange--text" dark @click="handleMatchId">See Stats</v-btn>
      </v-card>
    </v-container>
</div>
</template>

<script>
import { mapActions } from 'pinia'
import { useApiStore } from '@/stores/apistore'

  export default {
  components: { 
    
  },
    name: 'HelloWorld',

    
    data: () => ({
      summonerName : '',
      notify : false,
    }),

    methods: {
      ...mapActions(useApiStore, ['getUserPuuid']),
      handleUserPuuid() {
      this.getUserPuuid( this.summonerName );
      },
      ...mapActions(useApiStore, ['getMatchId']),
      handleMatchId() {
        this.getMatchId();
      }
    },
  }
</script>

<style  scoped>
  .container {
    height: 110vh;
  }
</style>