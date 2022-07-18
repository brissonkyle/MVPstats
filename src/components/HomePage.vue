<template>
<v-img src="src\assets\west-studio-weststudio-lol-splash-09.jpg">
  <v-container>
    <v-card>
      <v-toolbar 
    dark
    >
    <v-spacer></v-spacer>
      <v-toolbar-title class="orange--text">MVP STATS</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs centered>
          <v-tabs-slider slider-size="2" color="red"></v-tabs-slider>
          <v-tab class="orange--text">
            Home
          </v-tab>
          <v-tab class="orange--text">
            Login
          </v-tab>
          <v-tab class="orange--text">
            Signup
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    </v-card>
    <v-card dark class="mt-6" elevation="8">
      <v-card-title class="orange--text">Welcome To MVP Stats</v-card-title>
      <v-text-field 
      v-model="summonerName"
      outlined
      label="Search a Summoner Name..."
      >
      </v-text-field>
      <v-btn @click="handleUserPuuid" dark>Set Name</v-btn>
      <v-btn dark @click="handleMatchId">See Stats</v-btn>
    </v-card>
  </v-container>
</v-img>
</template>

<script>
import { mapActions } from 'pinia'
import { useApiStore } from '@/stores/apistore'

  export default {
  components: { 
    
  },
    name: 'HelloWorld',

    
    data: () => ({
      summonerName : ''
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
