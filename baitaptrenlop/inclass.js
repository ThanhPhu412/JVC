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
let str = prompt("nhập chuỗi kí tự: ");

function countNonSpaceChars(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log('Số ký tự không phải dấu cách trong chuỗi là:', countNonSpaceChars(str));
