const urlParams = new URLSearchParams(window.location.search);
const fakultasId = urlParams.get('fakultasId');

import { urlAPIFakultas } from "./url.js";

export let urlFetch = urlAPIFakultas + '/' + fakultasId