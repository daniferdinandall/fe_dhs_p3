const urlParams = new URLSearchParams(window.location.search);
const prodiId = urlParams.get('prodiId');

import { urlAPIProgramStudi } from "./url.js";

export let urlPUT = urlAPIProgramStudi + '/' + prodiId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "prodi.html";
} 