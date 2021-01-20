<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="arr" :value.sync="y"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import Type from "@/components/Type.vue";
    import Tabs from "@/components/Tabs.vue";

    @Component({
        components: {Tabs, Type}
    })
    export default class Statistic extends Vue {
        arr = [{text: "收入", value: "+"}, {text: "支出", value: "-"}];
        y = "-";
        types = "types";
    }
</script>

<style lang="scss" scoped>
    ::v-deep .types-item{
        background: white;
    }
</style>