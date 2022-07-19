<template>
    <div>
        <StatsPage/>
        <StatsTable/>
    </div>
</template>

<script>
import StatsPage from '@/components/StatsPage.vue'
import StatsTable from '@/components/StatsTable.vue'
    export default {
        components: {
            StatsPage,
                StatsTable,
        },
    }
</script>

<style lang="scss" scoped>

</style>