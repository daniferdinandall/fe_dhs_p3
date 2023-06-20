import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelMahasiswa } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
        isiTabelMahasiswa.replace("#NAMA#", value.nama)
            .replace("#NPM#", value.npm)
            .replace("#PROGRAM_STUDI#", value.program_studi?value.program_studi.nama:"#PROGRAM_STUDI#")
            .replace("#FAKULTAS#", value.fakultas?value.fakultas.nama:"#FAKULTAS#")
            .replace("#DOSEN_WALI#", value.dosen_wali?value.dosen_wali.nama:"#DOSEN_WALI#");
    addInner("iniTabel", content);
}