

function readAllSvg() {
    const out: string[] = [];
    const files = require.context('@/assets/icons/tagsicon', true, /\.svg$/);
    for(let i =0;i<files.keys().length;i++){
        out.push(files.keys()[i].split("./")[1].split(".")[0]);
    }
    return out;


}
export default readAllSvg;