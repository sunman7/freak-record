<template>
    <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const echarts = require("echarts");
    import {EChartsOption} from "echarts";

    @Component
    export default class Chart extends Vue {
        @Prop() options?: EChartsOption;
        chart?: any;

        mounted() {
            console.log(this.options);
            if (this.options === undefined) {
                return console.error("options为空");
            }

            this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
            this.chart.setOption(this.options);
        }

        @Watch("options")
        onOptionsChanged(newVal: EChartsOption) {
            this.chart.setOption(newVal);
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 40vh;
        width: 100%;
    }
</style>