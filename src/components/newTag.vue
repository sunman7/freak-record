<template>
    <div>
        <Header>
            <span class="label">新建标签</span>
        </Header>
        <div>
            <p>图标</p>
            <section class="tags">
                <ol class="current">
                    <li v-for="tag in tagNames" :key="tag" @click="select(tag)"
                        :class="selectedTags.indexOf(tag) >= 0 && 'selected'">
                        <div class="icon-wrapper">
                            <Icon :name="tag"/>
                            {{tag}}
                        </div>
                    </li>
                </ol>
            </section>
            <div class="button-wrapper">
                <Button @click.native="confirm">确 定</Button>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import FormItem from "@/components/FormItem.vue";
    import Button from "@/components/Button.vue";
    import Header from "@/components/Header.vue";
    import readAllSvg from "@/lib/readAllSvg";

    @Component({
        components: {Header, Button, FormItem},

    })
    export default class NewTag extends Vue {
        tagNames: string[] = [];
        selectedTags: string[] = [];

        created() {
            this.tagNames = readAllSvg();
        }

        select(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.pop();
                this.selectedTags.push(tag);
            }
        }

        confirm() {
            if (!this.selectedTags || this.selectedTags.length === 0) {
                window.alert("请选择一个标签");
                return;
            } else {
                if (this.$store.state.createTagError === null) {
                    this.$store.commit("createTag", this.selectedTags[0]);
                }
            }
        }


    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    p {
        margin: 0 16px;
        padding: 10px 0;
        font-weight: bold;
        font-size: 20px;
        border-bottom: 1px solid grey;
    }

    .label {
        font-size: 20px;
    }


    .button-wrapper {
        text-align: center;
    }

    .tags {
        flex-grow: 1;
        overflow: auto;
        padding: 16px;
        font-size: 14px;
        height: 60vh;
        overflow: auto;

        > .current {
            display: flex;
            flex-wrap: wrap;
            align-items: start;

            > li {
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

                    > .add {
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

    .icons {
        > span {
            margin: 4px 16px;
            display: block;
            font-weight: bold;
            border-bottom: 1px solid grey;
            padding-bottom: 4px;
        }
    }
</style>