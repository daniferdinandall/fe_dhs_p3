import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_dosen.js";


function editData() {
    console.log("pushData");
    if(getValue("kode") == '' || getValue("nama") == '' || getValue("phone") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Dosen.');
        return; // Validasi gagal
    }

    let data = {
        kode_dosen : getValue("kode"),
        nama : getValue("nama"),
        phone_number : getValue("phone"),
    }
    
    putData(urlPUT, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "dosen.html";
}

onClick("button", editData);
onClick("buttonCancel", cancel);
