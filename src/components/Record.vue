<template>
    <Layout>
        <section class="type">
            <ul>
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </section>
        <section class="tags">
            <ol class="current">
                <li>
                    1
                </li>
            </ol>
        </section>
        <section class="note">
            <label class="name">备注<input type="text"></label>
        </section>
        <section class="number-pad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
                <button>.</button>
            </div>
        </section>
    </Layout>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>