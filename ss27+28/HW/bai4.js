let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter(num => num % 2 === 0);
let oddArr = arr.filter(num => num % 2 !== 0);

console.log('Mảng chỉ chứa số chẵn:', evenArr);
console.log('Mảng chỉ chứa số lẻ:', oddArr);
