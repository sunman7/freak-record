type RootState = {
    recordList: RecordType[];
    tagList: TagType[];
    currentTag: TagType | undefined;
    createRecordError: Error | null;
    createTagError: Error | null;
}
type RecordType = {
    tagId?: TagType;
    note: string;
    type: string;
    amount: number;
    createTime?: string;

}
type TagType = {
    id: string;
    name: string;
}


