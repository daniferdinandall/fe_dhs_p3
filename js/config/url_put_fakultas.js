const urlParams = new URLSearchParams(window.location.search);
const fakultasId = urlParams.get('fakultasId');

import { urlAPIFakultas } from "./url.js";

export let urlPUT = urlAPIFakultas + '/' + fakultasId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "fakultas.html";
} 