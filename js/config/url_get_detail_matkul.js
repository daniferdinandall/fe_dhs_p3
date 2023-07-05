const urlParams = new URLSearchParams(window.location.search);
const matkulId = urlParams.get('matkulId');

import { urlAPImatkul } from "./url.js";

export let urlFetch = urlAPImatkul + '/' + matkulId