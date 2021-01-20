<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="y"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";

    @Component({
        components: {Tabs}
    })
    export default class Statistic extends Vue {
        recordTypeList = [{text: "收入", value: "+"}, {text: "支出", value: "-"}];
        y = "-";
        types = "types";
    }
</script>

<style lang="scss" scoped>
    ::v-deep .types-item {
        background: white;
    }
</style>