import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPIdosen, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    
    if (getValue("kode") == '' || getValue("nama") == '' || getValue("phone") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Mahasiswa.');
        return; // Validasi gagal
    }

    let data = {
        kode_dosen : getValue("kode"),
        nama : getValue("nama"),
        phone_number : getValue("phone"),
    }

    postData(urlAPIdosen, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "dosen.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
