<template>
    <Layout>
        <div class="wrapper">
            <Icon name="left" @click.native="$router.replace('/label')"/>
            <span>编辑标签</span>
        </div>
        <FormItem class="input" file-name="标签名" placeholder="清在这儿输入新的标签名" :value="tag.name" @update:value="updateTag"/>
        <div class="button-wrapper">
            <Button @click.native="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import FormItem from "@/components/FormItem.vue";
    import Button from "@/components/Button.vue";

    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag = window.findTag(this.$route.params.id);


        created() {
            if (!this.tag) {
                this.$router.replace("/404");
            }
        }

        updateTag(name: string) {
            if (this.tag) {
                window.updateTag(this.tag.id, name);
            }
        }

        remove() {
            if (this.tag) {
                if (window.removeTag(this.tag.id)) {
                    window.alert("删除成功");
                    this.$router.back();
                } else {
                    window.alert("删除失败");
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        background: white;
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        line-height: 64px;

        > .icon {
            background: transparent;
            position: absolute;
            top: 16px;
            left: 10px;
        }

    }


    .input {
        margin: 12px 0;
    }

    .button-wrapper {
        text-align: center;
    }
</style>