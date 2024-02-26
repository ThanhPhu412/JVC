const n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

if (n >= 1) {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum += 1 / Math.pow(i, 3);
    }
    const roundedSum = sum.toFixed(5);

    console.log(`Kết quả của biểu thức S là: ${roundedSum}`);
} else {
    console.log("Số bạn nhập không phải là số nguyên dương.");
}
