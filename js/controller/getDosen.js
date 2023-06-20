import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelDosen } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    console.log(value)
    console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
    isiTabelDosen.replace("#KODE#", value.kode_dosen)
            .replace("#NAMA#", value.nama)
            .replace("#PHONE#", value.phone_number?value.phone_number:"#PHONE#")
    addInner("iniTabel", content);
}