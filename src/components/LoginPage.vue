<template>
    <div>
        <v-card>
        
        <v-card-title>Login</v-card-title>

        <v-text-field
        v-model="email"
        label="Enter Email"
        append-outer-icon="mdi-email"
        ></v-text-field>
        <v-text-field 
        v-model="password"
        label="Enter Password"
        append-outer-icon="mdi-lock"
        ></v-text-field>
        <v-btn @click="handleUserLogin">
            Login
        </v-btn>
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

</style>