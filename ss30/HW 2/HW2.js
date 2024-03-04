let n = parseInt(prompt("Nhập vào số nguyên dương n:"));
let arr = [];
if (n % 2 !== 0) {
    for (let i = 1; i <= n; i += 2) {
        arr.push(i);
    }
} else {
    for (let i = 1; i < n; i += 2) {
        arr.push(i);
    }
}
console.log(arr);
