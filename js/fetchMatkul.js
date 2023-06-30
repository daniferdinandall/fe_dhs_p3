import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableMatkul } from "./controller/getMatkul.js";
import { urlAPImatkul } from "./config/url.js";
// get(urlAPImatkul, isiOptionMatkul);
get(urlAPImatkul, isiTableMatkul);
