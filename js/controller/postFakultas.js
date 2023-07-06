import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPIFakultas, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    if(getValue("kode") == '' || getValue("nama") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Fakultas.');
        return; // Validasi gagal
    }
    let data = {
        kode_fakultas : getValue("kode"),
        nama : getValue("nama"),
    }

    postData(urlAPIFakultas, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "fakultas.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
