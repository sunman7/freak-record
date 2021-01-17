<template>
    <nav>
        <router-link to="/record" class="item" active-class="selected">
            <Icon name="record"></Icon>
            记账
        </router-link>
        <router-link to="/statistic" class="item" active-class="selected">
            <Icon name="stat"></Icon>
            统计
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
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
    @import "~@/style/helper.scss";

    nav {
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.15);
        background: white;
        color: $orange;
        display: flex;
        font-size: 14px;


        > .item {
            padding: 4px 0;
            width: 33.33333%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .icon {
                height: 24px;
                width: 24px;
                fill: $orange;
            }

            &.selected {
                color: darken($orange,35%);

                .icon {
                    fill: darken($orange,30%);
                }
            }
        }
    }
</style>