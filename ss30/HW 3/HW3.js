function SapXepChuoi(str) {
    let chu = [], so = [], dacBiet = [];
    
    for (let i = 0; i < str.length; i++) {
        let kiTu = str[i];
        if ((kiTu >= 'a' && kiTu <= 'z') || (kiTu >= 'A' && kiTu <= 'Z')) {
            chu.push(kiTu);
        } else if (kiTu >= '0' && kiTu <= '9') {
            so.push(kiTu);
        } else {
            dacBiet.push(kiTu);
        }
    }
    
    return chu.concat(so, dacBiet);
}
let str = prompt("Nhập vào chuỗi:");
console.log(SapXepChuoi(str));
