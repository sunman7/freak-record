<template>
    <button class="button"  >
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
        border-radius: 6px;
        font-weight: bold;
        width: 60%;
        border: none;
        padding: 5px 10px;
        margin: 44-16px;
        text-align: center;
        box-shadow: $box-shadow;
    }

</style>