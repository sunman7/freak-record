<template>
    <button class="button" >
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


    .button {
        background: black;
        border-radius: 4px;
        border: none;
        padding: 16px;
        margin: 44-16px;
    }

</style>