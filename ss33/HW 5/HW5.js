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