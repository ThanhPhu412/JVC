function vietHoaChuCaiDau(chuoi) {
    const mangChuoi = chuoi.split(" ");
    const ketQua = mangChuoi.map((tu) => tu.charAt(0).toUpperCase() + tu.slice(1)).join(" ");
    return ketQua;
}

// Khai báo chuỗi bất kỳ
const chuoiKhaiBao = "hello world! this is a sample string.";

const chuoiVietHoa = vietHoaChuCaiDau(chuoiKhaiBao);
console.log(`Chuỗi sau khi viết hoa chữ cái đầu: ${chuoiVietHoa}`);
