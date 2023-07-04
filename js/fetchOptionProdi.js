import { get } from "https://bukulapak.github.io/api/process.js";
import { isiOptionProdi } from "./controller/getProdi.js";
import { urlAPIProgramStudi } from "./config/url.js";
get(urlAPIProgramStudi, isiOptionProdi);
// get(urlAPImatkul, isiTableMatkul);
