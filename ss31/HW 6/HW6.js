function LaTamGiac(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
function DemSoTamGiac(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (LaTamGiac(arr[i], arr[j], arr[k])) {
                    count++;
                }
            }
        }
    }
    return count;
}
let arr = [4, 6, 3, 7];
console.log(DemSoTamGiac(arr));
