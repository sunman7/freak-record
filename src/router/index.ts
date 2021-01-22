import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Record from "@/components/Record.vue";
import Label from "@/components/Label.vue";
import NotFound from "@/components/NotFound.vue";
import EditLabel from "@/components/EditLabel.vue";
import Details from "@/components/Details.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/details"
    },
    {
        path: "/record",
        component: Record
    }, {
        path: "/label",
        component: Label
    },
    {
        path: "/details",
        component: Details
    },
    {
        path: "/label/edit/:id",
        component: EditLabel
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
