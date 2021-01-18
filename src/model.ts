
const keyName = "recordList";
const model = {
    init() {
        return JSON.parse(window.localStorage.getItem(keyName) || "[]");
    },
    save(data: RecordType[]) {
        window.localStorage.setItem(keyName, JSON.stringify(data));
    }
};
export default model;