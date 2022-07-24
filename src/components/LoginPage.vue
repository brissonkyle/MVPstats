<template>
    <div class="container">
        <v-card 
        class="mt-4" 
        elevation="12"
        dark
        >
        
        <v-card-title class="orange--text text-center">Login</v-card-title>

        <v-text-field
        class="orange--text"
        outlined
        v-model="email"
        label="Enter Email"
        ></v-text-field>
        <v-text-field 
        class="orange--text"
        outlined
        v-model="password"
        label="Enter Password"
        ></v-text-field>
        <v-btn class="orange--text" @click="handleUserLogin">
            Login
        </v-btn>
        <span class="signup"><span class="pr-4 orange--text">Dont have an account ?</span><v-btn><router-link to="/Signup" class="orange--text" style="text-decoration: none; color: inherit;">Sign Up</router-link></v-btn></span>
        </v-card>
    </div>
</template>

<script>
import { useApiStore } from '@/stores/apistore'
import { mapActions } from 'pinia'
    export default {
        data :() => ({
            email : '',
            password : '',
        }),

        methods: {
            ...mapActions(useApiStore, ['userLoginApi']),
                handleUserLogin() {
                this.userLoginApi(this.email, this.password,);
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 70vh;
    }
    .signup {
        float: right;
    }
</style>