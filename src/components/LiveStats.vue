<template>
    <div>
        <v-card  dark elevation="12" class="mt-4 mb-4 ma-12">
                <v-card-title class="justify-center orange--text">Live Game</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="orange--text" cols="1.5">
                            <span>Game Mode</span>
                            <p>_______</p>
                            <p v-for="item in liveData" :key="item.data">{{ item.gameMode }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                            <span>Game Length</span>
                            <p>_______</p>
                            <p v-for="item in liveData" :key="item.data">{{ item.gameLength }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                            <span>Game Type</span>
                            <p>_______</p>
                            <p v-for="item in liveData" :key="item.data">{{ item.gameType }}</p>
                        </v-col>
                        <v-col class="orange--text" cols="1.5">
                                <span>Summoner Name</span>
                                <p>_______</p>
                                <p v-for="item in participantData" :key="item.participant">{{ item.summonerName }}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

// NEED AN API KEY FROM RIOT
import axios from 'axios'

    export default {
        name : 'LiveStats',

        data :() => ({
            liveData: [{}],
            participantData : [{}]
        }),

        methods: {
            async userLiveStats(){
                axios.request({
                    url : 'https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/zwsZ1FUmT-xjnz-YQHsbmXIrtOHDj_pIMvvZHWR5xYdgqHQ?api_key=RGAPI-21ec27d9-df3c-46ef-9dbc-5ff6eefd4bae',
                    method : 'GET',

                }).then((response)=>{
                    this.participantData = response.data.participants
                    this.liveData = response
                    console.log(this.liveData, this.participantData);
                }).catch((error)=>{
                    console.log(error);
                })
            },
        },

        mounted() {
            this.userLiveStats()
        }
    }
</script>

<style lang="scss" scoped>

</style>