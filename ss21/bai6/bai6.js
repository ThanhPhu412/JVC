const number = Number(prompt("Nhập vào một số có 4 chữ số:"));
if (Number.isNaN(number) || number < 1000 || number > 9999) {
  alert("Vui lòng nhập vào một số hợp lệ!");
} else {
  const thousands = Math.floor(number / 1000); // Chữ số hàng nghìn
  const hundreds = Math.floor((number - thousands * 1000) / 100); // Chữ số hàng trăm
  const tens = Math.floor((number - thousands * 1000 - hundreds * 100) / 10); // Chữ số hàng chục
  const units = number - thousands * 1000 - hundreds * 100 - tens * 10; // Chữ số hàng đơn vị
  alert(`Chữ số hàng nghìn của số ${number} là: ${thousands}`);
  alert(`Chữ số hàng trăm của số ${number} là: ${hundreds}`);
  alert(`Chữ số hàng chục của số ${number} là: ${tens}`);
  alert(`Chữ số hàng đơn vị của số ${number} là: ${units}`);
}
