import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Record from "@/views/Record.vue";
import Label from "@/components/Label.vue";
import NotFound from "@/components/NotFound.vue";
import Details from "@/views/Details.vue";
import newTag from "@/views/newTag.vue";
import Statistic from "@/views/Statistic.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/details"
    },
    {
        path: "/record",
        component: Record,
    },
    {
        path: "/newtag",
        component: newTag
    }
    , {
        path: "/label",
        component: Label
    },
    {
        path: "/details",
        component: Details
    },
    {
        path: "/stat",
        component: Statistic
    },
    {
        path: "*",
        component: NotFound
    },
];

const router = new VueRouter({
    routes,
});

export default router;
