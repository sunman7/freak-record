<template>
    <Layout>

    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import tagListModel from "@/model/tagListModel";

    @Component
    export default class EditLabel extends Vue {
        created() {
            const id = this.$route.params.id;
            tagListModel.init();
            const tags = tagListModel.data;
            const tag = tags.filter(t => t.id === id)[0];
            if (tag) {
                console.log(tag);
            } else {
                this.$router.replace("/404");
            }


        }
    }
</script>

<style lang="scss" scoped>

</style>