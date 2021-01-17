<template>
    <div class="wrapper">
        <section>
            <ul class="type">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </section>
        <section class="tags">
            <ol class="current">
                <li>
                    <div class="icon-wrapper">
                        1
                    </div>
                </li>
            </ol>
            <button class="add">新增</button>

        </section>
        <section class="note">
            <label class="name">备注：</label>
            <input type="text" placeholder="记得在这儿写备注~">
        </section>
        <section class="number-pad">
            <div class="output">100</div>
            <div class="buttons clearfix">
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
                <button class="ok">OK</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component
    export default class Record extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        > .tags {
            flex-grow: 1;
            overflow: auto;
            background: #d9d9d9;
            padding: 16px;

            > .current {
                display: flex;

                > li {

                    > .icon-wrapper {
                        background: $orange;
                        padding: 0 16px;
                        margin-right: 12px;
                        box-shadow: 1px 2px 2px #d3d3d3;
                        width: 90px;
                        border: 1px solid #d3d3d3;
                        border-radius: 10px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }


                }


            }

            > .add {
                background: $orange;
                margin-top: 10px;
                width: 90px;
                border: 1px solid #d3d3d3;
                border-radius: 12px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        > .note {
            background: #f2f2f2;
            padding-left: 16px;
            display: flex;
            align-items: center;
            box-shadow: $box-shadow;

            > .name {
                padding-right: 16px;
            }

            > input {
                height: 48px;
                border: none;
                background: transparent;
                flex-grow: 1;
            }

        }

        .type {
            background: $orange;
            display: flex;
            text-align: center;
            justify-content: center;
            font-size: 20px;

            > li {
                width: 25%;
                line-height: 64px;

                &.selected {
                    &::after {
                        content: "";
                        display: block;
                        height: 2px;
                        background: #000;
                        margin-top: -10px;
                    }
                }

            }
        }

        .number-pad {
            .output {
                font-size: 30px;
                font-family: Consolas, monospace;
                padding: 6px 16px;
                text-align: right;
                background: white;
                box-shadow: $box-shadow;
            }

            .buttons {
                > button {
                    width: 25%;
                    height: 64px;
                    background: transparent;
                    border: none;

                    &.ok {
                        height: 64px*2;
                        float: right;
                    }

                    &.zero {
                        width: 50%;
                    }

                    $bg: #f1f1f1;

                    &:first-child {
                        background: $bg;
                    }

                    &:nth-child(2), &:nth-child(5) {
                        background: darken($bg, 4%);
                    }

                    &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                        background: darken($bg, 4% * 2);
                    }

                    &:nth-child(4), &:nth-child(7), &:nth-child(10), {
                        background: darken($bg, 4% * 3);
                    }

                    &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                        background: darken($bg, 4% * 4);
                    }

                    &:nth-child(14) {
                        background: darken($bg, 4% * 5);
                    }

                    &:nth-child(12) {
                        background: darken($bg, 4% * 6);
                    }
                }


            }
        }

    }
</style>