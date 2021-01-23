<template>

    <section class="note">
        <label class="name">{{fileName}}</label>
        <template v-if="type === 'date'">
            <input :type="type || 'text'" :value="formatDate(value)" @input="onValueChanged($event.target.value)"
                   :placeholder="placeholder" >
        </template>
        <template v-else>
            <input :type="type || 'text'" :value="value" @input="onValueChanged($event.target.value)"
                   :placeholder="placeholder">
        </template>

    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";
    import dayjs from "dayjs";

    @Component
    export default class FormItem extends Vue {
        @Prop() value!: string;
        @Prop() type?: string;
        @Prop({required: true}) fileName!: string;
        @Prop() placeholder?: string;

        onValueChanged(val: string) {
            this.$emit("update:value", val);
        }
        formatDate(isoString: string){
            return dayjs(isoString).format("YYYY-MM-DD");
        }
    }


</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .note {
        padding-left: 16px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgrey;

        > .name {
            padding-right: 32px;
        }

        > input {
            height: 32px;
            border: none;
            margin-right: 32px;
            background: transparent;
            flex-grow: 1;
        }

    }
</style>