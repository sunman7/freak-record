<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
        <ol>
            <li v-for="group in result" :key="group.title">
                <h3 class="title">{{formatTime(group.title)}}</h3>
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
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import dayjs from "dayjs";

    @Component({
        components: {Tabs}
    })
    export default class Statistic extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }

        get result() {
            const {recordList} = this;
            type Items = RecordType[] //定义类型
            type HashMapItem = { title: string; items: Items };//定义类型

            const map: { [key: string]: HashMapItem } = {};
            for (let i = 0; i < recordList.length; i++) {
                const [date, time] = recordList[i].createTime.split("T");
                map[date] = map[date] || {title: date, items: []};
                map[date].items.push(recordList[i]);
            }
            return map;
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

        recordTypeList = [{text: "支出", value: "-"}, {text: "收入", value: "+"}];
        type = "-";
        types = "types";
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