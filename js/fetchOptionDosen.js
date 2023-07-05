import { get } from "https://bukulapak.github.io/api/process.js";
import { isiOptionDosen } from "./controller/getDosen.js";
import { urlAPIdosen } from "./config/url.js";
get(urlAPIdosen, isiOptionDosen);
// get(urlAPImatkul, isiTableMatkul);
