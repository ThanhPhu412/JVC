// const inputString = prompt("Nhập vào một chuỗi bất kỳ:");

// const subStrings = [];
// for (let i = 0; i < inputString.length; i++) {
//     let currentSubString = "";
//     for (let j = i; j < inputString.length; j++) {
//         currentSubString += inputString[j];
//         subStrings.push(currentSubString);
//     }
// }

// console.log("Các chuỗi con trong chuỗi đã nhập:");
// console.log(subStrings);
// let str = prompt("nhập chuỗi kí tự: ");

// function countNonSpaceChars(s) {
//     let count = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log('Số ký tự không phải dấu cách trong chuỗi là:', countNonSpaceChars(str));
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }
// Khai báo chuỗi bất kỳ
// let str = "Xin chào, tôi là Microsoft Copilot!";

// function countNonSpaceCharacters(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log('Số ký tự trong chuỗi (không tính ký tự trống):', countNonSpaceCharacters(str));
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

