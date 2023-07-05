import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPImahasiswa, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    // window.location.href = "index.html";
    // var hari_kerja = getValue("hari_kerja");
    let data = {
        nama : getValue("nama"),
        npm : parseFloat(getValue("npm")),
    }

    // add nilai fakultas
    let elementMhs = document.getElementById("optionFakultas"); 
    const selectedOption = elementMhs.options[elementMhs.selectedIndex];
    console.log(selectedOption.getAttribute("alldata"))
    data.fakultas = JSON.parse(selectedOption.getAttribute("alldata"))

    // add nilai prodi
    let elementProdi = document.getElementById("optionProdi");
    const selectedOptionProdi = elementProdi.options[elementProdi.selectedIndex];
    console.log(selectedOptionProdi.getAttribute("alldata"))
    data.program_studi = JSON.parse(selectedOptionProdi.getAttribute("alldata"))


    // add nilai Dosen Wali
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];
    console.log(selectedOptionDosenWali.getAttribute("alldata"))
    data.dosen_wali = JSON.parse(selectedOptionDosenWali.getAttribute("alldata"))
    console.log(data)
    postData(urlAPImahasiswa, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "mahasiswa.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
