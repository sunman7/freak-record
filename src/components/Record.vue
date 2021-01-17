<template>
    <div class="wrapper">
        <Type  />
        <Tag/>
        <Note/>
        <NumberPad/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import NumberPad from "@/components/NumberPad.vue";
    import Note from "@/components/Note.vue";
    import Type from "@/components/Type.vue";
    import Tag from "@/components/Tag.vue";

    @Component({
        components: {Tag, Type, Note, NumberPad}
    })
    export default class Record extends Vue {


    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

    }
</style>