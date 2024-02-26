const n = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (n >= 1) {
    console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${n}:`);
    for (let i = 2; i <= n; i += 2) {
        const square = i * i;
        console.log(`${i}^2 = ${square}`);
    }
} else {
    console.log("Số bạn nhập không phải là số nguyên dương.");
}
