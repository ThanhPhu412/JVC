const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
if (n >= 1) {
    let a = 0;
    let b = 1;
    let fib;

    if (n === 1) {
        fib = 1;
    } else {
        for (let i = 2; i <= n; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
    }
    console.log(`Số Fibonacci thứ ${n} là: ${fib}`);
} else {
    console.log("Số bạn nhập không phải là số nguyên dương.");
}
