
var side1 = Number(prompt("Nhập độ dài cạnh thứ nhất:"));
var side2 = Number(prompt("Nhập độ dài cạnh thứ hai:"));
var side3 = Number(prompt("Nhập độ dài cạnh thứ ba:"));


if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  var s = (side1 + side2 + side3) / 2;
  
  var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
 alert("Độ dài 3 cạnh của tam giác là: " + side1 + ", " + side2 + ", " + side3);
  alert("Diện tích tam giác là: " + area.toFixed(2));
} else {
  
 alert("Độ dài 3 cạnh nhập vào không tạo thành một tam giác hợp lệ!");
}
