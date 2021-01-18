const keyName = "recordList";
const recordListModel = {
    clone(data: RecordType[] | RecordType) {
        return JSON.parse(JSON.stringify(data));
    },
    init() {
        return JSON.parse(window.localStorage.getItem(keyName) || "[]") as RecordType[]; //强制声明类型
    },
    save(data: RecordType[]) {
        window.localStorage.setItem(keyName, JSON.stringify(data));
    }
};
export default recordListModel;