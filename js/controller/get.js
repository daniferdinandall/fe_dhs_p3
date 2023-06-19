import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = isiTabel
      .replace("#NAMA#", value.biodata.nama)
      .replace("#NOHP#", value.biodata.phone_number)
      .replace("#JABATAN#", value.biodata.jabatan)
      .replace("#LOKASI#", value.absensi.location)
      .replace("#TANGGAL#", value.absensi.waktug.tanggal)
      .replace("#GAJIPOKOK#", value.gaji_pokok)
      .replace("#JAMMASUK#", value.bonus.jam_masuk)
      .replace("#JAMKELUAR#", value.bonus.jam_keluar)
      .replace("#WARNA#", getRandomColor())
      .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
  }