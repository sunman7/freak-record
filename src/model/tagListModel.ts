import newId from "@/lib/newId";

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
    update: (id: string, name: string) => "success" | "not found" | "duplicated";
    remove: (id: string) => boolean;
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
        this.data.push({id: newId().toString(), name: name});
        this.save();
        return "success";
    },
    save() {
        window.localStorage.setItem(keyName, JSON.stringify(this.data));
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return "duplicated";
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return "success";
            }
        } else {
            return "not found";
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};
export default tagListModel;