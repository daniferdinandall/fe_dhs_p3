import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPImatkul, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    // window.location.href = "index.html";
    // var hari_kerja = getValue("hari_kerja");
    let data = {
        kode_matkul : getValue("kodematkul"),
        nama : getValue("nama"),
        sks : parseFloat(getValue("sks")),
    }

    // add Dosen Wali
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];
    console.log(selectedOptionDosenWali.getAttribute("alldata"))
    data.dosen = JSON.parse(selectedOptionDosenWali.getAttribute("alldata"))
    console.log(data)
    postData(urlAPImatkul, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "matkul.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
