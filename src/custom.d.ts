type RecordType = {
    tags: string[];
    note: string;
    type: string;
    amount: number;
    createTime?: string;

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

