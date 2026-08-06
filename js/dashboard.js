const currentStudentId = sessionStorage.getItem("currentStudent");

if (!currentStudentId) {

    window.location.href = "index.html";

}

const student = students[currentStudentId];

if (!student) {
document.getElementById("studentName").textContent = "Welcome";

} else {

    document.getElementById("studentName").textContent = student.name;

    document.getElementById("topProfileImage").src = student.photo;

    document.getElementById("profileImage").src = student.photo;

    document.getElementById("profileName").textContent = student.name;

    document.getElementById("profileEnrollment").textContent =
        student.enrollmentNo;

}

document.getElementById("profileDepartment").textContent =
    "Department : Computer Science & Engineering";

    document.getElementById("studentEnroll").textContent =
    student.enrollmentNo;

document.getElementById("welcomeName").textContent =
    student.name;