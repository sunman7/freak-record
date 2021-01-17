<template>
    <div class="nav-wrapper">
        <div class="content">
            record
        </div>
        <Nav/>
    </div>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        display: flex;
        border: 1px solid green;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>