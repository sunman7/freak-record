<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/label/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="edit"/>
            </router-link>
        </div>
        <div class="new-tag-wrapper">
            <Button @click.native="createTag">新增标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Button from "@/components/Button.vue";
    import store from "@/store/index2";


    @Component({
        components: {Button}
    })
    export default class Label extends Vue {
        tags = store.tagList;

        createTag() {
            const name = window.prompt("请输入标签名");
            if (name) {
                store.createTag(name);
            }
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