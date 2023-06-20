import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelMatkul } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah ? value.mata_kuliah[1].nama : "1")
    let content =
        isiTabelMatkul.replace("#KODE#", value.kode_matkul)
            .replace("#NAMA#", value.nama)
            .replace("#DOSEN#", value.dosen ? value.dosen.nama : "#DOSEN#")
            .replace("#SKS#", value.sks ? value.sks : "#SKS#")
    addInner("iniTabel", content);
}