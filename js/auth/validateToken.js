
import { urlAPIValidate } from "../config/url.js";
function checkAuthentication() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    var raw = JSON.stringify({
        tokenstring: token,
    });
    // alert(token);
    if (!token) {
        redirectToSignIn();
    } else {
        // Make a GET request to the autentikasi endpoint
        fetch(urlAPIValidate, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                } else {
                    redirectToSignIn();
                }
            })
            .catch((error) => {
                console.log("Error:", error);
                redirectToSignIn();
            });
    }
}

function redirectToSignIn() {
    alert("Please login first");
    //   .then((result) => {
    // Redirect to login.html
    // const currentLocation = window.location.pathname;
    // if (currentLocation.includes("admin")) {
    window.location.href = "login.html";
    // } else {
    //   window.location.href = "auth/login.html";
    // }
    //   });
}
window.onload = checkAuthentication;
