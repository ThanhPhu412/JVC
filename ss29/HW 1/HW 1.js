function kiemTraChanLe(so) {
    if (so % 2 === 0) {
        return "chẵn";
    } else {
        return "lẻ";
    }
}

const so1 = Math.floor(Math.random() * 100) + 1;
const so2 = Math.floor(Math.random() * 100) + 1;
const so3 = Math.floor(Math.random() * 100) + 1;

console.log(`Số ${so1} là số ${kiemTraChanLe(so1)}.`);
console.log(`Số ${so2} là số ${kiemTraChanLe(so2)}.`);
console.log(`Số ${so3} là số ${kiemTraChanLe(so3)}.`);
