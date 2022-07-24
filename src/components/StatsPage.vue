<template>
        <div>
        <v-card  dark elevation="12" class="mt-4 mb-4 ma-12 container">
                <v-card-title class="justify-center orange--text">Game 1</v-card-title>
        <v-card-text>
                <v-container>
                <v-row>
                        <v-col class="orange--text" cols="1.5">
                                <span>Game Duration</span>
                                <p>_______</p>
                                <p v-for="item in matchData" :key="item.info">{{ item.gameDuration }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Game Mode</span>
                                <p>_______</p>
                                <p v-for="item in matchData" :key="item.info">{{ item.gameMode }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Summoner Name</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.summonerName }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Summoner Level</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.summonerLevel }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Team Color</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.teamId }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Champ Names</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.championName }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Champ Levels</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.champLevel }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Summoner Kills</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.kills }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5" >
                                <span>Summoner Deaths</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.deaths }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5" >
                                <span>Summoner Assists</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.assists }}</p>
                        </v-col>
                        <v-col  class="orange--text" cols="1.5">
                                <span>Win or Loss</span>
                                <p class="pt-5">_______</p>
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
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-21ec27d9-df3c-46ef-9dbc-5ff6eefd4bae')
                .then((response) => {
                        this.matchData = response.data
                        console.log(response.data)
                }).catch((error)=>{
                        console.log(error);
                }),
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-21ec27d9-df3c-46ef-9dbc-5ff6eefd4bae')
                .then((response) => {
                        this.participantData = response.data.info.participants
                        console.log(response.data)
                }).catch((error)=>{
                console.log(error);
                })
        } 
}
</script>

<style lang="scss" scoped>
        .container {
                height: 110vh;
        }
</style>