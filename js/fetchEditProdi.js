import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editProdi.js";
import { urlFetch } from "./config/url_get_detail_prodi.js";

get(urlFetch, isiData)