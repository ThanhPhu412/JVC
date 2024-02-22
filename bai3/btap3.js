
const number = Number(prompt("Nhập vào một số:"));

if (Number.isNaN(number)) {
  alert("Vui lòng nhập vào một số hợp lệ!");
} else {
  const root = Math.sqrt(number); // Tính căn bậc hai của số đó
  if (Number.isInteger(root)) {
    alert(`${number} là một số chính phương.`);
  } else {
    alert(`${number} không phải là một số chính phương.`);
  }
}
