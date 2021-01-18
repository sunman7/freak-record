const keyName = "tagList";
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    init: () => Tag[];
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
        const names = this.data.map(tag => tag.name);
        if (names.indexOf(name) >= 0) {
            return "duplicated";
        }
        this.data.push({id: name, name: name});
        this.save();
        return "success";
    },
    save() {
        window.localStorage.setItem(keyName, JSON.stringify(this.data));
    }
};
export default tagListModel;