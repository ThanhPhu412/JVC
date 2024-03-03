function kiemTraChuoiNhap(chuoiKhaiBao, chuoiNhap) {
    // Chuyển chuỗi khai báo và chuỗi nhập vào thành mảng ký tự
    const mangKyTuKhaiBao = chuoiKhaiBao.split("");
    const mangKyTuNhap = chuoiNhap.split("");

    // Kiểm tra xem có thể tạo chuỗi nhập từ các ký tự trong chuỗi khai báo
    for (let i = 0; i < mangKyTuNhap.length; i++) {
        if (!mangKyTuKhaiBao.includes(mangKyTuNhap[i])) {
            return false;
        }
    }
    return true;
}

// Khai báo chuỗi
const chuoiKhaiBao = "abcdefghijklmnopqrstuvwxyz";

const chuoiNhap = prompt("Nhập vào một chuỗi: ");

const ketQua = kiemTraChuoiNhap(chuoiKhaiBao, chuoiNhap);
console.log(`Có thể tạo chuỗi '${chuoiNhap}' từ các ký tự trong chuỗi khai báo: ${ketQua}`);
