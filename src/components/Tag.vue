<template>
    <section class="tags">
        <ol class="current">
            <li v-for="tag in tags" :key="tag.id" @click="select(tag)"
                :class="selectedTags.indexOf(tag) >= 0 && 'selected'">
                <div class="icon-wrapper">
                    <Icon :name="tag.name"/>
                    {{tag.name}}
                </div>
            </li>
            <li>
                <div class="icon-wrapper">
                    <button class="operate" @click="$router.push('/newtag')">
                        <Icon name="add"/>
                        新增
                    </button>
                </div>
            </li>
            <li>
                <div class="icon-wrapper">
                    <button class="operate" @click="$router.push('/label')">
                        <Icon name="edit"/>
                        编辑
                    </button>
                </div>
            </li>
        </ol>


    </section>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {mixins} from "vue-class-component";
    import {TagHelper} from "@/mixins/TagHelper";


    @Component
    export default class Tag extends mixins(TagHelper) {
        get tags() {
            return this.$store.state.tagList;
        }

        beforeCreated() {
            this.$store.commit("initTags");
        }

        selectedTags: TagType[] = [];

        select(tag: TagType) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.pop();
                this.selectedTags.push(tag);
            }
            this.$emit("update:value", this.selectedTags[0]);
        }


    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .tags {
        flex-grow: 1;
        overflow: auto;
        padding: 16px;
        font-size: 14px;
        height: 30vh;
        overflow: auto;

        > .current {
            display: flex;
            flex-wrap: wrap;
            align-items: start;

            > li {
                margin-top: 16px;
                width: 33.333333%;
                height: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;


                > .icon-wrapper {
                    width: 80%;
                    border: 1px solid #d3d3d3;
                    border-radius: 10px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;


                    > .icon {
                        margin-top: 2px;
                        height: 50px;
                        width: 50px;
                    }

                    > .operate {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        border: none;
                        background: inherit;
                    }
                }


                &.selected {
                    .icon-wrapper {
                        box-shadow: 1px 2px 2px #d3d3d3;
                        color: $orange;
                    }
                }


            }


        }


    }

</style>