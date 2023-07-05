import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editMatkul.js";
import { urlFetch } from "./config/url_get_detail_matkul.js";

get(urlFetch, isiData)