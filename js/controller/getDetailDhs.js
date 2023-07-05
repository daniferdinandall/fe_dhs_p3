import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { urlAPIdhs } from "../config/url.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelNilai } from "../temp/table.js";
export function isiData(results) {
    // console.log(results)
    // isi tabel
    let mata_kuliah = results.mata_kuliah;
    mata_kuliah.forEach(isiRow);

    // isi data mahasiswa
    isiDataMhs(results.mahasiswa)

}
function isiRow(value) {
    console.log(value)
    // console.log(value.mata_kuliah?value.mata_kuliah[1].nama:"1")
    let content =
    isiTabelNilai.replace("#NAMA#", value.nama)
            .replace("#SKS#", value.sks?value.sks:"#SKS#")
            .replace("#DOSEN#", value.dosen.nama ? value.dosen.nama : "#DOSEN#")
            .replace("#NILAI#", value.nilai ? value.nilai : "#NILAI#")
    // .replace("#WARNA#", getRandomColor())
    // .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("tabelNilai", content);
}

function isiDataMhs(value) {
    let nama = value.nama;
    console.log(value)
    addInner("namaMhs", nama);
    let npm = value.npm;
    addInner("npmMhs", npm);
    let fakultas = value.fakultas.nama;
    addInner("fakultasMhs", fakultas);
    let prodi = value.program_studi.nama;
    addInner("prodiMhs", prodi);
}