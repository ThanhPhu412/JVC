let arr = [1, 2, 'ba', 4.5, 'năm', 6, null, undefined, true, false, 9.0, '10'];

let integers = arr.filter(item => Number.isInteger(item));

if (integers.length > 0) {
    console.log('Các số nguyên trong mảng là:', integers);
} else {
    console.log('Trong mảng không tồn tại số nguyên');
}