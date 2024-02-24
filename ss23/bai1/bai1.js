
const Num = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (Num > 0) {
  for (let i = 1; i <= Num; i++) {
    console.log(i);
  }
} else {
  console.log("Số bạn nhập không phải là số nguyên dương.");
}
