import { get } from "https://bukulapak.github.io/api/process.js";
import { isiOptionFakultas } from "./controller/getFakultas.js";
import { urlAPIFakultas } from "./config/url.js";
get(urlAPIFakultas, isiOptionFakultas);
// get(urlAPImatkul, isiTableMatkul);
