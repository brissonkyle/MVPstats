<template>
    <div>
        <v-card>
        <v-toolbar 
    dark
    elevation="12"
    >
    <v-spacer></v-spacer>
        <v-toolbar-title class="orange--text"><h1>MVP STATS</h1></v-toolbar-title>
        <v-spacer></v-spacer>

        <template v-slot:extension>
        <v-tabs centered>
            <v-tabs-slider slider-size="2" color="red"></v-tabs-slider>
        <v-tab class="orange--text">
            <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link>
        </v-tab>
        <v-tab class="orange--text">
            <router-link style="text-decoration: none; color: inherit;" to="/Login">Login</router-link>
        </v-tab>
        </v-tabs>
    </template>
    </v-toolbar>
    </v-card>
    </div>
</template>

<script>
    export default {
        name : 'HeaderComp'
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-size: 30px;
        text-shadow: 1px 1px 1px red;
    }
</style>