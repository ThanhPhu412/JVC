let students = [];
let numStudents = parseInt(prompt("Nhập vào số lượng sinh viên:"));
for (let i = 0; i < numStudents; i++) {
    let id = prompt("Nhập vào ID của sinh viên thứ " + (i + 1) + ":");
    let name = prompt("Nhập vào tên của sinh viên thứ " + (i + 1) + ":");
    students.push({id: id, name: name});
}
console.log(students);
