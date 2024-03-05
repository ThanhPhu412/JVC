let books = [
    {author: 'Tacgia1', name: 'sách 1'},
    {author: 'Tacgia2', name: 'sách 2'},
    {author: 'Tacgia3', name: 'sách 3'},
];
let authorName = prompt("Nhập tên tác giả:");
let foundBooks = books.filter(book => book.author === authorName);
if (foundBooks.length > 0) {
    console.log("Đã tìm thấy các sách sau:");
    foundBooks.forEach(book => console.log(book.name));
} else {
    console.log("Không tìm thấy sách");
}
