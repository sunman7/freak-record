import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Record from "@/components/Record.vue";
import Label from "@/components/Label.vue";
import Statistic from "@/components/Statistic.vue";
import NotFound from "@/components/NotFound.vue";
import NewTag from "@/components/NewTag.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        component: Statistic
    },
    {
        path: "/record",
        component: Record
    }, {
        path: "/label",
        component: Label
    },
    {
        path: "/statistic",
        component: Statistic
    },
    {
        path: "/newTag",
        component: NewTag
    },
    {
        path: "*",
        component: NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router;
