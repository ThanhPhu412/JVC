const n = parseInt(prompt("Nhập số nguyên dương n:"));

let evenCount = 0;
let num = n;

while (num > 0) {
    const digit = num % 10;
    if (digit % 2 === 0) {
        evenCount++;
    }
    num = Math.floor(num / 10);
}

console.log(`Số lượng chữ số chẵn trong ${n} là: ${evenCount}`);
