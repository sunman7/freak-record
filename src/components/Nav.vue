<template>
    <nav>
        <router-link to="/record" class="item">
            <Icon name="record"></Icon>
            记账
        </router-link>
        <router-link to="/statistic" class="item">
            <Icon name="stat"></Icon>
            统计
        </router-link>
        <router-link to="/label" class="item">
            <Icon name="label"></Icon>
            标签
        </router-link>
    </nav>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>
    nav {
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.12);
        background: #d6e6f2;
        display: flex;
        > .item{
            padding: 4px 0;
            width: 33.33333%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .icon{
                height: 32px;
                width: 32px;
            }
        }
    }
</style>