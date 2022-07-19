<template>
    <div>
        <v-container class="container">
        <v-card 
        elevation="12" 
        dark
        >
            <v-card-title class="orange--text text-center">Signup</v-card-title>

        <v-text-field
            class="orange--text text-center"
            outlined
            v-model="username"
            append-outer-icon="mdi-account"
            label="Enter Username"
        ></v-text-field>
        <v-text-field
            class="orange--text text-center"
            outlined
            v-model="email"
            append-outer-icon="mdi-email"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            class="orange--text text-center"
            outlined
            v-model="password"
            append-outer-icon="mdi-lock"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
        ></v-text-field>
        <v-text-field
            class="orange--text text-center"
            outlined
            v-model="profileUrl"
            append-outer-icon="mdi-account-tie"
            label="Profile Picture URL"
        ></v-text-field>
        <v-text-field
            class="orange--text text-center"
            outlined
            v-model="bannerUrl"
            append-outer-icon="mdi-account-tie"
            label="Banner URL"
        ></v-text-field>
        <v-btn 
        class="orange--text"
        elevation="9"
        @click="handleUserCreated"
        >
            Create
        </v-btn>
        </v-card>
        </v-container>
    </div>
</template>

<script>
import { useApiStore } from '@/stores/apistore'
import { mapActions } from 'pinia'
    export default {
        name : 'SignupPage',

        data :() => ({
            username : '',
            email : '',
            password : '',
            profileUrl : '',
            bannerUrl : ''
        }),

        methods: {
            ...mapActions(useApiStore, ['userCreateApi']),
                handleUserCreated() {
                this.userCreateApi(this.email, this.username, this.password, this.profileUrl, this.bannerUrl);
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 850px;
    }
</style>