<!--<template>-->
<!--    <Layout>-->
<!--        <Header>-->
<!--            <div class="wrapper">-->
<!--                <Icon name="left" @click.native="$router.replace('/label')"/>-->
<!--                <span>新建标签</span>-->
<!--            </div>-->
<!--        </Header>-->
<!--        <FormItem class="input" file-name="标签名" placeholder="清在这儿输入新的标签名" :value="tag.name" @update:value="createTag"/>-->
<!--        <div class="icons">-->
<!--            <span>图标</span>-->
<!--            <section class="tags">-->
<!--                <ol class="current">-->
<!--                    <li v-for="tag in tagNames" :key="tag" @click="select(tag)"-->
<!--                        :class="selectList.indexOf(tag) >= 0 && 'selected'">-->
<!--                        <div class="icon-wrapper">-->
<!--                            <Icon :name="tag"/>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                </ol>-->
<!--            </section>-->
<!--        </div>-->
<!--        <div class="button-wrapper">-->
<!--            <Button @click.native="createTag">确 定</Button>-->
<!--        </div>-->
<!--    </Layout>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--    import Vue from "vue";-->
<!--    import {Component} from "vue-property-decorator";-->
<!--    import FormItem from "@/components/FormItem.vue";-->
<!--    import Button from "@/components/Button.vue";-->
<!--    import Header from "@/components/Header.vue";-->
<!--    import newId from "@/lib/newId";-->
<!--    import readAllSvg from "@/lib/readAllSvg";-->

<!--    @Component({-->
<!--        components: {Header, Button, FormItem},-->

<!--    })-->
<!--    export default class EditLabel extends Vue {-->
<!--        tagNames: string[] = [];-->
<!--        selectList: string[] = [];-->

<!--        get tag() {-->
<!--            return this.$store.state.currentTag;-->
<!--        }-->

<!--        created() {-->
<!--            this.tagNames = readAllSvg();-->
<!--        }-->

<!--        select(name: string) {-->
<!--            const index = this.selectList.indexOf(name);-->
<!--            if (index >= 0) {-->
<!--                this.selectList.splice(name, 1);-->
<!--            } else {-->
<!--                this.selectList.pop();-->
<!--                this.selectList.push(name);-->
<!--            }-->
<!--        }-->

<!--        createTag(name: string) {-->
<!--            if (this.tag) {-->
<!--                this.$store.commit("updateTag", {id: this.tag.id, name});-->
<!--            }-->
<!--        }-->

<!--    }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--    @import "~@/style/helper.scss";-->

<!--    .wrapper {-->
<!--        display: flex;-->
<!--        font-size: 20px;-->
<!--        justify-content: center;-->
<!--        align-items: center;-->
<!--        line-height: 64px;-->

<!--        > .icon {-->
<!--            background: transparent;-->
<!--            position: absolute;-->
<!--            top: 10px;-->
<!--            left: 10px;-->
<!--        }-->

<!--    }-->


<!--     .input {-->
<!--        margin: 12px 0;-->
<!--    }-->

<!--    .button-wrapper {-->
<!--        text-align: center;-->

<!--    }-->

<!--    .tags {-->
<!--        flex-grow: 1;-->
<!--        overflow: auto;-->
<!--        padding: 16px;-->
<!--        font-size: 14px;-->
<!--        height: 50vh;-->
<!--        overflow: auto;-->

<!--        > .current {-->
<!--            display: flex;-->
<!--            flex-wrap: wrap;-->
<!--            align-items: start;-->

<!--            > li {-->
<!--                width: 33.333333%;-->
<!--                height: 20%;-->
<!--                display: flex;-->
<!--                flex-direction: column;-->
<!--                align-items: center;-->


<!--                > .icon-wrapper {-->
<!--                    width: 80%;-->
<!--                    border: 1px solid #d3d3d3;-->
<!--                    border-radius: 10px;-->
<!--                    height: 60px;-->
<!--                    display: flex;-->
<!--                    justify-content: center;-->
<!--                    align-items: center;-->
<!--                    margin-bottom: 10px;-->
<!--                    display: flex;-->
<!--                    flex-direction: column;-->


<!--                    > .icon {-->
<!--                        margin-top: 2px;-->
<!--                        height: 50px;-->
<!--                        width: 50px;-->
<!--                    }-->

<!--                    > .add {-->
<!--                        display: flex;-->
<!--                        justify-content: center;-->
<!--                        align-items: center;-->
<!--                        flex-direction: column;-->
<!--                        border: none;-->
<!--                        background: inherit;-->
<!--                    }-->
<!--                }-->


<!--                &.selected {-->
<!--                    .icon-wrapper {-->
<!--                        box-shadow: 1px 2px 2px #d3d3d3;-->
<!--                        color: $orange;-->
<!--                    }-->
<!--                }-->


<!--            }-->


<!--        }-->


<!--    }-->
<!--    .icons{-->
<!--        > span{-->
<!--            margin:  4px 16px;-->
<!--            display: block;-->
<!--            font-weight: bold;border-bottom: 1px solid grey;-->
<!--            padding-bottom: 4px;-->
<!--        }-->
<!--    }-->
<!--</style>-->