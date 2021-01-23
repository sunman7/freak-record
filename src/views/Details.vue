<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
        <FormItem file-name="日期" :value.sync="date" type="date"/>
        <Chart :options="chartOptions" v-if="this.groupList.length > 0"/>
        <div v-else>
            <NoRecord/>
        </div>

    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import clone from "@/lib/clone";
    import NoRecord from "@/components/NoRecord.vue";
    import Button from "@/components/Button.vue";
    import Chart from "@/components/Chart.vue";
    import FormItem from "@/components/FormItem.vue";
    import _ from "lodash";

    @Component({
        components: {FormItem, Chart, NoRecord, Button, Tabs}
    })
    export default class Details extends Vue {
        recordTypeList: { text: string; value: string }[] = [{text: "支出", value: "-"}, {text: "收入", value: "+"}];
        type = "-";
        types = "types";
        date = new Date().toISOString();

        get chartOptions() {
            const result = this.groupList.map(r => _.pick(r, ["name", "value"]));
            const names = result.map(r => _.pick(["name"]));
            return {
                title: {
                    left: "center"
                },
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: names,
                        type: "pie",
                        radius: "50%",
                        data: result,
                        color: [ // 颜色，按循序使用
                            "#faa41b",
                            "#fc6961",
                            "#fc4190",
                            "#7c9473",
                            "#d6b0b1",
                            "#8b5e83",
                            "#ff7b54",
                            "#11698e"
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            };
        }

        get recordList() {
            return this.$store.state.recordList;
        }

        get groupList() {
            const {recordList} = this;

            type Group = {
                name: string;
                value?: number;
                items: RecordType[];
            }[]
            //排序
            const newList = clone<RecordType[]>(recordList)
                .filter(r => r.type === this.type && r.createTime === this.date.split("T")[0])//通过类型筛选出支出还是收入
                .sort((a, b) => a.tag.name.localeCompare(b.tag.name));
            //排序后的所有record
            if (newList.length === 0) return [];
            const group: Group = [{
                name: newList[0].tag.name,
                items: [newList[0]]
            }];
            for (let i = 1; i < newList.length; i++) {
                const current = newList[i]; // 当前record
                const last = group[group.length - 1]; //分组中最后一项
                if (!last.name.localeCompare(current.tag.name)) {
                    last.items.push(current);
                } else {
                    group.push({name: current.tag.name, items: [current]});
                }
            }
            group.map(g => {
                g.value = g.items.reduce(
                    (sum, item) => {
                        return sum + item.amount;
                    }
                    , 0);
            });
            return group;
        }


        parseNote(note: string) {
            if (note === "") {
                return "";
            } else {
                return "(" + note + ")";
            }
        }

        parseTag(tag: string) {
            return tag === undefined ? "无" : tag;
        }

        created() {
            this.$store.commit("initRecords");
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    %item {
        padding: 4px 16px;
        min-height: 40px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .notes {
        font-size: 12px;
        color: grey;
    }

    .title {
        background: #f5f5f5;

        > span {
            font-weight: bold;
        }

        @extend %item
    }

    .record {

        > div {
            display: flex;
            align-items: center;
        }

        @extend %item
    }

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

                color: $orange;
                border: 1px solid $orange;
                padding: 4px;
                line-height: 20px;
                font-weight: bold;

                &.selected {
                    background: $orange;
                    color: white;

                    &::after {
                        display: none;
                    }
                }

            }
        }


    }

</style>