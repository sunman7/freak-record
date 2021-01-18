<template>
    <router-link to="/">
        <Icon class="icon" name="left"/>
    </router-link>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Back extends Vue {

    }
</script>

<style lang="scss" scoped>
    .icon {
        background: transparent;
        position: absolute;
        top: 16px;
        left: 10px;

    }
</style>