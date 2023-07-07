import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTable } from "./controller/getFakultas.js";
import { urlAPIFakultas } from "./config/url.js";
get(urlAPIFakultas, isiTable);
