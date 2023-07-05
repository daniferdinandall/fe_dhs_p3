import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelProdi } from "../temp/table.js";
export function isiTable(results) {
    results.forEach(isiRow);
}
export function isiOptionProdi(results) {
    results.forEach(isiOption);
}

function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
    isiTabelProdi.replace("#KODE#", value.kode_program_studi)
            .replace("#NAMA#", value.nama)
    addInner("iniTabel", content);
}

function isiOption(value) {
    let content =
        `<option value='${value._id}' allData='${JSON.stringify(value)}'>${value.nama}</option>`;
    addInner("optionProdi", content);
}