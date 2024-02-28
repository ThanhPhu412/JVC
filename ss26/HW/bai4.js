let a = parseInt(prompt("Nhập vào số nguyên dương a:"));
let b = parseInt(prompt("Nhập vào số nguyên dương b:"));

let arr = [];

for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
        arr.push(i);
    }
}
for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
        arr.push(i);
    }
}

console.log('Mảng gồm các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia hết cho a trong khoảng từ 1 đến b:', arr);
