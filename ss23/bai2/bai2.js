const soNguyenDuong = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (soNguyenDuong >= 0) {
  let giaiThua = 1;
  for (let i = 1; i <= soNguyenDuong; i++) {
    giaiThua *= i;
  }
  console.log(`Giai thừa của ${soNguyenDuong} là: ${giaiThua}`);
} else {
  console.log("Số bạn nhập không phải là số nguyên dương.");
}
