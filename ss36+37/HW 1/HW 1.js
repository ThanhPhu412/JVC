function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const message = document.getElementById("message");

  const userAnswer = answerInput.value;
  if (userAnswer.length > 10) {
      message.textContent = "Không hợp lệ";
  } else {
      message.textContent = "Thành công";
  }
}