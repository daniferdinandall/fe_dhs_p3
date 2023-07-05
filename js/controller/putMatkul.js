import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_matkul.js";


function editData() {
    console.log("pushData");
    // window.location.href = "index.html";
    // var hari_kerja = getValue("hari_kerja");
    let data = {
        kode_matkul : getValue("kode"),
        nama : getValue("nama"),
        sks : parseFloat(getValue("sks")),
    }

    // add nilai Dosen 
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];
    console.log(selectedOptionDosenWali.getAttribute("allData"))
    data.dosen = JSON.parse(selectedOptionDosenWali.getAttribute("allData"))
    console.log(urlPUT)
    console.log(data)
    
    putData(urlPUT, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "matkul.html";
}

onClick("button", editData);
onClick("buttonCancel", cancel);
