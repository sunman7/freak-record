<template>
    <section>
        <Back />
        <ul class="type">
            <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Type extends Vue {
        @Prop(String) readonly value!: string;

        selectType(type: string) {
            if (type !== "-" && type !== "+") {
                throw new Error("type is unknown");
            }
            this.$emit("update:value", type);
        }


    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .icon {
        background: transparent;
        position: absolute;
        top: 16px;
        left: 10px;

    }

    .type {
        background: $orange;
        display: flex;
        text-align: center;
        justify-content: center;
        font-size: 20px;

        > li {
            width: 25%;
            line-height: 64px;

            &.selected {
                &::after {
                    content: "";
                    display: block;
                    height: 2px;
                    background: #000;
                    margin-top: -10px;
                }
            }

        }
    }
</style>