<template>
    <div>
        
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
                        this.matchData = (response.data)
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