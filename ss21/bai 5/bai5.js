
var a = Number(prompt("Nhập vào số a:"));
var b = Number(prompt("Nhập vào số b:"));
if (Number.isNaN(a) || Number.isNaN(b)) {
 alert("Vui lòng nhập vào hai số hợp lệ!");
} else {
  if (a === 0) {  
    if (b === 0) {
     alert("Phương trình có vô số nghiệm.");
    } else {
     alert("Phương trình vô nghiệm.");
    }
  } else {
    var x = -b / a;
   alert("Phương trình có nghiệm x = " + x);
  }
}
