const a = parseInt(prompt("Nhập số nguyên dương a:"));
const b = parseInt(prompt("Nhập số nguyên dương b:"));

const resultArray = [];

for (let i = 1; i <= a; i++) {
    if (i % b === 0 || b % i === 0) {
        resultArray.push(i);
    }
}

console.log("Các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia hết cho a trong khoảng từ 1 đến b:");
console.log(resultArray);
