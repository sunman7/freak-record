let id: number = parseInt(window.localStorage.getItem("_idMax") || "0");

function newId() {
    id++;
    window.localStorage.setItem("_idMax", id.toString());
    return id;
}

export default newId;