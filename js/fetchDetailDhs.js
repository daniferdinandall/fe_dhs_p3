import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/getDetailDhs.js";
import { urlFetch } from "./config/url_get_detail_dhs.js";

get(urlFetch, isiData)