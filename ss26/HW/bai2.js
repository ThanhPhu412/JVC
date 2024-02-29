let arr = [1, 2,4.5,6,9.0,];

let value = prompt("Nhập vào giá trị bạn muốn tìm:");

let index = arr.indexOf(Number(value));

if (index !== -1) {
    console.log('Phần tử', value, 'nằm ở vị trí', index, 'trong mảng.');
} else {
    console.log('Phần tử', value, 'không tồn tại trong mảng.');
}
