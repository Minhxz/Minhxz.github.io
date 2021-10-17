let loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let username = document.querySelector("#Username");
    let password = document.querySelector("#Password");
    if (username.value == "Minh" && password.value == "123") {
        window.location.href = "../index.html";
    } else {
        alert('you stooopid')
    }
});


