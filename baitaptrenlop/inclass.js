// const inputString = prompt("Nhập vào một chuỗi bất kỳ:");

// const subStrings = [];
// for (let i = 0; i < inputString.length; i++) {
//     let currentSubString = "";
//     for (let j = i; j < inputString.length; j++) {
//         currentSubString += inputString[j];
//         subStrings.push(currentSubString);
//     }
// }

// console.log("Các chuỗi con trong chuỗi đã nhập:");
// console.log(subStrings);
// let str = prompt("nhập chuỗi kí tự: ");

// function countNonSpaceChars(s) {
//     let count = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log('Số ký tự không phải dấu cách trong chuỗi là:', countNonSpaceChars(str));
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }
// Khai báo chuỗi bất kỳ
// let str = "Xin chào, tôi là Microsoft Copilot!";

// function countNonSpaceCharacters(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log('Số ký tự trong chuỗi (không tính ký tự trống):', countNonSpaceCharacters(str));
// function demSoLanXuatHien(chuoi, kyTu) {
//     let dem = 0;
//     for (let i = 0; i < chuoi.length; i++) {
//         if (chuoi[i] === kyTu) {
//             dem++;
//         }
//     }
//     return dem;
// }

// const chuoiNhap = prompt("Nhập vào một chuỗi: ");
// const kyTuNhap = prompt("Nhập vào một ký tự: ");
// const soLanXuatHien = demSoLanXuatHien(chuoiNhap, kyTuNhap);
// console.log(`Số lần xuất hiện của ký tự '${kyTuNhap}' trong chuỗi '${chuoiNhap}' là: ${soLanXuatHien}`);

// const person = {
//     firstName: "Phu",
//     lastName: "Nguyen",
//     set fullName(name) {
//         const parts = name.split (" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },
//     };
//     person.fullName = "Phu Nguyen";
// //     console.log()
// let books = [
//     {author: 'Tacgia1', name: 'sách 1'},
//     {author: 'Tacgia2', name: 'sách 2'},
//     {author: 'Tacgia3', name: 'sách 3'},
// ];
// let authorName = prompt("Nhập tên tác giả:");
// let foundBooks = books.filter(book => book.author === authorName);
// if (foundBooks.length > 0) {
//     console.log("Đã tìm thấy các sách sau:");
//     foundBooks.forEach(book => console.log(book.name));
// } else {
//     console.log("Không tìm thấy sách");
// }
// Khai báo đối tượng danh bạ
// let phoneBook = {
//     contacts: [
//         {
//             name: 'Thanh',
//             phone: '0123456789',
//             email: 'NguyenPhu@gmail.com'
//         },
//         {
//             name: 'hong',
//             phone: '0987654321',
//             email: 'phuho@gmail.com'
//         }
//          ]
// };
// for (let contact of phoneBook.contacts) {
//     console.log('Name: ' + contact.name);
//     console.log('Phone: ' + contact.phone);
//     console.log('Email: ' + contact.email);
//     console.log('------------------------');
// }
// Khai báo các đối tượng và danh sách
// let products = [];
// let employees = [];
// let invoices = [];

// // Tạo đối tượng sản phẩm và thêm vào danh sách sản phẩm
// let product = {
//     id: 1,
//     name: 'Product1',
//     price: 10000,
//     expiryDate: '21/01/2024'
// };
// products.push(product);

// // Tạo đối tượng nhân viên và thêm vào danh sách nhân viên
// let employee = {
//     id: 1,
//     name: 'Employee1',
//     age: 30
// };
// employees.push(employee);

// // Tạo đối tượng hóa đơn và thêm vào danh sách hóa đơn
// let invoice = {
//     product: product,
//     quantity: 1,
//     value: product.price
// };
// invoices.push(invoice);

// // Hiển thị thông tin tổng quan
// function displayOverview() {
//     console.log('Số lượng sản phẩm: ' + products.length);
//     console.log('Số lượng nhân viên: ' + employees.length);

//     let revenue = 0;
//     for (let invoice of invoices) {
//         revenue += invoice.value;
//     }
//     console.log('Doanh thu: ' + revenue);
// }

// displayOverview();

// // Kiểm tra sản phẩm sắp hết hạn sử dụng
// function checkExpiry() {
//     let today = new Date();
//     let nearExpiryProducts = products.filter(product => {
//         let [day, month, year] = product.expiryDate.split('/');
//         let expiryDate = new Date(year, month - 1, day);
//         // Kiểm tra nếu còn ít hơn 30 ngày đến hạn sử dụng
//         return (expiryDate - today) / (1000 * 60 * 60 * 24) < 30;
//     });

//     console.log('Sản phẩm sắp hết hạn sử dụng:');
//     for (let product of nearExpiryProducts) {
//         console.log(product.name);
//     }
// }

// checkExpiry();
// Tạo đối tượng sách
function Book(title, author, publishedYear, isAvailable) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = isAvailable;
    this.borrow = function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        } else {
            return false;
        }
    };
    this.returnBook = function() {
        this.isAvailable = true;
    };
}
let library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    borrowBook: function(title) {
        for (let book of this.books) {
            if (book.title === title) {
                return book.borrow();
            }
        }
        return false;
    }
};
let book1 = new Book('Book1', 'Author1', 2020, true);
library.addBook(book1);

let book2 = new Book('Book2', 'Author2', 2021, true);
library.addBook(book2);
let bookTitle = prompt("Nhập vào tên sách bạn muốn mượn:");
let isBorrowed = library.borrowBook(bookTitle);
if (isBorrowed) {
    console.log('Bạn đã mượn thành công cuốn sách ' + bookTitle);
} else {
    console.log('Cuốn sách ' + bookTitle + ' không có sẵn để mượn');
}

