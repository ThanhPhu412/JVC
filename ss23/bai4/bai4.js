const a = parseInt(prompt("Nhập vào số nguyên dương a:"));
const b = parseInt(prompt("Nhập vào số nguyên dương b:"));
if (a > 0 && b > 0) {
  console.log(`Các số chia hết cho ${b} trong khoảng từ 1 đến ${a}:`);
  for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Số bạn nhập không phải là số nguyên dương.");
}
