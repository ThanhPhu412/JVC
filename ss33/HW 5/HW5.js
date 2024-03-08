class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true; // Mặc định sách có sẵn
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Bạn đã mượn cuốn sách "${this.title}".`);
        } else {
            console.log(`Cuốn sách "${this.title}" đã được mượn.`);
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Bạn đã trả cuốn sách "${this.title}".`);
        } else {
            console.log(`Cuốn sách "${this.title}" đã có sẵn.`);
        }
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    isBookAvailable(title) {
        const book = this.books.find((b) => b.title === title);
        if (book) {
            return book.isAvailable;
        }
        return false;
    }
}
const myLibrary = new Library();
const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("Lord of the Rings", "J.R.R. Tolkien", 1954);
myLibrary.addBook(book1);
myLibrary.addBook(book2);

book1.borrow();
book1.returnBook();
book2.borrow();

console.log(`Cuốn sách "Harry Potter" có sẵn để mượn: ${myLibrary.isBookAvailable("Harry Potter")}`);
console.log(`Cuốn sách "Lord of the Rings" có sẵn để mượn: ${myLibrary.isBookAvailable("Lord of the Rings")}`);
