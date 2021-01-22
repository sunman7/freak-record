<template>
    <header>
        <Icon name="left" @click.native="$router.replace('/record')"/>
        <slot/>
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
        background: $orange;
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
    }
</style>