
document.getElementById("log_btn").addEventListener("click", function () {
    const email = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (email == "tauhid" && password == "14325") {
        window.location.href = "https://shahiduzzamantauhid.github.io/bap-er-bank/dashboard.html";
    } else {
        alert("Invalid Username or Password");
        // window.location.href = "http://127.0.0.1:5500/login.html";
    }
});

