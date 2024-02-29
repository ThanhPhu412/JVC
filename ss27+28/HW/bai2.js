let a = parseInt(prompt("Nhập vào số nguyên a:"));
let b = parseInt(prompt("Nhập vào số nguyên b:"));
let arr = [];
for (let i = a + 1; i < b; i++) {
    arr.push(i);
}

console.log('Mảng chứa tất cả các số trong khoảng giữa a và b:', arr);
