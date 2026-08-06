function getCurrentStudent() {

    const currentStudentId = sessionStorage.getItem("currentStudent");

    if (!currentStudentId) {

        window.location.href = "index.html";
        return null;

    }

    if (!students[currentStudentId]) {

        window.location.href = "index.html";
        return null;

    }

    return students[currentStudentId];

}