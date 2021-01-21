<template>
    <div id="app">
        <router-view :key="$route.fullPath" />
    </div>
</template>
<style lang="scss">
    @import "~@/style/reset.scss";
    @import "~@/style/helper.scss";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: $font-hei;
        line-height: 1.5;
        color: #2c3e50;
        font-size: 16px;
        background: white;

    }

    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }

</style>
