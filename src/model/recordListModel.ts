import clone from "@/lib/clone";

const keyName = "recordList";
const recordListModel = {
    data: [] as RecordType[],
    init() {
        return JSON.parse(window.localStorage.getItem(keyName) || "[]") as RecordType[]; //强制声明类型
    },
    save(data: RecordType[]) {
        window.localStorage.setItem(keyName, JSON.stringify(data));
    },
    create(record: RecordType) {
        const deepClone: RecordType = clone(record);
        deepClone.createTime = new Date();
        this.data.push(deepClone);
    }
};
export default recordListModel;