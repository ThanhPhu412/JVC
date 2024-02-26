const a = parseInt(prompt("Nhập vào số nguyên a:"));
const b = parseInt(prompt("Nhập vào số nguyên b:"));
if (!isNaN(a) && !isNaN(b)) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(`Tổng các số nguyên từ ${a} đến ${b} là: ${sum}`);
} else {
    console.log("Vui lòng nhập số nguyên hợp lệ.");
}
