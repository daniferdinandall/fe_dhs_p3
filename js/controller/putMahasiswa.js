import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_mahasiswa.js";


function editData() {
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
    console.log(selectedOption.getAttribute("allData"))
    data.fakultas = JSON.parse(selectedOption.getAttribute("allData"))

    // add nilai prodi
    let elementProdi = document.getElementById("optionProdi");
    const selectedOptionProdi = elementProdi.options[elementProdi.selectedIndex];
    console.log(selectedOptionProdi.getAttribute("allData"))
    data.program_studi = JSON.parse(selectedOptionProdi.getAttribute("allData"))


    // add nilai Dosen Wali
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];
    console.log(selectedOptionDosenWali.getAttribute("allData"))
    data.dosen_wali = JSON.parse(selectedOptionDosenWali.getAttribute("allData"))
    console.log(urlPUT)
    console.log(data)
    
    putData(urlPUT, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "mahasiswa.html";
}

onClick("button", editData);
onClick("buttonCancel", cancel);
