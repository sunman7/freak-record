const keyName = "tagList";
type TagListModel = {
    data: string[];
    init: () => string[];
    create: (name: string) => "success" | "duplicated";
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    init() {
        this.data = JSON.parse(window.localStorage.getItem(keyName) || "[]");
        return this.data;
    },
    create(name: string) {
        if (this.data.indexOf(name) >= 0) {
            return "duplicated";
        }
        this.data.push(name);
        this.save();
        return "success";
    },
    save() {
        window.localStorage.setItem(keyName, JSON.stringify(this.data));
    }
};
export default tagListModel;