function KiemTraMangDoiXung(arr) {
    let n = arr.length;
    for (let i = 0; i < n / 2; ++i) {
        if (arr[i] !== arr[n - i - 1]) {
            return false;
        }
    }
    return true;
}
let arr = [1, 2, 3, 2, 1];

if (KiemTraMangDoiXung(arr)) {
    console.log("Mang doi xung.");
} else {
    console.log("Mang khong doi xung.");
}
