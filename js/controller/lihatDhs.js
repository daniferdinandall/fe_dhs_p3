import { onClick } from "https://bukulapak.github.io/element/process.js";

function cancel() {
    console.log("cancel");
    window.location.href = "index.html";
}

onClick("buttonCancel", cancel);
