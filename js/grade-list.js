const gradeStudent = getCurrentStudent();

const semesterSelect = document.getElementById("semesterSelect");
const gradeTable = document.getElementById("gradeTable");

// Get all semesters
const semesters = Object.keys(gradeStudent.grades);

// Fill semester dropdown
semesters.forEach(function (semester) {

    const option = document.createElement("option");

    option.value = semester;
    option.textContent = semester;

    semesterSelect.appendChild(option);

});

// Select first semester
semesterSelect.value = semesters[0];

// Load first semester
loadGrades(semesters[0]);

// Change semester
semesterSelect.addEventListener("change", function () {

    loadGrades(this.value);

});

// Function to display grades
function loadGrades(semester) {

    gradeTable.innerHTML = "";

    const gradeList = gradeStudent.grades[semester];

    // Display above the table
    document.getElementById("Year").textContent = gradeList[0].year;
    document.getElementById("Semester").textContent = semester;

    gradeList.forEach(function (subject, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${subject.subject}</td>
            <td>${subject.units}</td>
            <td>${subject.grade}</td>
            <td>${index === 0 ? subject.cumulativeUnits : ""}</td>
            <td>${index === 0 ? subject.cgpa : ""}</td>
        `;

        gradeTable.appendChild(row);

    });

}