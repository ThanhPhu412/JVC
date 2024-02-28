let arr = [1, 2, 'ba', 4.5, 'năm', 6, null, undefined, true, false, 9.0, '10'];

let value = prompt("Nhập vào giá trị bạn muốn tìm:");

let index = arr.indexOf(value);

if (index !== -1) {
    console.log('Phần tử', value, 'nằm ở vị trí', index, 'trong mảng.');
} else {
    console.log('Phần tử', value, 'không tồn tại trong mảng.');
}
