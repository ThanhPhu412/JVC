const randomNumber = Math.floor(Math.random() * 10) + 1;
const userNumber = parseInt(prompt("Nhập vào một số từ 1 đến 10"));

while (userNumber !== randomNumber) {
    if (userNumber > randomNumber) {
        console.log("Số bạn nhập lớn hơn số ngẫu nhiên. Hãy thử lại!");
    } else {
        console.log("Số bạn nhập nhỏ hơn số ngẫu nhiên. Hãy thử lại!");
    }
    userNumber = parseInt(prompt("Nhập vào một số từ 1 đến 10"));
}

console.log("Chúc mừng! Bạn đã đoán đúng số.");