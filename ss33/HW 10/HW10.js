function Product(id, name, price, expirationDate) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.expirationDate = expirationDate;
}

let products = [];

function addProduct() {
  let id = prompt("Nhập ID sản phẩm:");
  let name = prompt("Nhập tên sản phẩm:");
  let price = parseFloat(prompt("Nhập giá sản phẩm:"));
  let expirationDate = prompt("Nhập hạn sử dụng sản phẩm (dd/mm/yyyy):");
  let product = new Product(id, name, price, expirationDate);
  products.push(product);
}

function Employee(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

let employees = [];

function addEmployee() {
  let id = prompt("Nhập ID nhân viên:");
  let name = prompt("Nhập tên nhân viên:");
  let age = parseInt(prompt("Nhập tuổi nhân viên:"));
  let employee = new Employee(id, name, age);
  employees.push(employee);
}

function Invoice(products, quantities, values) {
  this.products = products;
  this.quantities = quantities;
  this.values = values;
}

let invoices = [];

function addInvoice() {
  let invoiceProducts = [];
  let quantities = [];
  let values = [];
  let more = true;
  while (more) {
    let productId = prompt("Nhập ID sản phẩm được bán:");
    let product = products.find(product => product.id === productId);
    if (product) {
      let quantity = parseInt(prompt("Nhập số lượng bán:"));
      let value = product.price * quantity;
      invoiceProducts.push(product);
      quantities.push(quantity);
      values.push(value);
    } else {
      console.log("Không tìm thấy sản phẩm với ID đã nhập.");
    }
    let answer = prompt("Bạn có muốn nhập thêm sản phẩm không? (y/n):");
    if (answer !== 'y') {
      more = false;
    }
  }
  let invoice = new Invoice(invoiceProducts, quantities, values);
  invoices.push(invoice);
}

function displayOverview() {
  console.log("Thông tin tổng quan:");
  console.log(`Số lượng sản phẩm: ${products.length}`);
  console.log("Thông tin sản phẩm:");
  for (let product of products) {
    console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Hạn sử dụng: ${product.expirationDate}`);
  }
  console.log(`Số lượng nhân viên: ${employees.length}`);
  console.log("Thông tin nhân viên:");
  for (let employee of employees) {
    console.log(`ID: ${employee.id}, Tên: ${employee.name}, Tuổi: ${employee.age}`);
  }
  console.log(`Doanh thu: ${calculateTotalRevenue()}`);
}

function calculateTotalRevenue() {
  let total = 0;
  for (let invoice of invoices) {
    for (let value of invoice.values) {
      total += value;
    }
  }
  return total;
}

function checkExpiration() {
  let today = new Date();
  let expiredProducts = [];
  for (let product of products) {
    let expirationDate = new Date(product.expirationDate);
    let difference = expirationDate - today;
    if (difference <= 7 * 24 * 60 * 60 * 1000) {
      expiredProducts.push(product);
    }
  }
  if (expiredProducts.length > 0) {
    console.log("Các sản phẩm sắp hết hạn sử dụng:");
    for (let product of expiredProducts) {
      console.log(`ID: ${product.id}, Tên: ${product.name}, Hạn sử dụng: ${product.expirationDate}`);
    }
    console.log("Cần lưu ý bán hoặc thanh lý các sản phẩm này.");
  } else {
    console.log("Không có sản phẩm nào sắp hết hạn sử dụng.");
  }
}

function main() {
  let running = true;
  while (running) {
    let choice = prompt("Chọn 1 để nhập sản phẩm, 2 để nhập nhân viên, 3 để nhập hóa đơn, 4 để hiển thị thông tin tổng quan, 5 để kiểm tra hạn sử dụng, 6 để thoát:");
    switch (choice) {
      case '1':
        addProduct();
        break;
      case '2':
        addEmployee();
        break;
      case '3':
        addInvoice();
        break;
      case '4':
        displayOverview();
        break;
      case '5':
        checkExpiration();
        break;
      case '6':
        running = false;
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
  }
}

main();
