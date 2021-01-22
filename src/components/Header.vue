<template>
    <header>
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
    }
</style>