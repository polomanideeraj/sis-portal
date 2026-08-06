const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

const enrollInput = document.getElementById("enrollNo");
const passwordInput = document.getElementById("password");

submitBtn.addEventListener("click", function () {

    const enrollmentNumber = enrollInput.value.trim();

    sessionStorage.setItem("currentStudent", enrollmentNumber);

    window.location.href = "html/dashboard.html";

});

resetBtn.addEventListener("click", function () {

    enrollInput.value = "";
    passwordInput.value = "";

    enrollInput.focus();

});