function timCapSoTongBangSoNhap(mang, soNhap) {
    for (let i = 0; i < mang.length; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i] + mang[j] === soNhap) {
                return [mang[i], mang[j]];
            }
        }
    }
    return null;
}

const mangSoNguyen = [2, 5, 8, 10, 15, 20];

const soNhap = parseInt(prompt("Nhập vào một số nguyên:"));

// Gọi hàm và in kết quả ra màn hình
const capSoTimThay = timCapSoTongBangSoNhap(mangSoNguyen, soNhap);
if (capSoTimThay) {
    console.log(`Cặp số có tổng bằng ${soNhap}: ${capSoTimThay[0]} và ${capSoTimThay[1]}`);
} else {
    console.log(`Không tìm thấy cặp số có tổng bằng ${soNhap}`);
}
