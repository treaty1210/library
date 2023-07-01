//Query Selectors
let newBookBtn = document.querySelector("#newBook");

//Library array
let myLibrary = []; 


//Updated to class
class Book{
    constructor({title, author, pages, read}) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.length < 2) {
            alert("Title is too short. Book will not have title.");
            return;
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value.length < 2) {
            alert("Author's name is too short. Book will not contain author's name.");
            return;
        }
        this._author = value;
    }

//Function to create a new book to be added
    addBookToLibrary() {
        // let title = document.querySelector("#title").value;
        // let author = document.querySelector("#author").value;
        // let pages = document.querySelector("#pages").value;
        // let read = document.querySelector("#readStatus").checked;
        // let newBook = new Book(title, author, pages, read);
        myLibrary.push(this);
        displayLibrary();
    }
};


//Button to display the form
newBookBtn.addEventListener("click", () => {
    let newBookForm = document.querySelector("#bookForm");
    newBookForm.style.display = "block";
})

//Button to add filled out book form to the library
document.querySelector("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();

    //Setting new book as part of Book class
    let addBook = new Book({
        title: document.querySelector("#title").value,
        author: document.querySelector("#author").value,
        pages: document.querySelector("#pages").value,
        read: document.querySelector("#readStatus").checked});

    console.log(addBook)

    addBook.addBookToLibrary();
})

//Displays library array with updated information
function displayLibrary() {
    let libraryDisplay = document.querySelector(".libraryDisplay");
    libraryDisplay.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let addedBook = document.createElement("div");
        addedBook.innerHTML = `<div class="cardHeader">
        <h2 class="">${book.title}</h2>
        <h4 class="author">by ${book.author}</h4>
    </div>
    <div class="cardBody">
        <p>${book.pages} pages</p>
        <p class="read">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="removeButton" onclick="removeBook(${i})">Remove</button>
        <button class="toggleRead" onclick="toggleRead(${i})">Toggle Read</button>
    </div>`;
        libraryDisplay.appendChild(addedBook);
    }
}

//remove a book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

//toggle read on books
Book.prototype.toggleRead = function () {
    this.read = !this.read
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayLibrary();
}