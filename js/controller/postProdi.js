import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPIProgramStudi, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    if(getValue("kode") == '' || getValue("nama") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Program Studi.');
        return; // Validasi gagal
    }
    let data = {
        kode_program_studi : getValue("kode"),
        nama : getValue("nama"),
    }

    postData(urlAPIProgramStudi, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "prodi.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
