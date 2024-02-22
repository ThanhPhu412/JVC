
const a = Number(prompt("Nhập vào số thứ nhất:"));
const b = Number(prompt("Nhập vào số thứ hei:"));


if (Number.isNaN(a) || Number.isNaN(b)) {
  
 alert("Vui lòng nhập vào hai số hợp lệ!");
} else {
  if (a % b === 0) {
   alert(`${a} chia hết cho ${b}.`);
  } else if (b % a === 0) {
   alert(`${b} chia hết cho ${a}.`);
  } else {
   alert(`${a} và ${b} không chia hết cho nhau.`);
  }
}
