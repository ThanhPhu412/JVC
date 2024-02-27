const a = parseInt(prompt("Nhập số nguyên dương a:"));
const b = parseInt(prompt("Nhập số nguyên dương b:"));

let sumOdd = 0;
let sumEven = 0;

for (let i = a + 1; i < b; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log(`Tổng các số lẻ từ ${a + 1} đến ${b - 1}: ${sumOdd}`);
console.log(`Tổng các số chẵn từ ${a + 1} đến ${b - 1}: ${sumEven}`);
