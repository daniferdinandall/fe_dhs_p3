import { showLoadingModal, hideLoadingModal } from '../component/loading.js';
import { urlAPILogin } from "../config/url.js";
const login = () => {
    showLoadingModal()
    const e = document.getElementById("email").value;
    const p = document.getElementById("password").value;
    const email = e.trim();
    const password = p.trim();
    if (email == "" || password == "") {
        alert("Please fill all the fields");
        return;
    }

    const data = {
        email: email,
        password: password,
    };

    fetch(urlAPILogin, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.status === 200) {
                // Menyimpan token di local storage
                // console.log(result.tokenString)
                localStorage.setItem("token", result.tokenString);
                localStorage.setItem("nama", result.nama);
                alert("success")
                // .then(() => {
                // Mengarahkan pengguna ke halaman setelah login berhasil
                hideLoadingModal()
                window.location.href = "index.html";
                // });
            } else {
                // Menampilkan pesan error menggunakan SweetAlert
                hideLoadingModal()
                alert(result.message);
            }
        })
        .catch((error) => {
            // Menampilkan pesan error jika terjadi kesalahan
            hideLoadingModal()
            alert("An error occurred. Please try again later.");
            console.error("Error:", error);
        });

}
// Get the button element by its ID
const button = document.getElementById('login');

// Add a click event listener to the button
button.addEventListener('click', login);