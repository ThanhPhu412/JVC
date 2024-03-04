function demSoLuongTamGiac(mang) {
    mang.sort((a, b) => a - b);

    let dem = 0;

    // Duyệt qua từng cặp phần tử trong mảng
    for (let i = 0; i < mang.length - 2; i++) {
        for (let j = i + 1; j < mang.length - 1; j++) {
            for (let k = j + 1; k < mang.length; k++) {
                // Kiểm tra điều kiện tạo tam giác
                if (mang[i] + mang[j] > mang[k]) {
                    console.log(`Tam giác có thể tạo ra từ các cạnh: ${mang[i]}, ${mang[j]}, ${mang[k]}`);
                    dem++;
                }
            }
        }
    }

    return dem;
}

const mangNhap = prompt("Nhập vào mảng số nguyên dương (cách nhau bằng dấu phẩy):");
const mangSoNguyenDuong = mangNhap.split(",").map(Number);

const soLuongTamGiac = demSoLuongTamGiac(mangSoNguyenDuong);
console.log(`Số lượng hình tam giác có thể tạo ra từ mảng là: ${soLuongTamGiac}`);
