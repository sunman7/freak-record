<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
        <ol v-if="groupList.length > 0">
            <li v-for="group in groupList" :key="group.title">
                <div>
                    <h3 class="title">{{formatTime(group.title)}} <span>￥{{group.amount ? group.amount : 0}}</span></h3>

                </div>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <div>
                            <Icon :name="item.tagId.name"></Icon>
                            <span>{{parseTag(item.tagId.name)}}</span><span
                                class="notes">{{parseNote(item.note)}}</span></div>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    <div v-else>
        <NoRecord />
    </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import dayjs from "dayjs";
    import clone from "@/lib/clone";
    import NoRecord from "@/components/NoRecord.vue";
    import Button from "@/components/Button.vue";

    @Component({
        components: {NoRecord, Button, Tabs}
    })
    export default class Statistic extends Vue {
        recordTypeList: { text: string; value: string }[] = [{text: "支出", value: "-"}, {text: "收入", value: "+"}];
        type = "-";
        types = "types";

        get recordList() {
            return this.$store.state.recordList;
        }

        get groupList() {
            const {recordList} = this;

            type Group = {
                title: string;
                amount?: number;
                items: RecordType[];
            }[]
            //排序
            const newList = clone<RecordType[]>(recordList)
                .filter(r => r.type === this.type)//通过类型筛选出支出还是收入
                .sort((a: RecordType, b: RecordType) => dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf());
            //排序后的所有record
            if (newList.length === 0) return [];
            const group: Group = [{
                title: dayjs(recordList[0].createTime).format("YYYY-MM-DD"),

                items: [newList[0]]
            }];
            for (let i = 1; i < newList.length; i++) {
                const current = newList[i]; // 当前record
                const last = group[group.length - 1]; //分组中最后一项
                if (dayjs(last.title).isSame(dayjs(current.createTime), "day")) {
                    last.items.push(current);
                } else {
                    group.push({title: dayjs(current.createTime).format("YYYY-MM-DD"), items: [current]});
                }
            }
            group.map(g => {
                g.amount = g.items.reduce(
                    (sum, item) => {
                        return sum + item.amount;
                    }
                    , 0);
            });
            return group;
        }

        formatTime(string: string) {
            const now = dayjs();
            const day = dayjs(string);

            if (day.isSame(now, "day")) {
                return "今天";
            } else if (day.isSame(now.subtract(1, "day"), "day")) {
                return "昨天";
            } else if (day.isSame(now.subtract(2, "day"), "day")) {
                return "前天";
            } else {
                if (day.isSame(now, "year")) {
                    return day.format("M月D日");
                } else {
                    return day.format("YYYY年M月D日");
                }

            }


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