function timPhanTuMaxDoDai(mang) {
    let phanTuMax = "";
    let doDaiMax = 0;

    for (let i = 0; i < mang.length; i++) {
        if (mang[i].length > doDaiMax) {
            doDaiMax = mang[i].length;
            phanTuMax = mang[i];
        }
    }

    return phanTuMax;
}

// Khai báo mảng gồm các phần tử ngẫu nhiên
const mangPhanTu = ["apple", "banana", "grape", "watermelon", "pineapple"];

// Gọi hàm và in kết quả ra màn hình
const phanTuLonNhat = timPhanTuMaxDoDai(mangPhanTu);
console.log(`Phần tử có độ dài lớn nhất trong mảng là: ${phanTuLonNhat}`);
