<template>
    <div class="wrapper">
        {{recordList}}
        <Type :value="record.type" @update:value="updateType"/>
        <Tag :value="record.tags" @update:value="updateTags"/>
        <Note :value="record.note" @update:value="updateNote"/>
        <NumberPad :value="record.amount" @update:value="updateAmount" @confirm="saveRecord"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";
    import NumberPad from "@/components/NumberPad.vue";
    import Note from "@/components/Note.vue";
    import Type from "@/components/Type.vue";
    import Tag from "@/components/Tag.vue";

    localStorage.setItem("version", "0.0.1");

    type RecordType = {
        tags: string[];
        note: string;
        type: string;
        amount: number;
        createTime: Date;

    }
    @Component({
        components: {Tag, Type, Note, NumberPad}
    })
    export default class Record extends Vue {
        record: RecordType = {
            tags: [],
            note: "",
            type: "-",
            amount: 0,
            createTime: new Date(),
        };
        recordList: RecordType[] = JSON.parse(window.localStorage.getItem("recordList") || "[]");

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
            const deepClone: RecordType = JSON.parse(JSON.stringify(this.record));
            deepClone.createTime = new Date();
            this.recordList.push(deepClone);
        }

        @Watch("recordList")
        onRecordListChanged() {
            window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

    }
</style>