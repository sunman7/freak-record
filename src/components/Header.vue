<template>
    <header>
        <Icon name="left" @click.native="$router.back()"/>
        <span><slot/></span>
    </header>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Header extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    header {
        background: #f8f8f8;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        > svg{
            width: 30px;
            height: 30px;
            position: absolute;
            top: 15px;
            left: 6px;
        }
        > span{
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>