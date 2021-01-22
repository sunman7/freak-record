<template>
    <div class="no-record">
        <Icon name="empty"/>
        目前没有任何记录
        <Button @click.native="$router.push('/record')">记一笔</Button>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Button from "@/components/Button.vue";
    @Component({
        components: {Button}
    })
    export default class NoRecord extends Vue {

    }
</script>

<style lang="scss" scoped>
    .no-record {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
        color: grey;

        > svg {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }
    }
</style>