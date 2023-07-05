import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editDosen.js";
import { urlFetch } from "./config/url_get_detail_dosen.js";

get(urlFetch, isiData)