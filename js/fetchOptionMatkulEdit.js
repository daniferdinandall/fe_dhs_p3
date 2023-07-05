import { get } from "https://bukulapak.github.io/api/process.js";
import { isiOptionMatkul } from "./controller/getMatkulEdit.js";
import { urlAPImatkul } from "./config/url.js";
get(urlAPImatkul, isiOptionMatkul);
// get(urlAPImatkul, isiTableMatkul);
