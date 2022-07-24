import { defineStore } from "pinia";
import axios from "axios";
import cookies  from 'vue-cookies';
import router from "@/router";


// MUST GET AN API KEY FROM RIOT

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
                url : `${process.env.VUE_APP_API_URL}` + '/api/user',
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
                router.push('/')
            }).catch((error)=> {
                console.log(error);
                this.userCreateAlert(error.response)
            })
        },

        // USER LOGIN API
        async userLoginApi( email, password ) {
            axios.request({
                url : `${process.env.VUE_APP_API_URL}` + '/api/user-login',
                method : 'POST',
                data : {
                    email,
                    password,
                }
            }).then((response)=>{
                cookies.set('userSessionToken', response.data.token)
                console.log(cookies.get('userSessionToken'));
                router.push('/Profile')
            }).catch((error)=> {
                console.log(error);
                this.userCreateAlert(error.response)
            })
        },

        // USER GET FOR PROFILE PAGE
        async userGet(email,password){
            axios.request({
                url :`${process.env.VUE_APP_API_URL}` + '/api/user',
                method : 'GET',
                data: {
                    email,
                    password
                }
            }).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error);
            })
        },
        
        // GRABBING PUUID TO GET MATCH DATA FROM RIOT API
        async getUserPuuid( summonerName ) {
            axios.request({
                url : `${process.env.VUE_APP_RIOT_API_URL_BY_NAME}` + summonerName + `${process.env.VUE_APP_RIOT_API_KEY}`,
                method : 'GET',
                data : {
                    summonerName
                }
            }).then((response)=>{
                if(response.data.length===0)
                    alert('Must Enter a Valid Summoner Name')
                console.log(response)
                cookies.set('Puuid', response.data.puuid)
            }).catch((error)=> {
                console.log(error);
            })
        },

        // GRABBING MATCH ID'S FROM RIOT API
        async getMatchId() {
            axios.request({
                url : `${process.env.VUE_APP_RIOT_API_URL_MATCH_PUUID}` + cookies.get('Puuid') + '/ids?start=0&count=5&' + `${process.env.VUE_APP_RIOT_API_KEY}`,
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
                url : `${process.env.VUE_APP_RIOT_API_URL_MATCH}` + cookies.get('MatchId') + `${process.env.VUE_APP_RIOT_API_KEY}`,
                method : 'GET',
                data() {
                    return {
                        cookie:  cookies.get('matchid'),
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