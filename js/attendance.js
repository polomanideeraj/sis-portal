const attendanceStudent = getCurrentStudent();

const attendanceTable = document.getElementById("attendanceTable");

function loadAttendance() {

    attendanceTable.innerHTML = "";

    const attendanceList = attendanceStudent.attendance["Semester V"];

    attendanceList.forEach(function(subject) {

        const row = document.createElement("tr");

       row.innerHTML = `
    <td>${subject.serial}</td>
    <td>${subject.subject}</td>
    <td>${subject.section}</td>
    <td>${subject.sessions}</td>
    <td>${subject.attended}</td>
    <td>${subject.percentage}</td>
`;

        attendanceTable.appendChild(row);

    });

}

loadAttendance();