import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editDhs.js";
import { urlFetch } from "./config/url_get_detail_dhs.js";

get(urlFetch, isiData)