import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_prodi.js";


function editData() {
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
    
    putData(urlPUT, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "prodi.html";
}

onClick("button", editData);
onClick("buttonCancel", cancel);
