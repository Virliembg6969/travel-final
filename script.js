const login = document.getElementById("loginBtn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const okBtn = document.getElementById("okBtn");

const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

// Fungsi menampilkan popup
function showPopup(text) {
    popupText.textContent = text;
    popup.style.display = "flex";
}

// Tombol OK pada popup
okBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

// Show / Hide Password
showPassword.addEventListener("change", function () {
    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

// Login
login.addEventListener("click", function () {
    let user = document.getElementById("username").value.trim();
    let pass = password.value.trim();

    // Username minimal 5 karakter
    if (user.length < 5) {
        showPopup("Username minimal 5 karakter!");
        return;
    }

    // Huruf pertama username harus kapital
    if (user.charAt(0) !== user.charAt(0).toUpperCase()) {
        showPopup("Huruf pertama username harus kapital!");
        return;
    }

    // Password minimal 6 maksimal 16 karakter
    if (pass.length < 6 || pass.length > 16) {
        showPopup("Password harus 6-16 karakter!");
        return;
    }

    // Password harus mengandung angka
    if (!/\d/.test(pass)) {
        showPopup("Password harus mengandung minimal 1 angka!");
        return;
    }

    // Huruf pertama password harus kapital
    if (pass.charAt(0) !== pass.charAt(0).toUpperCase()) {
        showPopup("Huruf pertama password harus kapital!");
        return;
    }

    // Berhasil -> simpan status login, lalu balik ke web utama
    localStorage.setItem("travelUsername", user);
    showPopup("Login berhasil! Mengarahkan kembali ke beranda...");

    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000);
});
