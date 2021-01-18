<template>

    <section class="note">
        <label class="name">备注：</label>
        <input type="text" v-model="value" placeholder="记得在这儿写备注~">

    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class Note extends Vue {
        @Prop() value!: string;

        @Watch("value")
        onValueChanged(val: string) {
            this.$emit("update:value", val);
        }
    }


</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .note {
        background: #f2f2f2;
        padding-left: 16px;
        display: flex;
        align-items: center;
        box-shadow: $box-shadow;

        > .name {
            padding-right: 16px;
        }

        > input {
            height: 48px;
            border: none;
            background: transparent;
            flex-grow: 1;
        }

    }
</style>