<template>
    <Layout>
        <Tabs :class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
        <ol>
            <li v-for="(group,index) in result" :key="index">
                <h3 class="title">{{group.title}}</h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{parseTag(item.tags)}}<span class="notes">{{parseNote(item.note)}}</span></span>
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

        parseNote(note: string) {
            if (note === "") {
                return "";
            } else {
                return "(" + note + ")";
            }
        }

        parseTag(tags: Tag[]) {
            return tags.length === 0 ? "无" : tags.join(",");
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