function timPhanTuChuaChuoi(mang, chuoi) {
    const ketQua = mang.filter((phanTu) => phanTu.includes(chuoi));
    return ketQua;
}

// Khai báo mảng gồm nhiều chuỗi bất kỳ
const mangChuoi = ["apple", "banana", "grape", "watermelon", "pineapple"];

const chuoiNhap = prompt("Nhập vào một chuỗi: ");

const ketQuaTimThay = timPhanTuChuaChuoi(mangChuoi, chuoiNhap);
console.log(`Các phần tử trong mảng chứa chuỗi '${chuoiNhap}':`, ketQuaTimThay);
