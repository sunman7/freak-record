<template>
    <div class="wrapper">
        <router-link to="/">
            <Icon class="back" name="left"/>
        </router-link>
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <Tag/>
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
            tags: [],
            note: "",
            type: "-",
            amount: 0,
            createTime: new Date().toISOString(),
        };
        recordTypeList = [{text: "收入", value: "+"}, {text: "支出", value: "-"}];

        created() {
            this.$store.commit("initRecords");
            this.$store.commit("initTags");
        }

        updateTags(tags: string[]) {
            this.record.tags = tags;
        }

        updateNote(note: string) {
            this.record.note = note;
        }

        updateAmount(amount: string) {
            this.record.amount = parseFloat(amount);
        }

        updateType(type: string) {
            this.record.type = type;
        }

        saveRecord() {
            this.$store.commit("createRecord", this.record);
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

    }

    .back {
        background: transparent;
        position: absolute;
        top: 16px;
        left: 10px;

    }
</style>