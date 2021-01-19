import clone from "@/lib/clone";

const keyName = "recordList";
const recordStore = {
    recordList: [] as RecordType[],
    initRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(keyName) || "[]") as RecordType[]; //强制声明类型
        return this.recordList;
    },
    save() {
        window.localStorage.setItem(keyName, JSON.stringify(data));
    },
    createRecord(record: RecordType) {
        const deepClone: RecordType = clone(record);
        deepClone.createTime = new Date();
        this.recordList && this.recordList.push(deepClone);
        recordStore.save();
    }
};

recordStore.initRecords();
export default recordStore;