
import { books } from "./data.js";

function getBookById(id) {
    let book = books.find(book => { return book.id == id });
    return 'Title : ' + book.title +
        ' category : ' + book.category +
        ' statu : ' + book.status;
}

// console.log(getBookById(2));

function getBooksByCategory(category) {
    let booksFiltred = books.filter(book => {return book.category == category});
    return booksFiltred;
}

console.log(getAvailableBooks());


function displayBooks(books) {
    books.forEach(book =>{ 
        console.log(
            'Title : ' + book.title +
        ' category : ' + book.category +
        ' statu : ' + book.status
        );
        
    })
}

function getAvailableBooks() {
    const availableBooks = books.filter(book =>{ return book.status == 'Disponible'})
    return availableBooks
}