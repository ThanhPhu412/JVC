const n = parseInt(prompt("Nhập số nguyên dương n:"));

let sum = 0;
let currentTerm = 0;

for (let i = 1; i <= n; i++) {
    currentTerm = currentTerm * 10 + i;
    sum += currentTerm;
}

console.log(`Giá trị của biểu thức S = 1 + 12 + 123 + ... + 12...n là: ${sum}`);
