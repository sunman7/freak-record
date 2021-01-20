<template>
    <section class="tags">
        <ol class="current">
            <li v-for="tag in tagList" :key="tag.id" @click="select(tag.id)"
                :class="selectedTags.indexOf(tag.id) >= 0 && 'selected'">
                <div class="icon-wrapper">
                    {{tag.name}}
                </div>
            </li>
            <li>
                <button class="add" @click="createTag">新增</button>
            </li>
        </ol>


    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {mixins} from "vue-class-component";
    import {TagHelper} from "@/mixins/TagMethod";


    @Component({
        computed: {
            tagList() {
                return this.$store.commit("initTagList");
            }
        }
    })
    export default class Tag extends mixins(TagHelper) {

        selectedTags: string[] = [];

        select(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
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
            flex-wrap: wrap;
            justify-content: flex-start;
            overflow: auto;

            > li {
                margin-top: 10px;

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