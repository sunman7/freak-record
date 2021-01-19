type RecordType = {
    tags: string[];
    note: string;
    type: string;
    amount: number;
    createTime: Date;

}
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

interface Window {
    tagList: Tag[];
    recordList: RecordType[];
    createRecord: (record: RecordType) => void;
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    findTag: (id: string) => Tag | undefined;
    updateTag: TagListModel["update"]; //跟这个方法一样


}