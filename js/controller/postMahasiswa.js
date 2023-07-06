import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPImahasiswa, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    if(getValue("nama") == '' || getValue("npm") == '') {
        // Tampilkan pesan error jika tidak ada opsi yang dipilih
        alert('Harap Masukan Data Mahasiswa.');
        return; // Validasi gagal
    }
    let data = {
        nama : getValue("nama"),
        npm : parseFloat(getValue("npm")),
    }

    // add nilai fakultas
    let elementMhs = document.getElementById("optionFakultas"); 
    const selectedOption = elementMhs.options[elementMhs.selectedIndex];
    
    // add nilai prodi
    let elementProdi = document.getElementById("optionProdi");
    const selectedOptionProdi = elementProdi.options[elementProdi.selectedIndex];
    
    
    // add nilai Dosen Wali
    let elementDosenWali = document.getElementById("optionDosen");
    const selectedOptionDosenWali = elementDosenWali.options[elementDosenWali.selectedIndex];
    
    // masukan ke data
    if (selectedOption.getAttribute("alldata") == null || selectedOptionDosenWali.getAttribute("alldata") == null || selectedOptionProdi.getAttribute("alldata") == null) {
        alert('Harap Masukan Data Mahasiswa.');
        return; // Validasi gagal
    }
    data.fakultas = JSON.parse(selectedOption.getAttribute("alldata"))
    data.program_studi = JSON.parse(selectedOptionProdi.getAttribute("alldata"))
    data.dosen_wali = JSON.parse(selectedOptionDosenWali.getAttribute("alldata"))
    
    postData(urlAPImahasiswa, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "mahasiswa.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
