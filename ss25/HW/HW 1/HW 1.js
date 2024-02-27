const n = parseInt(prompt("Nhập một số nguyên dương:"));

let sum = 0;
for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i;
}

if (sum % 2 === 0) {
    sum += 1;
}

console.log("Tổng các số là:", sum);
