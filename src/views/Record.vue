<template>
    <div class="wrapper">

        <button @click="$router.back()">
            <Icon class="back" name="left"/>
        </button>

        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <Tag @update:value="updateSelectTag"/>
        <FormItem class="date" file-name="日期" placeholder="记得在这儿输入日期哦~" type="date" :value.sync="record.createTime"/>
        <FormItem file-name="备注" placeholder="记得在这儿输入备注哦~" :value="record.note" @update:value="updateNote"/>
        <NumberPad :value="record.amount" @update:value="updateAmount" @confirm="saveRecord"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import NumberPad from "@/components/NumberPad.vue";
    import FormItem from "@/components/FormItem.vue";
    import Tag from "@/components/Tag.vue";
    import Tabs from "@/components/Tabs.vue";
    import dayjs from "dayjs";


    localStorage.setItem("version", "0.0.1");

    @Component({
        components: {Tabs, Tag, FormItem, NumberPad},
    })
    export default class Record extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }

        get tags() {
            return this.$store.state.tagList;
        }

        record: RecordType = {
            tag: {id: "", name: ""},
            note: "",
            type: "-",
            amount: 0,
            createTime: dayjs(new Date().toISOString()).format("YYYY-MM-DD"),
        };
        recordTypeList = [{text: "支出", value: "-"}, {text: "收入", value: "+"}];


        created() {
            this.$store.commit("initRecords");
            this.$store.commit("initTags");
        }

        updateSelectTag(tag: TagType) {
            this.record.tag = tag;
        }


        updateNote(note: string) {
            this.record.note = note;
        }

        updateAmount(amount: string) {
            this.record.amount = parseFloat(amount);
        }


        saveRecord() {
            if (this.record.tag.id === "" || this.record.tag.name === "") {
                window.alert("请选择一个标签");
                return;
            } else {
                if (this.$store.state.createRecordError === null) {
                    window.alert("记录成功");
                    this.$store.commit("createRecord", this.record);
                    this.record.note = "";
                }
            }

        }

    }
</script>

<style lang="scss" scoped>
    .date {
        margin-bottom: 4px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        > button {
            border: none;
        }
    }

    .back {
        background: transparent;
        position: absolute;
        top: 16px;
        left: 10px;
        width: 30px !important;
        height: 30px !important;

    }
</style>