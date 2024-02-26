var n = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (n >= 1) {
    let soDaoNguoc = 0;
   
    while (n > 0) {
        soDaoNguoc = soDaoNguoc * 10 + n % 10;
        n= Math.floor(n / 10);
    }

    console.log(`Số đảo ngược của ${n} là: ${soDaoNguoc}`);
} else {
    console.log("Số bạn nhập không phải là số nguyên dương.");
}
