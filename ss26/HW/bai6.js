let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let result = arr.sort((a, b) => (a >= 0 && b < 0) ? 1 : -1);

console.log('Mảng sau khi di chuyển các phần tử âm lên đầu, phần tử dương về cuối:', result);
