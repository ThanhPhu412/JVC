class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Published Year: ${this.publishedYear}`);
        console.log();
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, publishedYear) {
        const book = new Book(title, author, publishedYear);
        this.books.push(book);
    }

    displayBooks() {
        if (this.books.length === 0) {
            console.log("The library is empty.");
        } else {
            console.log("Books in the library:");
            this.books.forEach(book => {
                book.displayInfo();
            });
        }
    }
}

const library = new Library();
while (true) {
    const title = prompt("Nhập tiêu đề sách (hoặc nhấn Hủy để kết thúc):");
    if (title === null) {
        break;
    }
    const author = prompt("Nhập tác giả sách:");
    const publishedYear = prompt("Nhập năm xuất bản sách:");
    library.addBook(title, author, publishedYear);
}
library.displayBooks();
