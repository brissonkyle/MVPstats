<template>
        <div>
        <v-card dark elevation="12" class="mt-4 mb-4 ma-12">
                <v-card-title class="justify-center orange--text">Game</v-card-title>
        <v-card-text>
                <v-container>
                <v-row>
                        <v-col class="orange--text" cols="3">
                                <h2>Game Duration</h2>
                                <p v-for="item in matchData" :key="item.info">{{ item.gameDuration }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Game Mode</h2>
                                <p v-for="item in matchData" :key="item.info">{{ item.gameMode }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Summoner Name</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.summonerName }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Summoner Level</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.summonerLevel }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Team</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.teamId }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Champ Names</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.championName }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Champ Levels</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.champLevel }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Gold Earned</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.goldEarned }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Gold Spent</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.goldSpent }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3">
                                <h2>Summoner Kills</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.kills }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3" >
                                <h2>Summoner Deaths</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.deaths }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="3" >
                                <h2>Summoner Assists</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.assists }}</p>
                        </v-col>
                        <v-col  class="orange--text" cols="3">
                                <h2>Win or Loss</h2>
                                <p v-for="item in participantData" :key="item.participant">{{ item.win }}</p>
                        </v-col>
                </v-row>
                </v-container>
                </v-card-text>
        </v-card>
        </div>
</template>

<script>
import axios from 'axios'
    export default {

        data: () => ({
        matchData : [],
        participantData : []

        }),

        methods: {

        },
        mounted () {
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-55c70244-a116-40c6-af03-1b3d89f0c066')
                .then((response) => {
                        this.matchData = response.data
                        console.log(response.data)
                }).catch((error)=>{
                        console.log(error);
                }),
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-55c70244-a116-40c6-af03-1b3d89f0c066')
                .then((response) => {
                        this.participantData = response.data.info.participants
                        console.log(response.data.info.participants)
                }).catch((error)=>{
                console.log(error);
                })
        } 
}
</script>

<style lang="scss" scoped>
        
</style>