const urlParams = new URLSearchParams(window.location.search);
const matkulId = urlParams.get('matkulId');

import { urlAPImatkul } from "./url.js";

export let urlPUT = urlAPImatkul + '/' + matkulId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "matkul.html";
} 