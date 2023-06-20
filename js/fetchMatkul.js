import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/getMatkul.js";
import { urlAPImatkul } from "./config/url.js";
get(urlAPImatkul, isiTablePresensi);
