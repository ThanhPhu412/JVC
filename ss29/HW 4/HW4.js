function demSoLanXuatHien(chuoi, kyTu) {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            dem++;
        }
    }
    return dem;
}

const chuoiNhap = prompt("Nhập vào một chuỗi: ");
const kyTuNhap = prompt("Nhập vào một ký tự: ");

const soLanXuatHien = demSoLanXuatHien(chuoiNhap, kyTuNhap);
console.log(`Số lần xuất hiện của ký tự '${kyTuNhap}' trong chuỗi '${chuoiNhap}' là: ${soLanXuatHien}`);
