import clone from "@/lib/clone";

const keyName = "recordList";
const recordListModel = {
    data: [] as RecordType[],
    init() {
        return JSON.parse(window.localStorage.getItem(keyName) || "[]") as RecordType[]; //强制声明类型
    },
    save() {
        window.localStorage.setItem(keyName, JSON.stringify(this.data));
    },
    create(record: RecordType) {
        const deepClone: RecordType = clone(record);
        deepClone.createTime = new Date();
        this.data.push(deepClone);
        this.save();
    }
};
export default recordListModel;