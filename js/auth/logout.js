const logout = () => {
    if (confirm("Apakah anda yakin ingin Keluar Aplikasi?") == true) {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "login.html"
    }
}

// create if id = "logout" clicked then call logout function
if (document.getElementById("logout")) {
    document.getElementById("logout").addEventListener("click", logout);
}