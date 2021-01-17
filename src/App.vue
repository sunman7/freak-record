<template>
    <div id="app">
        <router-view/>
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
        color: #333;
        font-size: 16px;
    }

    .clearfix::after {
        content: "";
        display: block;
        clear: both;
    }

</style>
