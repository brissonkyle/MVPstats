<template>
    <div>
        <v-container>
            <h2>Game Duration</h2>
            <p v-for="item in matchData" :key="item.info">{{ item.gameDuration }}</p>
            <h2>Game Mode</h2>
            <p v-for="item in matchData" :key="item.info">{{ item.gameMode }}</p>
            <h2>Champ Names</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.championName }}</p>
            <h2>Champ Levels</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.champLevel }}</p>
            <h2>Gold Earned</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.goldEarned }}</p>
            <h2>Gold Spent</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.goldSpent }}</p>
            <h2>Summoner Kills</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.kills }}</p>
            <h2>Summoner Deaths</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.deaths }}</p>
            <h2>Summoner Assists</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.assists }}</p>
            <h2>Win or Loss</h2>
            <p v-for="item in participantData" :key="item.participant">{{ item.win }}</p>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
    export default {

        data() {
            return {
                matchData : undefined,
                participantData : undefined
            }
        },

        methods: {
            
            
        },
        mounted () {
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-d892e6e6-5031-4fc5-b5cb-fecbebe5ca8c')
                .then((response) => {
                    this.matchData = response.data
                    console.log(response.data)
                }),
                axios.get('https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4369008847?api_key=RGAPI-d892e6e6-5031-4fc5-b5cb-fecbebe5ca8c')
                .then((response) => {
                    this.participantData = response.data.info.participants
                    console.log(response.data.info.participants)
                })
            } 
    }
</script>

<style lang="scss" scoped>

</style>