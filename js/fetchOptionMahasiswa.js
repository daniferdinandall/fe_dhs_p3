import { get } from "https://bukulapak.github.io/api/process.js";
import { isiOptionMahasiswa } from "./controller/getMahasiswa.js";
import { urlAPImahasiswa } from "./config/url.js";
get(urlAPImahasiswa, isiOptionMahasiswa);
