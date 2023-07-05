import { addInner } from "https://bukulapak.github.io/element/process.js";
import { urlAPIFakultas } from "../config/url.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelFakultas } from "../temp/table.js";
export function isiTable(results) {
    results.forEach(isiRow);
}
export function isiOptionFakultas(results) {
    results.forEach(isiOption);
}

function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
    isiTabelFakultas.replace("#KODE#", value.kode_fakultas)
            .replace("#NAMA#", value.nama)
            .replace("#IDEDIT#", value._id)
            .replace("#IDELETE#", value._id)
            .replace("#URL#", urlAPIFakultas);
    addInner("iniTabel", content);
}

function isiOption(value) {
    let content =
        `<option value='${value._id}' allData='${JSON.stringify(value)}'>${value.nama}</option>`;
    addInner("optionFakultas", content);
}