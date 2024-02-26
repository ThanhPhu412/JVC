const n = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (n >= 1) {
    let sum = 0;

    console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${n}:`);
    for (let i = 2; i <= n; i += 2) {
        const square = i * i;
        sum += square;
        if (sum >= n) {
            break;
        }
        console.log(`${i}^2 = ${square}`);
    }

    console.log(`Tổng các số nguyên dương chẵn đã in ra: ${sum}`);
} else {
    console.log("Số bạn nhập không phải là số nguyên dương.");
}
