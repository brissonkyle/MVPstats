<template>
    <div>
        <v-footer
    absolute
    dark
    elevation="12"
    padless
    >
    <v-card
    dark
    flat
    tile
    class="orange--text text-center ma-0"
    >
    <v-card-text>
        <v-btn
        class="ma-2"
        fab
        >
        FB</v-btn>
        <v-btn
        fab
        >
        IG</v-btn>
        <v-btn
        class="ma-2"
        >
        Email Us</v-btn>
        <v-btn
        class="ma-2"
        >
        Contact Us</v-btn>
    </v-card-text>

    <v-card-text class="orange--text pt-0">
        WE WELCOME YOU TO TRY OUR STAT TRACKING WEBSITE IN HOPES THAT YOU GET A BETTER GAMEPLAY EXPERIENCE THROUGH THE KNOWLEDGE OF STAT TRACKING IN LEAGUE OF LEGENDS. WE DO NOT OWN ANY RIGHTS TO ANYTHING IN REGARD TO RIOT GAMES AND ITS ASSETS. ALL IMAGES SOUCRED FROM WEST STUDIO (VISUAL DEVELOPMENT STUDIO). <p>GLHF.</p> <p> 2022 MVP Stats</p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="orange--text">
        <h2>MVP Stats</h2> 
        <p>A. Place. To. Improve.</p>
    </v-card-text>
    </v-card>
    </v-footer>
    </div>
</template>

<script>
    export default {
        name : 'FooterComp'
    }
</script>

<style lang="scss" scoped>
    p {
        font-size: 20px;
    }
</style>