import tagStore from "@/store/tagStore";
import recordStore from "@/store/recordStore";

const store = {
    ...tagStore,
    ...recordStore
};
export default store;