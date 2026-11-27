import { books } from "./data.js";

const tableBody = document.getElementById('main-data')

    function creatCulomns(books) {
        tableBody.innerHTML = '';
        books.forEach(book => {
            let tableRow = document.createElement('tr');
            let bookId = document.createElement('td');
            bookId.textContent = book.id

            let bookName = document.createElement('td');
            bookName.textContent = book.title

            let bookCateg = document.createElement('td');
            bookCateg.textContent = book.category;

            let bookStatu = document.createElement('td');
            bookStatu.textContent = book.status

            tableRow.append(bookId, bookName, bookCateg, bookStatu);
            tableBody.appendChild(tableRow);
        });

    }

    creatCulomns(books)