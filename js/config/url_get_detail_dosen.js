const urlParams = new URLSearchParams(window.location.search);
const dosenId = urlParams.get('dosenId');

import { urlAPIdosen } from "./url.js";

export let urlFetch = urlAPIdosen + '/' + dosenId