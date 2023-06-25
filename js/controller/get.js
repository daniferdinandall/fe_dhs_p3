import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
        isiTabel.replace("#NAMA#", value.mahasiswa.nama)
            .replace("#NPM#", value.mahasiswa.npm)
            .replace("#PROGRAM_STUDI#", value.mahasiswa.program_studi?value.mahasiswa.program_studi.nama:"#PROGRAM_STUDI#")
            .replace("#FAKULTAS#", value.mahasiswa.fakultas?value.mahasiswa.fakultas.nama:"#FAKULTAS#")
            // .replace("#WARNA#", getRandomColor())
            // .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}