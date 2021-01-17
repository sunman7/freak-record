<template>
    <div class="nav">
        <router-link to="/record">记账</router-link>
        <router-link to="/statistic">统计</router-link>
        <router-link to="/label">标签</router-link>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>
    .nav{
        border: 1px solid red;
    }
</style>