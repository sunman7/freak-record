import recordListModel from "@/model/recordListModel";
import tagListModel from "@/model/tagListModel";

const store = {
    recordList: recordListModel.init(),
    tagList: tagListModel.init(),
    createRecord: (record: RecordType) => recordListModel.create(record),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        if (name) {
            const msg = tagListModel.create(name);
            if (msg === "duplicated") {
                window.alert("标签已经存在了，请重新添加");
            } else if (msg === "success") {
                window.alert("添加成功！");
            }
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
};
export default store;