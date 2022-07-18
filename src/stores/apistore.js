import { defineStore } from "pinia";
import axios from "axios";
import cookies  from 'vue-cookies';
import router from "@/router";
// import router from "@/router";

export const useApiStore = defineStore('api',{
    state : () => {
        return {
            
        }
    },

    methods: {
        
    },

    actions: {
        // USER CREATION API
        async userCreateApi( username, email, password, profileUrl, bannerUrl) {
            axios.request({
                url : 'http://127.0.0.1:5000' + '/api/user',
                method : 'POST',
                data : {
                    username,
                    email,
                    password,
                    profileUrl,
                    bannerUrl
                }
            }).then((response)=>{
                console.log(response);
                // router.push('HomeView')
            }).catch((error)=> {
                console.log(error);
                this.userCreateAlert(error.response)
            })
        },

        // USER LOGIN API
        async userLoginApi( email, password ) {
            axios.request({
                url : 'http://127.0.0.1:5000' + '/api/user-login',
                method : 'POST',
                data : {
                    email,
                    password,
                }
            }).then((response)=>{
                cookies.set('userSessionToken', response.data.token)
                console.log(cookies.get('userSessionToken'));
                // router.push('HomeView')
            }).catch((error)=> {
                console.log(error);
                this.userCreateAlert(error.response)
            })
        },
        
        // GRABBING PUUID TO GET MATCH DATA FROM RIOT API
        async getUserPuuid( summonerName ) {
            axios.request({
                url : 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=RGAPI-d892e6e6-5031-4fc5-b5cb-fecbebe5ca8c',
                method : 'GET',
                data : {
                    summonerName
                }
            }).then((response)=>{
                console.log(response)
                cookies.set('Puuid', response.data.puuid)
            }).catch((error)=> {
                console.log(error);
                this.userPuuidAlert(error.response)
            })
        },

        // GRABBING MATCH ID'S FROM RIOT API
        async getMatchId() {
            axios.request({
                url : 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/'+ cookies.get('Puuid') + '/ids?start=0&count=1&api_key=RGAPI-d892e6e6-5031-4fc5-b5cb-fecbebe5ca8c',
                method : 'GET'
            }).then((response)=>{
                console.log(response)
                cookies.remove('Puuid')
                cookies.set('MatchId', response.data[0])
                router.push('/Stats')
            }).catch((error)=> {
                console.log(error);
                this.userPuuidAlert(error.response)
            })
        },

        // GRABBING MATCH INFO TO PULL STATS
        async getMatchInfo() {
            axios.request({
                url : 'https://americas.api.riotgames.com/lol/match/v5/matches/'+ cookies.get('MatchId') +'?api_key=RGAPI-d892e6e6-5031-4fc5-b5cb-fecbebe5ca8c',
                method : 'GET',
                data() {
                    return {
                        matchData: []
                    }
                },
            }).then((response)=>{
                console.log(response);
                this.matchData = response.data.info                                               
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
})