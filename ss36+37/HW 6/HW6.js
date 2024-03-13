document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var studentId = document.getElementById('studentId').value;
  var studentName = document.getElementById('studentName').value;
  var age = document.getElementById('age').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  document.getElementById('studentInfo').innerHTML = 'Student Id: ' + studentId + '<br>Student Name: ' + studentName + '<br>Age: ' + age + '<br>Phone: ' + phone + '<br>Email: ' + email;
});