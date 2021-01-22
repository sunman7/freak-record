<template>
    <div>
        <Header>
            <span>编辑标签</span>
        </Header>
        <ol class="tags">
            <li class="tag" v-for="tag in tags" :key="tag.id">
                <span><Icon :name="tag.name"></Icon> {{tag.name}}</span>
                <button @click="()=>remove(tag.id)">
                    <Icon name="delete-label"/>
                </button>
            </li>
        </ol>
        <div class="new-tag-wrapper">
            <Button @click.native="$router.push('/newtag')">新增标签</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Button from "@/components/Button.vue";
    import {mixins} from "vue-class-component";
    import {TagHelper} from "@/mixins/TagHelper";
    import Header from "@/components/Header.vue";


    @Component({
        components: {Header, Button},
    })
    export default class Label extends mixins(TagHelper) {
        get tags() {
            return this.$store.state.tagList;
        }

        mounted() {
            this.$store.commit("initTags");
        }

        remove(id: string) {
            this.$store.commit("removeTag", id);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .tags {
        background: #f5f5f5;
        padding: 0 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            > button {
                border: none;
            }

            > span {
                display: flex;

                > svg {
                    margin-right: 4px;
                }
            }

            svg {
                width: 24px;
                height: 24px;
            }
        }
    }

    .new-tag-wrapper {
        text-align: center;
    }
</style>