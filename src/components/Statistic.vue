<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
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
        recordTypeList = [{text: "支出", value: "-"}, {text: "收入", value: "+"}];
        type = "-";
        types = "types";
    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    ::v-deep .tabs-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .types-tabs {
            font-size: 14px;

            > .types-item {
                &:first-child {
                    border-radius: 6px 0 0 6px;
                }

                &:last-child {
                    border-radius: 0 6px 6px 0;
                }

                border: 1px solid black;
                padding: 4px;
                line-height: 20px;

                &.selected {
                    background: #000;
                    color: $orange;

                    ::after {
                        display: none;
                    }
                }

            }
        }


    }

</style>