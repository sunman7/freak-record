import Vue from "vue";
import Vuex from "vuex";
import clone from "@/lib/clone";
import newId from "@/lib/newId";

Vue.use(Vuex);
const recordKeyName = "recordList";
const tagKeyName = "tagList";
type RootState = {
    recordList: RecordType[];
    tagList: Tag[];
    currentTag: Tag | undefined;
}
const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined,
    } as RootState,
    mutations: {
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter(t => t.id === id)[0];
        },
        createRecord(state, record: RecordType) {
            const deepClone: RecordType = clone(record);
            deepClone.createTime = new Date();
            state.recordList.push(deepClone);
            store.commit("saveRecords");
        },
        initRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(recordKeyName) || "[]") as RecordType[]; //强制声明类型
        },
        saveRecords(state) {
            window.localStorage.setItem(recordKeyName, JSON.stringify(state.recordList));
        },
        initTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem(tagKeyName) || "[]");
        },
        findTag(state, id: string) {
            return state.tagList.filter(t => t.id === id)[0];
        },
        createTag(state, name: string) {
            const names = state.tagList.map(tag => tag.name);
            if (names.indexOf(name) >= 0) {
                window.alert("标签名重复了");
            }
            state.tagList.push({id: newId().toString(), name: name});
            store.commit("saveTags");
            window.alert("添加成功");
        },
        removeTag(state, id: string) {
            let index = -1;
            for (let i = 0; i < this.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit("saveTags");
        },
        updateTag(state, {id, newName}) {
            const idList = state.tagList.map(item => item.id);
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name);
                if (names.indexOf(name) < 0) {
                    const tag = state.tagList.filter(item => item.id === id)[0];
                    tag.name = newName;
                    store.commit("saveTags");
                }
            }
        },
        saveTags() {
            window.localStorage.setItem(tagKeyName, JSON.stringify(this.tagList));
        }
    },
    actions: {},
    modules: {}
});
export default store;
