<template>
    <div class="wrapper">
        <Type :value="record.type" @update:value="updateType"/>
        <Tag :value="record.tags" @update:value="updateTags"/>
        <Note :file-name="备注" placeholder="记得在这儿输入备注哦~" :value="record.note" @update:value="updateNote"/>
        <NumberPad :value="record.amount" @update:value="updateAmount" @confirm="saveRecord"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Watch} from "vue-property-decorator";
    import NumberPad from "@/components/NumberPad.vue";
    import Note from "@/components/Note.vue";
    import Type from "@/components/Type.vue";
    import Tag from "@/components/Tag.vue";
    import recordListModel from "@/model/recordListModel";
    import tagListModel from "@/model/tagListModel";


    localStorage.setItem("version", "0.0.1");

    @Component({
        components: {Tag, Type, Note, NumberPad}
    })
    export default class Record extends Vue {
        tags = tagListModel.init();
        record: RecordType = {
            tags: [],
            note: "",
            type: "-",
            amount: 0,
            createTime: new Date(),
        };
        recordList = recordListModel.init();

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
            const deepClone: RecordType = recordListModel.clone(this.record);
            deepClone.createTime = new Date();
            this.recordList.push(deepClone);
        }

        @Watch("recordList")
        onRecordListChanged() {
            recordListModel.save(this.recordList);
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