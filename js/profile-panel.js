const profileBtn = document.getElementById("profileBtn");
const profilePanel = document.getElementById("profilePanel");

profileBtn.addEventListener("click", function () {

    profilePanel.classList.toggle("active");

});

document.addEventListener("click", function (event) {

    if (
        !profilePanel.contains(event.target) &&
        !profileBtn.contains(event.target)
    ) {

        profilePanel.classList.remove("active");

    }

});