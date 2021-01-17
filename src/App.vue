<template>
    <div id="app">
        <router-view />

        <hr>
        <div>导航</div>
        <router-link to="/record">记账</router-link>
        <router-link to="/statistic">统计</router-link>
        <router-link to="/label">标签</router-link>
    </div>
</template>
<style lang="scss">

</style>
