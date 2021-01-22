<template>
    <div class="tabs-wrapper">
        <ul :class="{[classPrefix + '-tabs']: classPrefix}" class="tabs">
            <li v-for="item in dataSource" :key="item.value" @click="select(item)"
                :class="{[classPrefix + '-item']:classPrefix, selected: item.value === value }">{{item.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    type dataSourceItem = {
        text: string;
        value: string;
    }
    @Component
    export default class Tabs extends Vue {
        @Prop({required: true}) dataSource!: dataSourceItem[];
        @Prop() value!: string;
        @Prop() classPrefix?: string;

        select(item: dataSourceItem) {
            if (item.value !== "-" && item.value !== "+") {
                throw new Error("type is unknown");
            }
            this.$emit("update:value", item.value);
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .tabs-wrapper {
        background: #f8f8f8;
        height: 64px;
        > .tabs {
            display: flex;
            text-align: center;
            justify-content: center;
            font-size: 20px;

            > li {
                width: 25%;
                line-height: 64px;
                color: black;
                &.selected {
                    &::after {
                        content: "";
                        display: block;
                        height: 4px;
                        background: $orange;
                        margin-top: -10px;
                    }
                }
            }
        }
    }




</style>