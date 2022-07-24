<template>
    <div class="container">
        <v-container>
            <v-card
            dark
            v-for="data in userData" :key="data.id"
            class="mx-auto"
        >
            <v-img :src="data.profileUrl" width="300px" height="200px"></v-img>
            <v-img :src="data.bannerUrl" width="100%" height="200px">
            <v-card-title class="justify-center orange--text">{{data.username}}</v-card-title>
        </v-img>

        <v-btn
        class="orange--text"
        dark
        @click="userLiveStats()"
        >
        <router-link style="text-decoration: none; color: inherit;" to="/Live">See Live Stats</router-link>
        </v-btn>
    </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name : 'ProfilePage',
        data :() => ({
            userData : [],
            liveData: []
        }),


        methods: {
            async userGet(){
                axios.request({
                    url :'http://127.0.0.1:5000' + '/api/user',
                    method : 'GET',

                }).then((response)=>{
                    this.userData = response.data
                    console.log(response, this.userData);
                }).catch((error)=>{
                    console.log(error);
                })
            },


        },

        mounted() {
            this.userGet()
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 100vh;
    }
</style>