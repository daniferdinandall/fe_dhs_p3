import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/get.js";
import { urlAPIdhs } from "./config/url.js";
get(urlAPIdhs, isiTablePresensi);