let id: number = parseInt(window.localStorage.getItem("_idMax") || "0");

function newId() {
    id++;
    return id;
}

export default newId;