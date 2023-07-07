import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editFakultas.js";
import { urlFetch } from "./config/url_get_detail_fakultas.js";

get(urlFetch, isiData)