import { showLoadingModal, hideLoadingModal } from './component/loading.js';
import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/editDhs.js";
import { urlFetch } from "./config/url_get_detail_dhs.js";
showLoadingModal()
get(urlFetch, isiData)