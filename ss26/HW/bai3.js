let arr = [1, 2, 3, 4, 5, 1, 2, 3, 1, 1, 2, 2, 2];
let value = parseInt(prompt("Nhập vào một số nguyên bạn muốn tìm:"));
let count = arr.reduce((total, num) => (num === value ? total + 1 : total), 0);

console.log('Số', value, 'xuất hiện', count, 'lần trong mảng.');
