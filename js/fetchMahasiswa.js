import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/getMahasiswa.js";
import { urlAPImahasiswa } from "./config/url.js";
get(urlAPImahasiswa, isiTablePresensi);
