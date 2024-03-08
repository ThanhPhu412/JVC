// Định nghĩa cấu trúc đối tượng Hóa Đơn
function Order(invoiceNumber, creationDate, totalValue) {
    this.invoiceNumber = invoiceNumber;
    this.creationDate = creationDate;
    this.totalValue = totalValue;
  }
  let orders = [];
  function addOrder() {
    let invoiceNumber = prompt("Nhập số hóa đơn:");
    let creationDate = prompt("Nhập ngày tạo:");
    let totalValue = parseFloat(prompt("Nhập tổng giá trị:"));
    let order = new Order(invoiceNumber, creationDate, totalValue);
    orders.push(order);
  }
  function displayOrders() {
    orders.forEach(order => {
      console.log(`Số Hóa Đơn: ${order.invoiceNumber}, Ngày Tạo: ${order.creationDate}, Tổng Giá Trị: ${order.totalValue}`);
    });
  }
  function calculateTotalValue() {
    let total = orders.reduce((sum, order) => sum + order.totalValue, 0);
    console.log(`Tổng giá trị của tất cả hóa đơn là: ${total}`);
  }
  function main() {
    let running = true;
    while (running) {
      let choice = prompt("Chọn 1 để nhập hóa đơn, 2 để hiển thị hóa đơn, 3 để tính tổng giá trị, 4 để thoát:");
      switch (choice) {
        case '1':
          addOrder();
          break;
        case '2':
          displayOrders();
          break;
        case '3':
          calculateTotalValue();
          break;
        case '4':
          running = false;
          console.log("Thoát chương trình.");
          break;
        default:
          console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
      }
    }
  }
  
  main();
  