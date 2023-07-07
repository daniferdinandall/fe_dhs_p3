const urlParams = new URLSearchParams(window.location.search);
const prodiId = urlParams.get('prodiId');

import { urlAPIProgramStudi } from "./url.js";

export let urlFetch = urlAPIProgramStudi + '/' + prodiId