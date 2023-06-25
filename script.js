//Query Selectors
let newBookBtn = document.querySelector("#newBook");

//Library array
let myLibrary = []; 


//Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Function to create a new book to be added
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#readStatus").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}

//Button to display the form
newBookBtn.addEventListener("click", () => {
    let newBookForm = document.querySelector("#bookForm");
    newBookForm.style.display = "block";
})

//Button to add filled out book form to the library
document.querySelector("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
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
    </div>`;
        libraryDisplay.appendChild(addedBook);
    }
}

