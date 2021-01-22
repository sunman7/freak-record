<template>
    <button class="button">
        <slot></slot>
    </button>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Button extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .button {
        background: $orange;

        font-weight: bold;
        $h: 40px;
        height: $h;
        border-radius: $h/2;
        width: 70%;
        border: none;
        padding: 5px 10px;
        margin: 44-16px;
        text-align: center;
        box-shadow: $box-shadow;
    }

</style>