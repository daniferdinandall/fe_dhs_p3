import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPImatkul, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    if(getValue("kodematkul") == '' || getValue("nama") == '' || getValue("sks") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Mata Kuliah.');
        return; // Validasi gagal
    }
    let data = {
        kode_matkul : getValue("kodematkul"),
        nama : getValue("nama"),
        sks : parseFloat(getValue("sks")),
    }

    // add Dosen Wali
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];

    if (selectedOptionDosenWali.getAttribute("alldata") == null) {
        alert('Harap Pilih Dosen Wali.');
        return; // Validasi gagal
    }

    data.dosen = JSON.parse(selectedOptionDosenWali.getAttribute("alldata"))
    postData(urlAPImatkul, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "matkul.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
