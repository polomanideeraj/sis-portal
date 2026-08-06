const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        sessionStorage.removeItem("currentStudent");

        window.location.href = "../index.html";

    }

});