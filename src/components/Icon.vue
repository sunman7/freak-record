<template>
    <svg class="icon">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>

<script lang="ts">


    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context("../assets/icons", true, /\.svg$/));
    } catch (e) {
        console.log(e);
    }
    export default {
        props: ["name"]

    };
</script>

<style lang="scss" scoped>
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>