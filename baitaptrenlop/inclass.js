const inputString = prompt("Nhập vào một chuỗi bất kỳ:");

const subStrings = [];
for (let i = 0; i < inputString.length; i++) {
    let currentSubString = "";
    for (let j = i; j < inputString.length; j++) {
        currentSubString += inputString[j];
        subStrings.push(currentSubString);
    }
}

console.log("Các chuỗi con trong chuỗi đã nhập:");
console.log(subStrings);
