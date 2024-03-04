function VietHoaKyTuCuoiCuaMoiTu(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
    }
    return words.join(' ');
}
let str = prompt("Nhập vào chuỗi:");
console.log(VietHoaKyTuCuoiCuaMoiTu(str));
