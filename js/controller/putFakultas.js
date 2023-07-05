import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_fakultas.js";


function editData() {
    console.log("pushData");
    // window.location.href = "index.html";
    // var hari_kerja = getValue("hari_kerja");
    let data = {
        kode_fakultas : getValue("kode"),
        nama : getValue("nama"),
    }
    
    putData(urlPUT, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "fakultas.html";
}

onClick("button", editData);
onClick("buttonCancel", cancel);
