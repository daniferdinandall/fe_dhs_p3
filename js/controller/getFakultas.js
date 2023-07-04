import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelMahasiswa } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
export function isiOptionFakultas(results) {
    results.forEach(isiOption);
}

function isiRow(value) {

}

function isiOption(value) {
    let content =
        `<option value='${value._id}' allData='${JSON.stringify(value)}'>${value.nama}</option>`;
    addInner("optionFakultas", content);
}