<template>
    <section class="tags">
        <ol class="current">
            <li v-for="tag in value" :key="tag.id" @click="select(tag)"
                :class="selectedTags.indexOf(tag) >= 0 && 'selected'" >
                <div class="icon-wrapper">
                    {{tag.name}}
                </div>
            </li>
            <li>
                <button class="add" @click="create">新增</button>
            </li>
        </ol>


    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tag extends Vue {
        @Prop(Array) value: string[] | undefined;
        selectedTags: string[] = [];

        select(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
        }

        create() {
            const input = window.prompt("请输入标签名");
            if (input === "") {
                window.alert("不能输入空的标签名");
            } else if (this.value) {
                this.$emit("update:value", [...this.value, input]);
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .tags {
        flex-grow: 1;
        overflow: auto;
        background: #d9d9d9;
        padding: 16px;

        > .current {
            display: flex;

            > li {
                > .add {
                    background: $orange;
                    width: 90px;
                    border: 1px solid #d3d3d3;
                    border-radius: 12px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                > .icon-wrapper {
                    background: $white;
                    padding: 0 16px;
                    margin-right: 12px;
                    box-shadow: 1px 2px 2px #d3d3d3;
                    width: 90px;
                    border: 1px solid #d3d3d3;
                    border-radius: 10px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                &.selected {
                    .icon-wrapper {
                        box-shadow: $box-shadow;
                        color: $orange;
                    }
                }


            }


        }


    }

</style>