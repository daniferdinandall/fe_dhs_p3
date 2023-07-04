const urlParams = new URLSearchParams(window.location.search);
const dhsId = urlParams.get('dhsId');

import { urlAPIdhs } from "./url.js";

export let urlPUT = urlAPIdhs + '/' + dhsId

export function AmbilResponse(result){
    console.log(result);
    alert(result.message);
    window.location.href = "index.html";
} 