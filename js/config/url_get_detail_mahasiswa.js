const urlParams = new URLSearchParams(window.location.search);
const mahasiswaId = urlParams.get('mahasiswaId');

import { urlAPImahasiswa } from "./url.js";

export let urlFetch = urlAPImahasiswa + '/' + mahasiswaId