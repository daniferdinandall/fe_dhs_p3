import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/getDosen.js";
import { urlAPIdosen } from "./config/url.js";
get(urlAPIdosen, isiTablePresensi);
