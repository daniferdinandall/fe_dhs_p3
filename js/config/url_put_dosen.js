const urlParams = new URLSearchParams(window.location.search);
const dosenId = urlParams.get('dosenId');

import { urlAPIdosen } from "./url.js";

export let urlPUT = urlAPIdosen + '/' + dosenId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "dosen.html";
} 