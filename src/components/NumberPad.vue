<template>
    <section class="number-pad">
        <div class="output">{{output|| "0"}}</div>
        <div class="buttons clearfix">
            <button @click="joint">1</button>
            <button @click="joint">2</button>
            <button @click="joint">3</button>
            <button class="delete" @click="remove">
                <Icon name="delete"></Icon>
            </button>
            <button @click="joint">4</button>
            <button @click="joint">5</button>
            <button @click="joint">6</button>
            <button @click="clear">C</button>
            <button @click="joint">7</button>
            <button @click="joint">8</button>
            <button @click="joint">9</button>
            <button class="ok" @click="confirm">确定</button>
            <button class="zero" @click="joint">0</button>
            <button @click="joint">.</button>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class NumberPad extends Vue {
        @Prop() value!: number;
        output = this.value.toString();

        joint(event: MouseEvent) {
            if (event.target) {
                const button = (event.target as HTMLButtonElement);
                const input = button.textContent as string;
                if (input.length >= 16) return;
                if (this.output === "0") {
                    if ("0123456789".indexOf(input) >= 0) {
                        this.output = input;
                    } else {
                        this.output += input;
                    }
                    return;
                }
                if (this.output.indexOf(".") >= 0) {
                    if (input === ".") return;
                }
                this.output += input;

            }

        }

        remove() {
            this.output = this.output.slice(0, -1);
        }

        confirm() {
            this.$emit("update:value", parseFloat(this.output));
            this.$emit("confirm", parseFloat(this.output));
            this.output = "0";
            window.alert("记录成功");
        }

        clear() {
            this.output = "";
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

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

                &.delete {
                    .icon {
                        width: 16px;
                        height: 16px;
                    }
                }

                &.ok {
                    height: 64px*2;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }

                $bg: #f2f2f2;

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
</style>