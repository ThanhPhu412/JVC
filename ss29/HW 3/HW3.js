function demSoKyTu(chuoi) {
    // Loại bỏ ký tự trống (khoảng trắng, tab, xuống dòng)
    const chuoiDaLoaiBo = chuoi.replace(/\s/g, "");

    return chuoiDaLoaiBo.length;
}

// Khai báo chuỗi bất kỳ
const chuoiKhaiBao = "Hello, world! This is a sample string.";

const soKyTu = demSoKyTu(chuoiKhaiBao);
console.log(`Số ký tự trong chuỗi là: ${soKyTu}`);
