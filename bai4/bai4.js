
const year = Number(prompt("Nhập vào một năm:"));
if (Number.isNaN(year)) {
  alert("Vui lòng nhập vào một số hợp lệ!");
} else { 
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {  
    alert(`${year} là năm nhuận.`);
  } else {
    alert(`${year} không phải năm nhuận.`);
  }
}
