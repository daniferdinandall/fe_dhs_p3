const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get('mahasiswaId');

import { urlAPImahasiswa } from "./url.js";

export let urlPUT = urlAPImahasiswa + '/' + mahasiswaId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "mahasiswa.html";
} 