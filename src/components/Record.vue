<template>
    <div class="wrapper">
        <Type :value="record.type" @update:value="updateType"/>
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
    import Type from "@/components/Type.vue";
    import Tag from "@/components/Tag.vue";


    localStorage.setItem("version", "0.0.1");

    @Component({
        components: {Tag, Type, FormItem, NumberPad},
        computed: {
            recordList() {
                return this.$store.commit("initRecords");
            },
            tags() {
                return this.$store.commit("initTag");
            }
        }
    })
    export default class Record extends Vue {
        record: RecordType = {
            tags: [],
            note: "",
            type: "-",
            amount: 0,
            createTime: new Date(),
        };
        created() {
            console.log("computed内容");
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
</style>