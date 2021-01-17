<template>
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
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Tag extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/style/helper.scss";

         .tags {
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

</style>