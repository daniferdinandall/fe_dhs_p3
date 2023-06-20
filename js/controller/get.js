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
            .replace("#MATKUL#", value.mata_kuliah?value.mata_kuliah[0].nama:"#MATKUL#")
            .replace("#NILAI#", value.mata_kuliah?value.mata_kuliah[0].nilai:"#NILAI#")
            .replace("#MATKUL1#", value.mata_kuliah?value.mata_kuliah[1].nama:"#MATKUL1#")
            .replace("#NILAI1#", value.mata_kuliah?value.mata_kuliah[1].nilai:"#NILAI1#")
            .replace("#MATKUL2#", value.mata_kuliah?value.mata_kuliah[2].nama:"#MATKUL2#")
            .replace("#NILAI2#", value.mata_kuliah?value.mata_kuliah[2].nilai:"#NILAI2#")
            .replace("#MATKUL3#", value.mata_kuliah?value.mata_kuliah[3].nama:"#MATKUL3#")
            .replace("#NILAI3#", value.mata_kuliah?value.mata_kuliah[3].nilai:"#NILAI3#")
            // .replace("#WARNA#", getRandomColor())
            // .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}