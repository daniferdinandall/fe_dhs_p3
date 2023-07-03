import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelMatkul } from "../temp/table.js";
export function isiTableMatkul(results) {
    results.forEach(isiRow);
}
export function isiOptionMatkul(results) {
    results.forEach(isiOption);
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


function isiOption(value) {
    // console.log(value)
    // console.log(value.mata_kuliah ? value.mata_kuliah[1].nama : "1")
    let content =
        // `<option value="${value._id}">${value.nama}</option>`
        `
        <br>
        <div class="w-full md:w-9/12">
                        <div class="flex-wrap">
                            <div class="flex flex-wrap -m-3">
                                <div class="w-full md:w-2/3 p-3">
                                    <p class="namaOptionMatakuliah text-sm text-coolGray-800 font-semibold">${value.nama}</p>
                                </div>
                                <div class="w-full md:w-1/3 p-3">
                                    <select id="${value.kode_matkul}" sks="${value.sks}" dosen="${value.dosen.nama}" class="optionMatakuliah w-full px-4 py-2.5 text-base text-black font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input">
                                        class="w-full px-4 py-2.5 text-base text-black font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input">
                                        <option disabled selected value="">Select an option</option>
                                        <option value="A">A</option>
                                        <option value="AB">AB</option>
                                        <option value="B">B</option>
                                        <option value="BC">BC</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <hr style="border-top: 1px solid grey">
        `
    addInner("optionMatkul", content);
}