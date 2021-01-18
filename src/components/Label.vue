<template>
    <Layout>
        <ol class="tags">
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span>
                <Icon name="edit"/>
            </li>
        </ol>
        <div class="new-tag-wrapper">
            <button class="new-tag" @click="createTag">新增标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import tagListModel from "@/model/tagListModel";

    tagListModel.init();
    @Component
    export default class Label extends Vue {
        tags = tagListModel.data;
        createTag() {
            const name = window.prompt("请输入标签名");
            if (name) {
                const msg = tagListModel.create(name);
                if (msg === "duplicated") {
                    window.alert("标签已经存在了，请重新添加");
                } else if (msg === "success") {
                    window.alert("添加成功！");
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .tags {
        background: #f5f5f5;
        padding: 0 16px;

        > li {
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

        > .new-tag {
            background: $orange;
            border-radius: 4px;
            border: none;
            padding: 16px;
            margin: 44-16px;
        }
    }
</style>