const urlParams = new URLSearchParams(window.location.search);
const dhsId = urlParams.get('dhsId');

import { urlAPIdhs } from "./url.js";

export let urlFetch = urlAPIdhs + '/' + dhsId