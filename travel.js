// ================= ELEMENT REFERENCES =================
const loginNavBtn = document.getElementById("loginNavBtn");
const profileArea = document.getElementById("profileArea");
const profileBtn = document.getElementById("profileBtn");
const profileName = document.getElementById("profileName");

// ================= UPDATE TAMPILAN PROFILE =================
function updateProfileUI(username) {
  if (username) {
    loginNavBtn.style.display = "none";
    profileArea.style.display = "block";
    profileName.textContent = username;
  } else {
    loginNavBtn.style.display = "inline-block";
    profileArea.style.display = "none";
    profileName.textContent = "";
  }
}

// Cek status login yang tersimpan saat halaman dibuka
window.addEventListener("DOMContentLoaded", function () {
  const savedUser = localStorage.getItem("travelUsername");
  updateProfileUI(savedUser);
});

// ================= KLIK PROFILE = LOGOUT =================
profileBtn.addEventListener("click", function () {
  const confirmLogout = confirm("Logout dari akun ini?");
  if (confirmLogout) {
    localStorage.removeItem("travelUsername");
    updateProfileUI(null);
  }
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan kamu berhasil terkirim! Tim kami akan segera menghubungi kamu.");
    contactForm.reset();
  });
}
