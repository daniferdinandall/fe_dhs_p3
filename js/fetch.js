import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/get.js";
import { isiOptionMatkul } from "./controller/getMatkul.js";
import { urlAPIdhs, urlAPImatkul } from "./config/url.js";
get(urlAPIdhs, isiTablePresensi);
// get(urlAPImatkul, isiOptionMatkul);