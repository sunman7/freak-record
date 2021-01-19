import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Back from "@/components/Back.vue";
import tagListModel from "@/model/tagListModel";
import recordListModel from "@/model/recordListModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Back", Back);
Vue.component("Icon", Icon);
window.recordList = recordListModel.init();
window.createRecord = (record: RecordType) => recordListModel.create(record);
window.saveRecord =
window.tagList = tagListModel.init();
window.findTag = (id: string) => {
    return window.tagList.filter(t => t.id === id)[0];
};
window.createTag = (name: string) => {
    if (name) {
        const msg = tagListModel.create(name);
        if (msg === "duplicated") {
            window.alert("标签已经存在了，请重新添加");
        } else if (msg === "success") {
            window.alert("添加成功！");
        }
    }
};
window.removeTag = (id: string) => {
    return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
    return tagListModel.update(id, name);
};
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
