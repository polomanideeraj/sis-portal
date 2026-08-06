const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

const academicsTitle = document.querySelector(".academics-title");
const subMenu = document.querySelector(".sub-menu");

const dashboardHome = document.getElementById("dashboardHome");
const attendanceSection = document.getElementById("attendanceSection");
const gradeSection = document.getElementById("gradeSection");

const dashboardLink = document.getElementById("dashboardLink");
const attendanceLink = document.getElementById("attendanceLink");
const gradeLink = document.getElementById("gradeLink");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

});

academicsTitle.addEventListener("click", function () {

    subMenu.classList.toggle("show");

});

dashboardLink.addEventListener("click", function (e) {

    e.stopPropagation();

    dashboardHome.style.display = "block";
    attendanceSection.style.display = "none";
    gradeSection.style.display = "none";

});

attendanceLink.addEventListener("click", function (e) {

    e.stopPropagation();

    dashboardHome.style.display = "none";
    attendanceSection.style.display = "block";
    gradeSection.style.display = "none";

});

gradeLink.addEventListener("click", function (e) {

    e.stopPropagation();

    dashboardHome.style.display = "none";
    attendanceSection.style.display = "none";
    gradeSection.style.display = "block";

});