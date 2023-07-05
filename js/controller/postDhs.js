import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlAPIdhs, AmbilResponse } from "../config/url.js";


function pushData() {
    console.log("pushData");
    // window.location.href = "index.html";
    // var hari_kerja = getValue("hari_kerja");
    let data = {
        mata_kuliah:[]
    }

    // loop nilai mata_kuliah
    let dataNamaMatkul = [];
    var elements = document.getElementsByClassName("optionMatakuliah");
    var elements2 = document.getElementsByClassName("namaOptionMatakuliah");
    for(var i = 0; i < elements2.length; i++){
        var element = elements2[i];
        var id = element.id;
        var value = element.innerHTML;
        dataNamaMatkul.push(value);
        // console.log("Kelas: optionMatakuliah, ID: " + id);
    }
    console.log(dataNamaMatkul)

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var id = element.id;
        var value = element.value;
        var sks = element.getAttribute("sks");
        var dosen = element.getAttribute("dosen");
        data.mata_kuliah.push({
            "kode_matkul": id,
            "nama": dataNamaMatkul[i],
            "nilai": value,
            "sks": parseInt(sks),
            "dosen": {
                "nama": dosen
            }
        });
        console.log(sks, dosen);
    }
    console.log(data.mata_kuliah[0]);

    // add nilai mahasiswa
    let elementMhs = document.getElementById("optionMahasiswa"); 
    const selectedOption = elementMhs.options[elementMhs.selectedIndex];
    console.log(selectedOption.getAttribute("alldata"))
    data.mahasiswa = JSON.parse(selectedOption.getAttribute("alldata"))
    // console.log(getValue("optionMahasiswa"))

    postData(urlAPIdhs, data, AmbilResponse);

    // window.location.href = "index.html";
}

function cancel() {
    console.log("cancel");
    window.location.href = "index.html";
}

onClick("button", pushData);
onClick("buttonCancel", cancel);
