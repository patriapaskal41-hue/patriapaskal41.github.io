const tombol = document.getElementById("loginBtn");
const pesan = document.getElementById("pesan");

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Fitur lihat password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁️";
    }

});

// Fitur login
tombol.addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const passwordInput = password.value;

    const usernameBenar = "Paskal";
    const passwordBenar = "214131";

    if (username === usernameBenar && passwordInput === passwordBenar) {

        window.location.href = "website.html";

    } else {

        pesan.textContent = "Mohon maaf, username atau password Anda salah.";
        pesan.style.color = "red";

    }

});